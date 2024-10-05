import React from "react";
import Logo from "../../assets/img/2.png";
import BUTTON from "../../assets/img/BUTTON.png";

const MainBlock = () => {
  return (
    <div className="container">
      <div className="content">
        <img className="logo" src={Logo} alt="logo" />

        <a className="appointment" href="https://n810092.alteg.io">
          <img className="appointment--img" src={BUTTON} alt="appointment" />
        </a>

        <div className="contacts">
          <a href="tel:0984542774" className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.75 21 3 13.25 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            0984542774
          </a>
          <a href="tel:0939598751" className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.75 21 3 13.25 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            0939598751
          </a>
          <a
            href="https://www.instagram.com/karma.menstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M7.75 2C5.68 2 4 3.68 4 5.75v12.5C4 20.32 5.68 22 7.75 22h8.5C18.32 22 20 20.32 20 18.25V5.75C20 3.68 18.32 2 16.25 2h-8.5zm0 1.5h8.5c1.17 0 2.25 1.08 2.25 2.25v12.5c0 1.17-1.08 2.25-2.25 2.25h-8.5c-1.17 0-2.25-1.08-2.25-2.25V5.75C5.5 4.58 6.58 3.5 7.75 3.5zm7.13 2a.88.88 0 0 0-.88.88v1.75c0 .49.39.88.88.88h1.75c.49 0 .88-.39.88-.88V6.38a.88.88 0 0 0-.88-.88h-1.75zM12 7.88A4.12 4.12 0 0 0 7.88 12 4.12 4.12 0 0 0 12 16.12 4.12 4.12 0 0 0 16.12 12 4.12 4.12 0 0 0 12 7.88zm0 1.5A2.62 2.62 0 0 1 14.62 12 2.62 2
A2 0 0 1 12 14.62 2.62 2.62 0 0 1 9.38 12 2.62 2.62 0 0 1 12 9.38zm0-1.5A4.12 4.12 0 0 0 7.88 12 4.12 4.12 0 0 0 12 16.12 4.12 4.12 0 0 0 16.12 12 4.12 4.12 0 0 0 12 7.88zm6-2.38v1.75c0 .49.39.88.88.88h1.75c.49 0 .88-.39.88-.88V5.5a.88.88 0 0 0-.88-.88h-1.75c-.49 0-.88.39-.88.88z"/>
            </svg>
            karma.menstudio
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
