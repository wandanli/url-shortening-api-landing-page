import React from "react";
import WorkingImg from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero flex container-px">
      <img className="hero__img" src={WorkingImg} alt="working" />
      <div className="hero__content">
        <h1 className="hero__content__heading">More than just shorter links</h1>
        <p className="hero__content__text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button href="" className="hero__content__btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
