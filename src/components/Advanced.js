import React, { useState } from "react";
import BrandRecognitionIcon from "../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../images/icon-fully-customizable.svg";

const Advanced = () => {
  const [cards] = useState([
    {
      id: 1,
      icon: BrandRecognitionIcon,
      heading: "Brand Recognition",
      text:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      icon: DetailedRecordsIcon,
      heading: "Detailed Records",
      text:
        "Gain insights into who is clicking your links. Knowing when and people engage with your content helps inform better decisions..",
    },
    {
      id: 3,
      icon: FullyCustomizableIcon,
      heading: "Fully Customizable",
      text:
        "Improve brand awareness and content discover ability through customizable links, supercharging audience engagement..",
    },
  ]);
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
          {cards.map((card) => (
            <div className="card">
              <div className="card__icon">
                <img src={card.icon} alt={`${card.heading}-icon`} />
              </div>
              <h3 className="card__heading">{card.heading}</h3>
              <p className="card__text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advanced;
