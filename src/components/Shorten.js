import React, { useEffect, useState } from "react";
import axios from "axios";

const Shorten = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortenResults, setShortenResults] = useState(() => {
    const iniResults = window.localStorage.getItem("shortenResults");
    return iniResults !== null ? JSON.parse(iniResults) : "";
  });

  const fetch = async (longUrl) => {
    const apiUrl = "https://api.shrtco.de/v2/shorten";
    try {
      const response = await axios.get(apiUrl, { params: { url: longUrl } });
      const shortUrl = response.data.result.full_short_link;
      setShortenResults([
        ...shortenResults,
        {
          longUrl: longUrl,
          shortUrl: shortUrl,
          isCopied: false,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(longUrl);
  };

  const localStorage = (shortenResults) => {
    if (typeof Storage !== "undefined") {
      window.localStorage.setItem(
        "shortenResults",
        JSON.stringify(shortenResults)
      );
      const localStorageItems = JSON.parse(
        window.localStorage.getItem("shortenResults")
      );
      return localStorageItems;
    } else {
      document.getElementById("result").innerHTML =
        "Sorry, your browser does not support Web Storage...";
    }
  };

  useEffect(() => {
    localStorage(shortenResults);
  }, [shortenResults]);

  const handleClick = (index) => {
    const newResults = [...shortenResults];
    let newResult = { ...newResults[index] };
    newResult.copied = true;
    newResults[index] = newResult;
    // setShortenResults(newResults);
  };

  return (
    <section className="shorten">
      <div className="shorten__wrapper container-px">
        <form className="shorten__form flex" onSubmit={handleSubmit}>
          <div className="shorten__form__text">
            <input
              className="shorten__form__input"
              type="text"
              placeholder="Shorten a link here..."
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <i className="shorten__form__em">error message</i>
          </div>
          <button className="shorten__form__btn" type="submit">
            Shorten It!
          </button>
        </form>
        {shortenResults.map((shortenResult, index) => (
          <div className="shorten__result flex" key={index}>
            <p>{shortenResult.longUrl}</p>
            <div className="shorten__result__copy flex">
              <p>{shortenResult.shortUrl}</p>
              <button
                onClick={handleClick(index)}
                className={`${shortenResult.copied ? "btn--copied" : ""}`}
              >
                {`${shortenResult.copied ? "copied" : "copy"}`}
              </button>
            </div>
          </div>
        ))}

        {/* <div className="shorten__result flex">
          <p>https://wwww.frontendmentor.io</p>
          <div className="shorten__result__copy flex">
            <p>https://relink/k4kyk</p>
            <button>copy</button>
          </div>
        </div>
        <div className="shorten__result flex">
          <p>https://wwww.frontendmentor.io</p>
          <div className="shorten__result__copy flex">
            <p>https://relink/k4kyk</p>
            <button className="btn--copied">copied!</button>
          </div>
        </div>
        <div className="shorten__result flex">
          <p>
            https://wwww.frontendmentorrrr.rrr/rrr.ioppppppppppppppijkkujjikkikkjjiiooiooii
          </p>
          <div className="shorten__result__copy flex">
            <p>https://relink/k4kyk</p>
            <button>copy</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Shorten;
