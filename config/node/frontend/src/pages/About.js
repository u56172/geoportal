import React from 'react';
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';

function About(props) {
    return (
        <>
        <div className='about'>

            <h1 className='about__tittle'>GEOPORTAL</h1>
            <Typography className='about__subtitle'>
                Thematic geoportal for facilities etc.
            </Typography>

            <Button
                className='back__home__button'
                variant='contained'
                size='large'
                component={Link}
                to='/'
            >
                BACK</Button>

        </div>
        </>
    );
}

export default About;