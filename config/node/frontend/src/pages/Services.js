import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import skaterImg from '../static/skater.jpg';
import glassImg from '../static/glass.jpg';
import addImg from '../static/add.jpg';

function Services() {
    return (
        <div className="services">

            <div className="services__title">Services</div>

            <div className="services__grid">

                <div className="services__card">
                    <img src={skaterImg}/>
                    <Button
                        className='services__button'
                        variant='contained'
                        size='large'
                        component={Link}
                        to='/list'
                    >
                        LIST OF FACILITIES
                    </Button>
                </div>

                <div className="services__card">
                    <img src={glassImg}/>
                    <Button
                        className='services__button'
                        variant='contained'
                        size='large'
                        component={Link}
                        to='/map'
                    >
                        MAP
                    </Button>
                </div>

                <div className="services__card">
                    <img src={addImg}/>
                    <Button
                        className='services__button'
                        variant='contained'
                        size='large'
                        component={Link}
                        to='/newfacility'
                    >
                        ADD A NEW FACILITY
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default Services;
