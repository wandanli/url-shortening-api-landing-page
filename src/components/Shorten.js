import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

const LOCAL_STORAGE_KEY = "list-shorten-results";

const Shorten = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortenResults, setShortenResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageShortenResults = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageShortenResults) {
      storageShortenResults.map((storageShortenResult) => {
        return (storageShortenResult.isCopied = false);
      });
      setShortenResults(storageShortenResults);
    }
  }, []);

  useEffect(() => {
    // fires when shortenResults array gets updated
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(shortenResults)
    );
  }, [shortenResults]);

  const fetch = async (longUrl) => {
    const apiUrl = "https://api.shrtco.de/v2/shorten";
    try {
      const response = await axios.get(apiUrl, { params: { url: longUrl } });
      const shortUrl = response.data.result.full_short_link;
      setShortenResults([
        {
          longUrl: longUrl,
          shortUrl: shortUrl,
          isCopied: false,
        },
        ...shortenResults,
      ]);
      setLongUrl("");
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    trackPromise(fetch(longUrl));
  };

  const handleClick = (index) => {
    setShortenResults(
      shortenResults.map((shortenResult, i) => {
        if (i === index) {
          return {
            ...shortenResult,
            isCopied: true,
          };
        }
        return shortenResult;
      })
    );
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
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <i className="shorten__form__em">{errorMessage}</i>
          </div>
          <button className="shorten__form__btn" type="submit">
            Shorten It!
          </button>
        </form>
        {promiseInProgress === true ? <LoadingSpinner /> : null}
        {shortenResults.map((shortenResult, index) => (
          <div className="shorten__result flex" key={index}>
            <p>{shortenResult.longUrl}</p>
            <div className="shorten__result__copy flex">
              <p>{shortenResult.shortUrl}</p>
              <CopyToClipboard text={shortenResult.shortUrl}>
                <button
                  onClick={(e) => handleClick(index)}
                  className={`${shortenResult.isCopied ? "btn--copied" : ""}`}
                >
                  {`${shortenResult.isCopied ? "copied" : "copy"}`}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorten;
