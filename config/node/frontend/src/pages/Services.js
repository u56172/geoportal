import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import skater from '../static/skater.jpg';
import add from '../static/add.jpg';
import glass from '../static/glass.png';
import logo2 from "../static/logo2.png";
import React from "react";

export default function MultiActionAreaCard() {
  return (
    <div className="services">
      <div className="services__top">
        <div className='home__logo'>
            <Link to="/" className="home__logoLink">
              <img src={logo2} />
            </Link>
        </div>
         <div className="services__title">GEOSERVICES.</div>
        <div className="services__cards">

          <div className="services__card__skater">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={skater} alt="skater" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    See all facilities
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Here you can scroll over a lot of facilities and see what matches you best,
                    diffrent places such as stadions, parks and many more!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/list">
                  Browse
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="services__card__glass">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={glass} alt="glass" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Open the map
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Here you have a map with bunch of colorfull pins that points to places in real life (for example in your city),
                    so you can see where to go next!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" component={Link} to="/map">
                  Explore
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="services__card__add">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={add} alt="add" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Add a facility
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  If you want to add much more places and share facilities with others you can
                    add here more places and then others can see it!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="services__add__section">
                <Button size="small" color="primary" component={Link} to="/newfacility">
                  Add
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

      <div className="services__bottom" />
    </div>
  );
}
