import React from "react";
import LoadingSpinnerSvg from "../images/Spin-1.1s-84px.svg";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" style={{ textAlign: "center" }}>
      <img src={LoadingSpinnerSvg} alt="" />
    </div>
  );
};

export default LoadingSpinner;
