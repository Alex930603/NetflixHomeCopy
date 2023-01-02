import React from 'react';
import logoimg from './Netflix-logo.png';
// colore rosso #e50914;
// font name https://fonts.google.com/specimen/Arimo
// immagine background
// https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/9045f6c8-a614-425b-8135-7e40d7422701/IT-it-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg
// gradient (0,0,0,.8)
const NetflixHome = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img className="logo" src={logoimg} alt="#" />
        </div>
        <div className="header__right">
          <select className="header__right--language">
            <option>Italiano</option>
            <option>Engrish</option>
            <option>Japanese</option>
          </select>
          <button type="button" className="header__right--login">
            Accedi
          </button>
        </div>
      </div>
    </>
  );
};

export default NetflixHome;
