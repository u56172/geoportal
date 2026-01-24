import React, { useEffect, useMemo, useState } from "react";
import { Carousel } from "../components/Carousel";
import { Link } from "react-router-dom";
import logo2 from "../static/logo2.png";

function toImageSrc(imgUrl) {
  if (!imgUrl) return "";
  if (imgUrl.startsWith("http")) return imgUrl;
  if (imgUrl.startsWith("/static/")) return `/app${imgUrl}`;
  return `/app/static/${imgUrl}`;
}

function ListOfItems() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch('/app/get_facilities')
      .then((res) => res.json())
      .then((res) => {
        setFacilities(res.data ?? []);
      });
  }, []);

  const slides = useMemo(() => {
    return facilities.map((f) => ({
      id: f.id,
      title: f.name,
      button: f.city,
      src: toImageSrc(f.img_url),
    }));
  }, [facilities]);

  return (
    <div className='listofitems'>
        <div className="listofitems__header">
          <div className='home__logo'>
            <Link to="/" className="home__logoLink">
              <img src={logo2} />
            </Link>
          </div>
          <div className="listofitems_title">LIST OF FACILITIES.</div>
        </div>
      <div className="listofitems__content">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default ListOfItems;
