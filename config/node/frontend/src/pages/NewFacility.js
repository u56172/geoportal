import React, {useState} from 'react';
import {Container, Box, TextField, Button, Paper} from "@mui/material";
import {Link} from "react-router-dom";
import logo2 from "../static/logo2.png";
import guy from "../static/guy.png";

function NewFacility() {
    const [facilityName, setFacilityName] = useState("")
    const [facilityStreet, setFacilityStreet] = useState("")
    const [facilityNumber, setFacilityNumber] = useState("")
    const [facilityCity, setFacilityCity] = useState("")
    const [facilityUrl, setFacilityUrl] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!facilityName || !facilityStreet || !facilityCity || !facilityUrl) {
            setError("All required fields must be filled");
            return;
        }
        setError("");
        try {
            const response = await fetch('/app/insert_facility', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: facilityName,
                    street: facilityStreet,
                    number: facilityNumber,
                    city: facilityCity,
                    img_url: facilityUrl
                })
            });
            
            if (response.ok) {
                setFacilityName("");
                setFacilityStreet("");
                setFacilityNumber("");
                setFacilityCity("");
                setFacilityUrl("");
            }
        } catch (e) {}
    }

    return (
        <div className='newfacility'>
            <div className="newfacility__top">
                <div className='home__logo'>
                    <Link to="/" className="home__logoLink">
                      <img src={logo2} />
                    </Link>
                </div>
                <div className="newfacility__title">NEW FACILITY.</div>
                <div className="newfacility__forms">
                    <Container>
                        <Paper elevation={3} sx={{p: 4}}>
                            <Box component="form"
                                 onSubmit={handleSubmit}
                            >
                                <TextField sx={{m: 1}}
                                           fullWidth
                                           label="name"
                                           value={facilityName}
                                           onChange={(e) => setFacilityName(e.target.value)}
                                ></TextField>
                                <TextField sx={{m: 1}}
                                           fullWidth
                                           label="street"
                                           value={facilityStreet}
                                           onChange={(e) => setFacilityStreet(e.target.value)}
                                ></TextField>
                                <TextField sx={{m: 1}}
                                           fullWidth
                                           label="number"
                                           value={facilityNumber}
                                           onChange={(e) => setFacilityNumber(e.target.value)}
                                ></TextField>
                                <TextField sx={{m: 1}}
                                           fullWidth
                                           label="city"
                                           value={facilityCity}
                                           onChange={(e) => setFacilityCity(e.target.value)}
                                ></TextField>
                                <TextField sx={{m: 1}}
                                           fullWidth
                                           label="img_url"
                                           value={facilityUrl}
                                           onChange={(e) => setFacilityUrl(e.target.value)}
                                ></TextField>
                                {error && <p style={{color: 'red', margin: '8px'}}>{error}</p>}
                                <div className='newfacility__buttons'>
                                <Button type="submit" variant='contained'>Add an object</Button>
                                <Button size="small" color="primary" component={Link} to="/list">See all objects</Button>
                                </div>

                            </Box>
                        </Paper>
                    </Container>
                </div>
            </div>

            <div className="newfacility__bottom">
                <div className='newfacility__boy'>
                    <img src={guy} />
                </div>
            </div>
        </div>
    );
}

export default NewFacility;
