import React, {useState} from 'react';
import {Container, Box, TextField, Button, Paper} from "@mui/material";
import {Link} from "react-router-dom";
import logo2 from "../static/logo2.png";
import guy from "../static/guy.png";

function NewFacility(props) {
    const [facilityName, setFacilityName] = useState("")
    const [facilityCity, setFacilityCity] = useState("")
    const [facilityUrl, setFacilityUrl] = useState("")

    const handleSubmit = async (e) => {
        console.log(facilityName, facilityCity, facilityUrl)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/app/insert_facility', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: facilityName,
                    city: facilityCity,
                    img_url: facilityUrl
                })
            });
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setFacilityName("");
                setFacilityCity("");
                setFacilityUrl("");
            } else {
                console.log("Błąd przy dodawaniu obiektu:", data);
            }
        } catch (e) {
            console.log(e);
        }
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
                                           label="nazwa"
                                           value={facilityName}
                                           onChange={(e) => setFacilityName(e.target.value)}
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
                                <div className='newfacility__buttons'>
                                <Button type="submit" variant='contained'>Dodaj obiekt</Button>
                                <Button size="small" color="primary" component={Link} to="/list">Przejdź do obiektów</Button>
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
