import React from "react";
import Logo from "../../assets/img/2.png";
import BUTTON from "../../assets/img/BUTTON.png";

const MainBlock = () => {
  return (
    <div className='container'>
      <div className='content'>
        <img className='logo' src={Logo} alt='logo' />

        <a className='appointment' href='https://n810092.alteg.io'>
          {/* <img
            className='appointment--img'
            src={BUTTON}
            alt='appointment'
          /> */}
          BOOK NOW
        </a>

        <div className='contacts'>
          <a href='tel:0984542774' className='contact-item'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='black'
              width='24px'
              height='24px'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.75 21 3 13.25 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
            </svg>
            0984542774
          </a>
          <a href='tel:0939598751' className='contact-item'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='black'
              width='24px'
              height='24px'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.75 21 3 13.25 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
            </svg>
            0939598751
          </a>
          <a
            href='https://www.instagram.com/karma.menstudio/'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-item'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              role='presentation'
              class='icon icon-instagram'
              viewBox='0 0 512 512'
            >
              <path d='M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z'></path>
              <path d='M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z'></path>
              <circle cx='390.5' cy='121.5' r='30.2'></circle>
            </svg>
            karma.menstudio
          </a>
          <a
            className='contact-item'
            href='https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8F+%D0%9F%D0%BE%D1%80%D0%B8%D0%BA%D0%B0,+47,+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F,+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+21000/@49.2316505,28.4010325,19z/data=!4m6!3m5!1s0x472d5c5a95e4c56f:0x849e159aa2610574!8m2!3d49.2315428!4d28.4016306!16s%2Fg%2F1wg5ws6v?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
              className='location'
            >
              <path
                fill-rule='evenodd'
                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                clip-rule='evenodd'
              ></path>
            </svg>
            вул. Василя Порика, 47
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
