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
            insert into facilities (name, city, img_url)
            values (:name, :city, :img_url);
        """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)

    except Exception as e:
        print(e)
        raise e

    return {"status": 1}
