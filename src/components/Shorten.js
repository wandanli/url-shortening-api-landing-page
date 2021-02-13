import React from "react";

const Shorten = () => {
  return (
    <section className="shorten container-px">
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
    </section>
  );
};

export default Shorten;
