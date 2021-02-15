import React from "react";
import BrandRecognitionIcon from "../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../images/icon-fully-customizable.svg";

const Advanced = () => {
  return (
    <section className="advanced">
      <div className="advanced__wrapper container-px">
        <div className="advanced__content">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="advanced__card__container">
          <div className="card">
            <div className="card__icon">
              <img src={BrandRecognitionIcon} alt="icon-brand-recognition" />
            </div>
            <h3 className="card__heading">Brand Recognition</h3>
            <p className="card__text">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={DetailedRecordsIcon} alt="icon-detailed-records" />
            </div>
            <h3 className="card__heading">Detailed Records</h3>
            <p className="card__text">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={FullyCustomizableIcon} alt="icon-fully-customizable" />
            </div>
            <h3 className="card__heading">Fully Customizable</h3>
            <p className="card__text">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
