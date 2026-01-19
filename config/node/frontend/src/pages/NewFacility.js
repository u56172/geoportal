import React, {useState} from 'react';
import {Container, Box, TextField, Button, Paper} from "@mui/material";

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
                    location: facilityCity,
                    posts: facilityUrl
                })
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }

    }


    return (
        <div>
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
                        <Button type="submit" variant='contained'>Dodaj obiekt</Button>


                    </Box>
                </Paper>
            </Container>


        </div>
    );
}

export default NewFacility;
