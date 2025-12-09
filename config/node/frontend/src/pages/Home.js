import React from 'react';
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div className='home'>
            <h1 className='home__tittle'>GEOPORTAL</h1>
            <Typography className='home__subtitle'>
                Geoportal tematyczny poświęcony danym przestrzennym
            </Typography>

            <Button
                className='home__button'
                variant='contained'
                size='large'
                component={Link}
                to='services'
            >
                START</Button>

        </div>
    );
}

export default Home;