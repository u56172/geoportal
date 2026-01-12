import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Services(props) {
    return ( <div>
        <div>SERVICES</div>
        <Button
        className='home__button'
        variant='contained'
        size='large'
        component={Link}
        to='/map'
    >
        PRZEJDŹ DO MAPY
            </Button>

            <Button
        className='home__button'
        variant='contained'
        size='large'
        component={Link}
        to='/list'
    >
        PRZEJDŹ DO LISTY UŻYTKOWNIKÓW
            </Button>

            <Button
        className='home__button'
        variant='contained'
        size='large'
        component={Link}
        to='/newuser'
    >
        DODAJ NOWEGO UŻYTKOWNIKA
            </Button>
        </div>
    );
}

export default Services;