from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import create_engine, text

from app.settings import db_name, db_user, db_password

router_insert = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )


class FacilityData(BaseModel):
    name: str
    city: str
    img_url: str


@router_insert.post("/insert_facility")
async def insert_facility(facility: FacilityData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        params = {
            "name": facility.name,
            "city": facility.city,
            "img_url": facility.img_url
        }

        sql_query = text("""
                         INSERT INTO facilities (name, city, img_url)
                         VALUES (:name, :city, :img_url);
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()

        return {"status": "success", "message": "Facility added successfully."}

    except Exception as e:
        print(f"Error inserting facility: {e}")
        return {"status": "error", "message": str(e)}

    return {"status": 1}
