import React from 'react';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';
import poland from '../static/poland.png';
function Home() {
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
              <Link className='home__navItem' to='https://www.google.pl/search?sca_esv=18c82b472cdad13f&sxsrf=ANbL-n5DJCRiQkzJaqTiVMJXyMlvkYI-Eg:1768768194920&udm=2&fbs=ADc_l-aTuuAJ5fCRiMSMSikFOrGF_MvHLWdPDPs1HkyT-6qmTJJAgXh6zyftDOE3v3jI81iIO4OvuZChECc32j_EcX70dTG1tFX_fijlCDrVbVa9Tq7fd0sagISZx5aUdMFPCvQoRjdPJ3w9IwjQujLFPda6Jr4MaPt8dTahnYqdq6x7bmL7gSqRP-zBG59xUCEIr3tQz_HkUxtc9Bot47mDKjQg6-cSrCl-15CgPudphS-AfCRoGB8&q=events&sa=X&ved=2ahUKEwi60sr_9pWSAxXuSfEDHXbQAIQQtKgLegQIFBAB&biw=1528&bih=732&dpr=1.25&aic=0'>Events</Link>
              <Link className='home__navItem' to='https://www.google.com/search?sca_esv=18c82b472cdad13f&sxsrf=ANbL-n5-3EUoZVA3EQ9R1sxXcOzxaXSWHw:1768768268696&udm=2&fbs=ADc_l-aTuuAJ5fCRiMSMSikFOrGF6bdyujK3KN_bbLSQcwMis3qSud1NYjsG0YQq1c8NN36m1fBbGSViAHXDrD4spd43aKcJ3eRVT_pvsMau840khyAPL2Id0zCcaWdggihzNSmgKCYzszhgtwBWOPntg99jvQUYkYYxhG36fNLGR4oWYF4JXcoRp6thk8Twpo9obj3NHDfk2_EgyGUm4Nm5-HAr6XDckQ&q=help&sa=X&ved=2ahUKEwjryeGi95WSAxU_FhAIHS6jE4cQtKgLegQIFBAB&biw=1528&bih=732&dpr=1.25&aic=0'>Help</Link>
              <Link className='home__navItem' to='https://github.com/u56172'>Contact</Link>
              <Link className='home__navItem' to='/about'>About</Link>
            </nav>
          </div>

          <div className='home__navRight'>
            <Button className='home__login' variant='contained' component={Link} to='/login'>
              Login
            </Button>

            <Button className='home__getStarted' variant='contained' component={Link} to='/services'>
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
