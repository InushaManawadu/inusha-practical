import React from "react";

import '../../index.css'

const Sidebar = () => {
  return (
    <div className="dot-container">
      <span className="size">Sizes:</span>
      <br />
      <button className="dot">XS</button>
      <button className="dot">S</button>
      <button className="dot">M</button>
      <button className="dot">ML</button>
      <br />
      <button className="dot">L</button>
      <button className="dot">XL</button>
      <button className="dot">XML</button>
    </div>
  );
};

export default Sidebar;
