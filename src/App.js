import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Підключаємо стилі для Leaflet
import "./App.css";
import Logo from "./assets/img/wqewqewqe.png";
import HeaderLogo from "./assets/img/sssssssssssssss.png";
import MarkerIcon from "./assets/img/5206532735907260241.png"; // Import the image

function App() {
  useEffect(() => {
    const map = L.map("map").setView(
      [49.23168982277034, 28.401716413618683],
      16
    );

    L.tileLayer(
      "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
        attribution:
          'Map data &copy; <a href="https://www.google.com/maps">Google</a>',
      }
    ).addTo(map);

    const customIcon = L.icon({
      iconUrl: MarkerIcon, // Use the imported image here
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.marker([49.23168982277034, 28.401716413618683], {
      icon: customIcon,
    })
      .addTo(map)
      .bindPopup(
        "<b>KARMA men studio</b><br>47 Poryka Street, Vinnytsia"
      )
      .openPopup();

    return () => {
      map.remove(); // Cleanup the map instance when component unmounts
    };
  }, []);

  return (
    <main className='homepage'>
      <header className='header'>
        <div className='logo'>
          <h1>
            <img src={HeaderLogo} alt='' />
          </h1>
        </div>
        <nav className='navigation'>
          <ul>
            <li>
              <a href='#services'>Послуги</a>
            </li>
            <li>
              <a href='#about'>Про нас</a>
            </li>
            <li>
              <a href='#contact'>Контакти</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className='hero'>
        <div className='hero-content'>
          <h2>Welcome to</h2>
          <img className='hero-content-logo' src={Logo} alt='' />
          <p className='hero-content-text'>
            KARMA | MEN STUDIO | BARBERSHOP
          </p>
          <p className='hero-content-text'>
            Твій стиль — наша карма! Місце, де стрижка стає мистецтвом
          </p>
          <a
            href='https://n810092.alteg.io'
            className='booking-button'
          >
            Book Now
          </a>
        </div>
      </section>

      <section id='services' className='services'>
        <h2>Наші Послуги</h2>
        <ul className='service-list'>
          <li>
            <a href='#' className='service-item'>
              <a href=''></a>
              <h3>Чоловіча стрижка</h3>
              <p>Ціна від: 550 ₴ / 1 год</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка бороди</h3>
              <p>Ціна від: 450 ₴ / 30 хв</p>
            </a>
          </li>

          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка + стрижка бороди</h3>
              <p>Ціна від: 950 ₴ / 1 год 30 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка під 0</h3>
              <p>Ціна від: 275 ₴ / 30 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка під 0 + борода</h3>
              <p>Ціна від: 700 ₴ / 1 год</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка дитяча (під 6 років)</h3>
              <p>Ціна від: 550 ₴ / 1 год</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Камуфлювання голови</h3>
              <p>Ціна від: 300 ₴ / 30 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Камуфлювання бороди</h3>
              <p>Ціна від: 300 ₴ / 30 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Гоління</h3>
              <p>Ціна від: 350 ₴ / 30 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Укладка волосся</h3>
              <p>Ціна від: 150 ₴ / 15 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Воскове видалення волосся</h3>
              <p>Ціна : 100 ₴ / 15 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка машинкою</h3>
              <p>Ціна від: 400 ₴ / 30 хв</p>
            </a>
          </li>
          <li>
            <a href='#' className='service-item'>
              <h3>Стрижка машинкою + борода</h3>
              <p>Ціна від: 800 ₴ / 1 год</p>
            </a>
          </li>
        </ul>
      </section>

      <section id='about' className='about'>
        <h2>Про нас</h2>
        <div className='about-content'>
          {" "}
          <h3 className='karma'>KARMA</h3>
          <span>Чому не типовий barbershop?</span>
          <p>
            <p>
              Як кажуть, барбершопи «засинають», «прокидається» мафія.
            </p>
            <p>
              Брутальність змінюється на Аскетизм, і не просто так.
            </p>
            <p>
              {" "}
              Наш життєвий досвід і спостереження за іншими салонами,
              дав нам розуміння ще на етапі формулювання ідеї салону ,
              що це буде «не як традиційний барбершоп».
            </p>
            <p>
              Тому що, життя вже змінилося. На зміну алкоголю, сигарам
              і обговоренню жінок за кріслом у салоні прийшло інше —
              вода, сік, обговорення тем, пов’язаних із криптовалют,
              бізнесом, трафіком у телеграм-канали та ще багато інших
              тем, які спонукають до розвитку, а не деградації.
            </p>
            <p>
              {" "}
              Тренд явно помітний, і ігнорувати його собі гірше, бо
              настав час змінюватися всім.
            </p>
            <p>
              {" "}
              Майстрам іноді варто задуматися про теми, які вони
              піднімають із клієнтами, вважаючи їх «своїми».
            </p>
            <p>
              {" "}
              Пам’ятайте одне, всі можуть помилятися, важливо вміти
              брати відповідальність за прийняті рішення, і якщо у
              вашому місті є тільки барбершопи, і немає жодного місця,
              яке відрізняється фактом свого існування, це для вас
              знак і факт.
            </p>
            <p>
              Ми відкрили салон на вулиці, де в радіусі кілометра
              декілька барбершопів.{" "}
            </p>
            <p>
              Ми з самого початку інші, конкуруємо майстерністю
              стрижок, а не ціною.
            </p>
            <p> Залишаємо час вам подумати.</p>
          </p>
        </div>
      </section>

      <section id='contact' className='contact'>
        <h2>Контакти</h2>
        <div className='contact-content'>
          <div className='contact-info'>
            <address>
              <a href='tel:0984542774' className='contact-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='black'
                  width='24px'
                  height='24px'
                >
                  <path d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.75 21 3 13.25 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'></path>
                </svg>
                +380984542774
              </a>
              <a href='tel:0939598751' className='contact-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='black'
                  width='24px'
                  height='24px'
                >
                  <path d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.75 21 3 13.25 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'></path>
                </svg>
                +380939598751
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
                  className='icon icon-instagram'
                  viewBox='0 0 512 512'
                >
                  <path d='M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z'></path>
                  <path d='M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z'></path>
                  <circle cx='390.5' cy='121.5' r='30.2'></circle>
                </svg>
                karma.menstudio
              </a>
              <a
                href='https://t.me/+8Il221FDAsxlMGRi'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-item'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='50px'
                  height='50px'
                >
                  <path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z' />
                </svg>
                karma.menstudio
              </a>
            </address>
          </div>

          <div
            id='map'
            style={{ height: "400px", width: "100%" }}
          ></div>
        </div>
      </section>

      <footer className='footer'>
        <p>
          © 2024 <h1>KARMA men studio</h1> Усі права захищено.
        </p>
        <nav>
          <ul>
            <li>
              <a href='#services'>Послуги</a>
            </li>
            <li>
              <a href='#about'>Про нас</a>
            </li>
            <li>
              <a href='#contact'>Контакти</a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}

export default App;
