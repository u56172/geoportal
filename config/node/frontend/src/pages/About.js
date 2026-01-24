import React from 'react';
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import about from "../static/about.png";
function About() {
    return (
        <div className='about'>
            <div className='about__top'>
                <h1 className='about__title'>GEOPORTAL.</h1>

                <Typography className='about__subtitle'>
                  This website was created to hold info about amazing facilities in one place!
                    <br/>
                    <br/>
                    Author: Mateusz Woźniak
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
          <div className='about__lightbulb'>
              <img src={about} />
          </div>
      </div>
    </div>

    );
}

export default About;