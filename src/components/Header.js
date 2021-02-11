/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Header = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <header className="header">
      <nav className="container-px flex flex-jc-sb flex-ai-c">
        <a href="" className="header__logo">
          <img src="/images/logo.svg" alt="logo" />
        </a>

        <div className="header__links--desktop hide-for-mobile flex flex-jc-sb flex-ai-c">
          <ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a className="button-base" href="">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        <a
          href="#"
          className={`header__toggle hide-for-desktop ${toggler ? "open" : ""}`}
          onClick={() => setToggler(!toggler)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>

      <div
        className={`header__overlay hide-for-desktop container-px flex ${
          toggler ? "header__overlay--show" : ""
        }`}
      >
        <div className="header__links--mobile">
          <ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>
          <ul className="container-px">
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a className="button-base" href="">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
