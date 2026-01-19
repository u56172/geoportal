import React from 'react';
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import logo from '../static/logo.png';
function About(props) {
    return (
        <div className='about'>
            <div className='about__top'>
                <div className='home__logo'>
                  <Link to="/" className="home__logoLink">
                    <img src={logo} />
                  </Link>
                </div>
                <h1 className='about__tittle'>GEOPORTAL</h1>

                <Typography className='about__subtitle'>
                  Thematic geoportal for facilities etc.
                </Typography>
              </div>

      <div className='about__bottom'>
        <Button
          className='back__home__button'
          variant='contained'
          size='large'
          component={Link}
          to='/'
        >
          BACK
        </Button>
      </div>
    </div>

    );
}

export default About;