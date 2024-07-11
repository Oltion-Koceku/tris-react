import React, { useState } from "react";
import "./Main.scss";
import X_card from "../Partials/X_card";
import O_card from "../Partials/O_card";

function Main() {
  // Creo un array che contiene i componenti, inizialmente tutti null
  const [components, setComponents] = useState(Array(9).fill(null));
  // Counter per determinare se inserire X o O
  const [counter, setCounter] = useState(0);

  // Funzione che viene chiamata quando si clicca su una casella
  const squareClick = (index) => {
    const newComponents = [...components];
    if (newComponents[index] === null) {
      // Assegno "X_card" o "O_card" in base al valore di counter
      newComponents[index] = counter === 0 ? "X_card" : "O_card";
      setComponents(newComponents);
      // Aggiorno il counter per alternare tra X e O
      setCounter((prevCounter) => (prevCounter === 0 ? 1 : 0));
    }
  };

  // Funzione per renderizzare il componente corretto
  const renderComponent = (component) => {
    if (component === "X_card") {
      return <X_card />;
    } else if (component === "O_card") {
      return <O_card />;
    } else {
      return null;
    }
  };

  return (
    <main className="h-100 d-flex align-items-center">
      <div className="container px-5 h-100">
        <div className="row p-3 justify-content-center h-100 align-items-center row-cols-3">
          {components.map((component, index) => (
            <div
              key={index}
              onClick={() => squareClick(index)} // Passo l'indice della casella cliccata
              className="col bord bord_1 d-flex justify-content-center"
            >
              {renderComponent(component)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
