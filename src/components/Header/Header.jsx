import React, { useState } from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container h-100">
        <div className="row row-cols-3 h-100 align-items-center">
          <div className="col d-flex text-danger justify-content-center">
            <button className="btn btn-danger">Start</button>
          </div>
          <div className="col d-flex text-danger justify-content-center">
            <button className="btn btn-danger">Stop</button>
          </div>
          <div className="col d-flex text-danger justify-content-center">
            <button className="btn btn-danger">Restart</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
