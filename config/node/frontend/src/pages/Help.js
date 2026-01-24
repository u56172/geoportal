import React from 'react';
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import help from "../static/help.png";

function Help() {
    return (
          <div className='help'>
            <div className='help__top'>
                <h1 className='help__title'>HELP</h1>

                <Typography className='help__subtitle'>
                    1. Jak dodać nowy obiekt?
                    <br />
                    Przejdź do sekcji "Dodaj obiekt".
                    <br />
                    Wypełnij formularz, podając nazwę obiektu, miasto i adres URL do zdjęcia.
                    <br />
                    Kliknij przycisk "Dodaj obiekt", aby zapisać dane w naszej bazie.
                    <br />
                    <br />
                    2. Jak przeglądać obiekty?
                    <br />
                    Aby zobaczyć dostępne obiekty, przejdź do sekcji "Obiekty".
                    <br />
                    Możesz przeglądać obiekty na mapie lub w formie listy.
                    <br />
                    Klikając na dany obiekt, zobaczysz więcej szczegółów, takich jak lokalizacja, zdjęcia oraz dodatkowe informacje.
                    <br />
                    <br />
                    3. Jak korzystać z mapy?
                    <br />
                    Przejdź do sekcji "Mapa"
                    <br />
                    Zobaczysz na niej kolorowe pinezki, które wskazują na różne obiekty w Twojej okolicy.
                    <br />
                    Kliknij na pinezkę, aby zobaczyć szczegóły obiektu.
                </Typography>
              </div>

      <div className='help__bottom'>
        <Button
          className='help__home__button'
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

export default Help;