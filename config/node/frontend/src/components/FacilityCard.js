import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';


function FacilityCard({facility}) {
    console.log('czym jest facility: ', facility)
    return (
        <div>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            {facility.name[0]}
                        </Avatar>
                    }
                    title={facility.name}
                    subheader={facility.city}
                />

                <CardContent>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Obiekt {facility.name} znajduje się w miejscowości {facility.city}.
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
}

export default FacilityCard;
