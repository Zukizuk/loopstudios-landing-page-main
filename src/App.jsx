import "./App.scss";
import Logo from "./images/logo.svg";
import Menu from "./images/icon-hamburger.svg";
import Close from "./images/icon-close.svg";
import { MenuITems, socialMediaData, creationsData } from "./NavITems";
import { useEffect, useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScrolled(scrollDistance > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "header active" : "header"}>
        <div className="header__container">
          <a href="#" className="logo">
            <img src={Logo} alt="Loopstudios - Logo" />
          </a>
          <nav className="nav">
            <button
              className={active ? "close__button" : "menu__button"}
              type="button"
              onClick={() => setActive(!active)}
            >
              <span className="sr-only">Menu</span>
            </button>
            <ul className={active ? "header__list active" : "header__list"}>
              {MenuITems.map((item, index) => {
                return (
                  <li className="header__item" key={index}>
                    <a href="#" className="header__link">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <h1 className="sr-only">Loopstudios landing page</h1>
        <section className="hero-banner">
          <h2 className="hero-banner__heading">
            Immersive experiences that deliver
          </h2>
        </section>
        <section className="hero-section">
          <div className="hero__illustration"></div>
          <div className="hero__block">
            <h2 className="hero-section__heading">
              The leader in interactive VR
            </h2>
            <p className="hero-section__description">
              Founded in 2011, Loopstudios has been producing world-className
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section className="creations">
          <h2 className="creations__heading">Our creations</h2>

          <a href="#" className="creations__button">
            See all
          </a>

          <ul className="creations__list">
            {creationsData.map((item, id) => {
              return (
                <li className="creations__list-item" key={id}>
                  <a href="#">
                    <p>
                      {item.firstLine} <span className="word-break"></span>
                      {item.nextLine}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer>
        <div className="footer__home-link">
          <a href="#">
            <img src={Logo} alt="Loopstudios" width="124" height="24" />
          </a>
        </div>
        <nav className="footer__navigations">
          <ul role="list" className="navigation__links">
            {MenuITems.map((item, index) => {
              return (
                <li role="listitem" key={index}>
                  <a href="#" className="footer__link">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="footer__socials" aria-label="socials">
          <ul role="list" className="socials__links">
            {socialMediaData.map((item, id) => {
              return (
                <li role="listitem" key={id}>
                  <a href="#" aria-label={item.label}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="footer__copyright">
          © 2021 Loopstudios. All rights reserved.
        </p>

        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            aria-describedby="Frontend Mentor Website"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          , Coded by
          <a
            href="https://github.com/Zukizuk"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="Marzuk Entsie's Github profile"
          >
            Zuki
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
