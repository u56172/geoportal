import React from 'react';
import { Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../static/logo.png';
import poland from '../static/poland.png';
import auth from '../auth';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.isLoggedIn = false;
    navigate('/');
  };

  return (
    <div className='home'>
      <div className='home__top'>
        <header className='home__nav'>
          <div className='home__navLeft'>
            <div className='home__logo'>
              <Link to="/" className="home__logoLink">
                <img src={logo} />
              </Link>
            </div>

            <nav className='home__navGroup'>
              <Link className='home__navItem' to='/events'>Events</Link>
              <Link className='home__navItem' to='/help'>Help</Link>
              <Link className='home__navItem' to='https://github.com/u56172'>Contact</Link>
              <Link className='home__navItem' to='/about'>About</Link>
            </nav>
          </div>

          <div className='home__navRight'>
            {auth.isLoggedIn ? (
              <Button className='home__login' variant='contained' onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button className='home__login' variant='contained' component={Link} to='/login'>
                Login
              </Button>
            )}
            <Button 
              className='home__register' 
              variant='contained' 
              component={Link} 
              to='/register'
            >
              Register
            </Button>
            <Button 
              className='home__getStarted' 
              variant='contained' 
              component={auth.isLoggedIn ? Link : 'button'}
              to='/services'
              disabled={!auth.isLoggedIn}
            >
              Get Started →
            </Button>
          </div>
        </header>

        <div className='home__hero'>
          <h1 className='home__title'>
            <span className='home__titleStrong'>GEO</span>
            <span className='home__titleSoft'>PORTAL</span>
            <span className='home__dot'>.</span>
          </h1>
        </div>
      </div>

      <div className='home__bottom'>
        <p className='home__tagline'>
          Thematic geoportal of{'\n'}
          recreational facilities...
        </p>
        <div className='home__poland'>
          <img src={poland} />
        </div>
      </div>
    </div>
  );
}

export default Home;
