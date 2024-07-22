import React from "react";
import "./Header.scss";

const Header = ({onButtonClick}) => {
  return (
    <header className="header">
      <div className="container h-100">
        <div className="row row-cols-3 h-100 justify-content-center align-items-center">
         
          <div className="col d-flex text-danger justify-content-center">
            <button onClick={onButtonClick} className="btn btn-danger">Restart</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
