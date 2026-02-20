from fastapi import APIRouter
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json

router_get_facilities = APIRouter()
router_get_users = APIRouter()
router_post_users = APIRouter()
router_login = APIRouter()

class UserData(BaseModel):
    username: str
    email: str
    password: str

class LoginData(BaseModel):
    username: str
    password: str

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

@router_get_users.get("/get_users")
async def get_users():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)
        sql_query = text("""
            SELECT * FROM login_module
        """)
        with db_connection.connect() as conn:
            result = conn.execute(sql_query)
            users = [dict(row._mapping) for row in result]
            return {"status": "success", "data": users}
    except Exception as e:
        return {"status": "error", "message": str(e)}


@router_login.post("/login")
async def login(data: LoginData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)
        sql_query = text("""
            SELECT id, username FROM login_module
            WHERE password = :password AND username = :username
        """)
        with db_connection.connect() as conn:
            result = conn.execute(sql_query, {
                "username": data.username,
                "password": data.password
            })
            user = result.fetchone()
            if user:
                return {"status": "success", "message": "Login successful", "user": dict(user._mapping)}
            else:
                return JSONResponse(status_code=401, content={"status": "error", "message": "Invalid username or password"})
    except Exception as e:
        return {"status": "error", "message": str(e)}


@router_post_users.post("/insert_user")
async def insert_user(user: UserData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)
        with db_connection.connect() as conn:
            check = text("SELECT 1 FROM login_module WHERE username = :username OR email = :email")
            if conn.execute(check, {"username": user.username, "email": user.email}).fetchone():
                return JSONResponse(status_code=409, content={"status": "error", "message": "Username or email is already taken"})

            sql_query = text("""
                INSERT INTO login_module (username, password, email)
                VALUES (:username, :password, :email)
            """)
            conn.execute(sql_query, {
                "username": user.username,
                "password": user.password,
                "email": user.email
            })
            conn.commit()
            return {"status": "success", "message": "User inserted successfully"}
    except Exception as e:
        return {"status": "error", "message": str(e)}
