import React from "react";

const Shorten = () => {
  return (
    <section className="shorten container-px">
      <div className="shorten__wrapper">
        <form className="shorten__form flex" action="">
          <div className="shorten__form__text">
            <input
              className="shorten__form__input"
              type="text"
              placeholder="Shorten a link here..."
            />
            <i className="shorten__form__em">error message</i>
          </div>
          <button className="shorten__form__btn" type="submit">
            Shorten It!
          </button>
        </form>

        <div className="shorten__result flex">
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
        </div>
      </div>
    </section>
  );
};

export default Shorten;
