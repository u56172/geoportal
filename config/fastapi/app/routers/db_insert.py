from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password
import requests
from bs4 import BeautifulSoup
router_insert = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

#Tu przechwytywane dane przez FastAPI
class FacilityData(BaseModel):
    name: str
    city: str
    img_url: str

def get_coordinates(city: str) -> list:
    url: str = f'https://pl.wikipedia.org/wiki/{city}'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/118.0 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    response_html = BeautifulSoup(response.text, 'html.parser')

    latitude = float(response_html.select('.latitude')[1].text.replace(',', '.'))
    longitude = float(response_html.select('.longitude')[1].text.replace(',', '.'))
    return [latitude, longitude]

@router_insert.post("/insert_facility")
async def insert_facility(facility: FacilityData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        latitude, longitude = get_coordinates(facility.city)

        params = {
            "name": facility.name,
            "city": facility.city,
            "img_url": facility.img_url,
            "longitude": longitude,
            "latitude": latitude
        }

        sql_query = text("""
                         INSERT INTO facilities (name, city, img_url, geom)
                         VALUES (:name, :city, :img_url, ST_Transform(ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326), 3857));
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()

        return {"status": "success", "message": "Facility added successfully."}

    except Exception as e:
        print(f"Error inserting facility: {e}")
        return {"status": "error", "message": str(e)}
