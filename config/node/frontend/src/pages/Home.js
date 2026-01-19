import React from 'react';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='home__top'>
        <header className='home__nav'>
          <div className='home__navLeft'>
            <div className='home__logo' aria-label="Logo">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="13" r="10" stroke="white" strokeWidth="2"/>
                <path d="M13 5V13L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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

        <div className='home__mapWrap'>
          {/* Placeholder SVG – podmień na eksport SVG z Figmy, jeśli chcesz identyczne granice */}
          <svg className='home__polandSvg' viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M150 50
                 C210 10, 300 20, 360 70
                 C410 110, 450 140, 440 200
                 C430 260, 370 310, 300 320
                 C240 330, 180 320, 140 280
                 C110 250, 80 200, 95 150
                 C110 95, 120 70, 150 50 Z"
              fill="#FFFFFF"
              stroke="#4E67D8"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            <path d="M170 85 L210 140 L185 210 L230 270" stroke="#4E67D8" strokeWidth="3" fill="none" opacity="0.9"/>
            <path d="M230 80 L265 140 L250 220 L290 295" stroke="#4E67D8" strokeWidth="3" fill="none" opacity="0.9"/>
            <path d="M300 85 L320 145 L310 235 L350 285" stroke="#4E67D8" strokeWidth="3" fill="none" opacity="0.9"/>
            <path d="M360 110 L365 165 L350 230 L390 250" stroke="#4E67D8" strokeWidth="3" fill="none" opacity="0.9"/>

            <path d="M150 160 L440 160" stroke="#4E67D8" strokeWidth="3" opacity="0.8"/>
            <path d="M135 220 L420 220" stroke="#4E67D8" strokeWidth="3" opacity="0.8"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
