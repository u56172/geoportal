import React, { useEffect, useMemo, useState } from "react";
import { Carousel } from "../components/Carousel";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const API = "http://localhost:10000";

function toImageSrc(imgUrl) {
  if (!imgUrl) return "";
  if (imgUrl.startsWith("http://") || imgUrl.startsWith("https://")) return imgUrl;

  if (imgUrl.startsWith("/static/")) return `${API}${encodeURI(imgUrl)}`;

  return `${API}/static/${encodeURIComponent(imgUrl)}`;
}

function ListOfItems() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch(`${API}/app/get_facilities`)
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
    <div className ='listofitems'>
        <Button
          className='back__home__button'
          variant='contained'
          size='large'
          component={Link}
          to='/'>
        BACK</Button>
      <div className="listofitems_title">Facilities</div>
      <div className="mt-8">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default ListOfItems;
