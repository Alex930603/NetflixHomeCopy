import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Video from './video.m4v';
import VideoDevices from './video-devices.m4v';

const NetflixHome = () => {
  const autoPlay = true;
  return (
    <>
      <div className="full-container">
        <div className="home-container">
          <Header />
          <div className="info">
            <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
            <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
            <h3>
              Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
              riattivare il tuo abbonamento.
            </h3>
            <div className="info__form-container">
              <input
                className="info__form-container--mail"
                type="email"
                placeholder="Indirizzo mail..."
              ></input>
              <button className="info__form-container--button" type="btn">
                Inizia
              </button>
            </div>
          </div>
        </div>
        <div className="home-sections">
          <div className="home-sections__one-quarter">
            <div className="home-sections__one-quarter--text">
              <h1>Goditi Netflix sulla tua TV.</h1>
              <h2>
                Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple
                TV, lettori Blu-ray e molti altri dispositivi.
              </h2>
            </div>
            <div className="home-sections__one-quarter--pic">
              <div className="wrapper">
                <video autoPlay Muted loop>
                  <source src={Video} type="video/mp4" />
                </video>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="home-sections__two-quarter">
            <div className="home-sections__two-quarter--pic">
              <div className="wrapper">
                <video autoPlay Muted loop>
                  <source src={VideoDevices} type="video/mp4" />
                </video>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="home-sections__two-quarter--text">
              <h1>Guarda Netflix ovunque.</h1>
              <h2>
                Cellulare, tablet, laptop e TV: scegli tu cosa usare per
                guardare in streaming film e serie TV senza limiti e senza
                spendere di più.
              </h2>
            </div>
          </div>
          <div className="home-sections__three-quarter">
            <div className="home-sections__three-quarter--text">
              <h1>Crea profili per i bambini.</h1>
              <h2>
                I bambini scoprono nuove avventure in compagnia dei loro
                personaggi preferiti in uno spazio tutto loro già incluso nel
                tuo abbonamento.
              </h2>
            </div>
            <div className="home-sections__three-quarter--pic">
              <img
                src="https://occ-0-2629-2582.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUNsZVszA3HGW04LpkU1tiYnMIoqpcN6YbGSXu5OXQrvWLP1tn7Tee0YM-dJfCazJNwBKnR35ZoqbjE7gTezX57yHz57zixtKS1g.png?r=dda"
                alt=""
              ></img>
            </div>
          </div>
          <div className="home-sections__four-quarter">
            <div className="home-sections__four-quarter--pic">
              <div className="wrapper">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt=""
                ></img>
                <div className="strange-css">
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    alt=""
                  />
                  <div className="strange-css__text">
                    <h3>Stranger Things</h3>
                    <p> Download in corso...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-sections__four-quarter--text">
              <h1>Scarica le tue serie da guardare offline.</h1>
              <h2>
                Download disponibili in tutti i piani tranne Base con
                pubblicità.
              </h2>
            </div>
          </div>
        </div>
        <div className="lower-part">
          <div className="lower-part__form">
            <h1 className="form-title"> Domande frequenti </h1>
            <div className="lower-part__form--single-form">
              <h3>Cos'è Netflix</h3>
              <h1>+</h1>
            </div>
            <div className="lower-part__form--single-form">
              <h3>Quanto costa netflix</h3>
              <h1>+</h1>
            </div>
            <div className="lower-part__form--single-form">
              <h3>Cosa cambia se scegli il piano base con pubblicità?</h3>
              <h1>+</h1>
            </div>
            <div className="lower-part__form--single-form">
              <h3>Dove posso guardare netflix?</h3>
              <h1>+</h1>
            </div>
            <div className="lower-part__form--single-form">
              <h3>Come posso disdire?</h3>
              <h1>+</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NetflixHome;
