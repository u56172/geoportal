import React from 'react';
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import event1 from "../static/event1.jpg";
import event2 from "../static/event2.jpg";
import event3 from "../static/event3.jpg";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import glass from "../static/glass.png";
import add from "../static/add.jpg";

function Events(props) {
    return (
          <div className='events'>
            <div className='events__top'>
                <h1 className='events__tittle'>EVENTS.</h1>
            </div>
              <div className='home__hero'>
                <div className="events__cards">
                  <div className="events__card__one">
                    <Card sx={{ maxWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia component="img" height="140" image={event1}/>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Event no. 1
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" component={Link} to="https://www.ebilet.pl/?srsltid=AfmBOooASc8LQL2ENbPdCGCGpj7o7_j6Fqm7LiQCk9NYNYbRDa1w2zFL">
                          Enroll
                        </Button>
                      </CardActions>
                    </Card>
                  </div>

                  <div className="events__card__three">
                    <Card sx={{ maxWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia component="img" height="140" image={event2}/>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Event no. 2
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className="services__add__section">
                        <Button size="small" color="primary" component={Link} to="https://www.ebilet.pl/?srsltid=AfmBOooASc8LQL2ENbPdCGCGpj7o7_j6Fqm7LiQCk9NYNYbRDa1w2zFL">
                          Enroll
                        </Button>
                      </CardActions>
                    </Card>
                  </div>

                  <div className="events__card__two">
                    <Card sx={{ maxWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia component="img" height="140" image={event3}/>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Event no. 3
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" component={Link} to="https://www.ebilet.pl/?srsltid=AfmBOooASc8LQL2ENbPdCGCGpj7o7_j6Fqm7LiQCk9NYNYbRDa1w2zFL">
                          Enroll
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              </div>


      <div className='events__bottom'>
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

export default Events;