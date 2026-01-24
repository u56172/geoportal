from fastapi import APIRouter
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password
from fastapi.responses import JSONResponse
import json

router_get_facilities = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )


@router_get_facilities.get("/get_facilities")
async def get_facilities():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sql_query = text("""select * from facilities""")

        with db_connection.connect() as conn:
            result = conn.execute(sql_query)
            facilities = [dict(row._mapping) for row in result]

        return {"status": "success", "data": facilities}

    except Exception as e:
        return {"status": "error", "message": str(e)}


@router_get_facilities.get("/get_facilities_geojson")
async def get_facilities_geojson():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)
        sql_query = text("""
            SELECT id, name, city, img_url,
                   ST_AsGeoJSON(ST_Transform(geom, 4326)) as geometry
            FROM facilities
        """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query)
            
            features = []
            
            for row in result:
                row_dict = dict(row._mapping)
                geometry_str = row_dict['geometry']
                geometry = json.loads(geometry_str) if isinstance(geometry_str, str) else geometry_str
                
                features.append({
                    "type": "Feature",
                    "geometry": geometry,
                    "properties": {
                        "id": row_dict['id'],
                        "name": row_dict['name'],
                        "city": row_dict['city'],
                        "img_url": row_dict['img_url']
                    }
                })

        return JSONResponse(content={"type": "FeatureCollection", "features": features})

    except Exception as e:
        return {"status": "error", "message": str(e)}
