import React, { useState } from "react";
import "./Main.scss";
import X_card from "../Partials/X_card";
import O_card from "../Partials/O_card";

function Main() {
  return (
    <main className="h-100 d-flex align-items-center">
      <div className="container px-5 h-100">
        <div className="row p-3 justify-content-center h-100 align-item-center row-cols-3">
          <div className="col bord bord_1 d-flex justify-content-center">
            <X_card />
          </div>
          <div className="col bord bord_1 d-flex justify-content-center">
            <O_card />
          </div>
          <div className="col bord bord_2"></div>
          <div className="col bord bord_1"></div>
          <div className="col bord bord_1"></div>
          <div className="col bord bord_2"></div>
          <div className="col bord bord_3"></div>
          <div className="col bord bord_3"></div>
          <div className="col bord"></div>
        </div>
      </div>
    </main>
  );
}

export default Main;
