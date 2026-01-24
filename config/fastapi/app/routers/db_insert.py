from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password
import requests
router_insert = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

class FacilityData(BaseModel):
    name: str
    street: str = ""
    number: str = ""
    city: str
    img_url: str

def get_coordinates(street: str, number: str, city: str) -> list:
    url = "https://nominatim.openstreetmap.org/search"
    headers = {'User-Agent': 'GeoportalApp/1.0'}
    
    street = street.strip() if street else ""
    number = number.strip() if number else ""
    city = city.strip() if city else ""
    
    if not city:
        raise ValueError("City is required")
    
    if street and number:
        query = f"{street} {number}, {city}, Polska"
    elif street:
        query = f"{street}, {city}, Polska"
    else:
        query = f"{city}, Polska"
    
    params = {
        'q': query,
        'format': 'json',
        'limit': 10,
        'countrycodes': 'pl',
        'addressdetails': 1
    }
    
    response = requests.get(url, headers=headers, params=params, timeout=10)
    response.raise_for_status()
    data = response.json()
    
    if not data:
        raise ValueError(f"Address not found: {query}")
    
    if street and number:
        street_lower = street.lower()
        number_lower = number.lower()
        
        for result in data:
            address = result.get('address', {})
            house_num = str(address.get('house_number', '')).strip().lower()
            road = (address.get('road', '') or address.get('street', '')).lower()
            
            if house_num == number_lower and street_lower in road:
                return [float(result['lat']), float(result['lon'])]
    
    result = data[0]
    return [float(result['lat']), float(result['lon'])]

@router_insert.post("/insert_facility")
async def insert_facility(facility: FacilityData):
    try:
        db = connect_to_db(db_name, db_user, db_password)
        latitude, longitude = get_coordinates(facility.street, facility.number, facility.city)

        sql = text("""
            INSERT INTO facilities (name, city, img_url, geom)
            VALUES (:name, :city, :img_url, 
                    ST_Transform(ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326), 3857))
        """)

        with db.connect() as conn:
            conn.execute(sql, {
                "name": facility.name,
                "city": facility.city,
                "img_url": facility.img_url,
                "longitude": longitude,
                "latitude": latitude
            })
            conn.commit()

        return {"status": "success"}

    except Exception as e:
        return {"status": "error", "message": str(e)}
