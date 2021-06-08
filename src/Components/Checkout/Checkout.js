import React from "react";

import "../../index.css";

const Checkout = () => {
  return (
    <div>
      <h4>
        <span className="price"></span>
      </h4>
      <hr />
      <p>
        Total{" "}
        <span className="price">
          <b>$30</b>
        </span>
      </p>
    </div>
  );
};

export default Checkout;
