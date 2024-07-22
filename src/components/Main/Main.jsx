import React, { forwardRef, useImperativeHandle, useState } from "react";
//forwardRef e useImperativeHandle per esporre la funzione reset al componente padre (App).
import "./Main.scss";
import X_card from "../Partials/X_card";
import O_card from "../Partials/O_card";


const Main = forwardRef((props, ref) => {
  // Creo un array che contiene i componenti, inizialmente tutti null
  const [components, setComponents] = useState(Array(9).fill(null));
  // Counter per determinare se inserire X o O
  const [counter, setCounter] = useState(0);
  // il gameWinner serve per capire quale giocatore ha vinto
  const [winner, setWinner] = useState(null);

  const[pari, setPari] = useState(false)
  const[counterPari, setCounterPari] = useState(0)

  useImperativeHandle(ref, () => ({
    reset,
  }));

  
  const reset = () =>{
    setComponents(Array(9).fill(null))
    setCounter(0)
    setWinner(null)
    setPari(false)
    setCounterPari(0)
  }
  // Funzione che viene chiamata quando si clicca su una casella
  const squareClick = (index) => {
    if (counterPari < 9) {
      // se il componente in base all'index che diamo è null insiema a winner allora puo procedere
      if (components[index] === null && !winner) {
        const newComponents = [...components];

        // Assegno "X_card" o "O_card" in base al valore di counter
        newComponents[index] = counter === 0 ? "X_card" : "O_card";
        setComponents(newComponents);
        // Aggiorno il counter per alternare tra X e O
        setCounter((prevCounter) => (prevCounter === 0 ? 1 : 0));

        setCounterPari(prevCounterPari => prevCounterPari + 1);
        // qua diamo il ad ogni click il newComponents a checkwinner per vedere se è corretto
        const gameWinner = checkWinner(newComponents);
        // se ce un vincitore settiamo il nuovo vincitore cosi squareClick non funzionerà piu perche winner non è piu null
        if (gameWinner) {
          setWinner(gameWinner);
        } else if (counterPari + 1 === 9) {
          setPari(true);
        }

        // counterPari++;
        // // qua diamo il ad ogni click il newComponents a checkwinner per vedere se è corretto
        // const gameWinner = checkWinner(newComponents);
        // // se ce un vincitore settiamo il nuovo vincitore cosi squareClick non funzionerà piu perche winner non è piu null
        // if (gameWinner) {
        //   setWinner(gameWinner);
        // }
      }
    }else{
      setPari(true)
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

  const checkWinner = (components) => {
    // qua creiamo le possibili combinazioni per la vittoria
    const winningCombinations = [
      [0, 1, 2], // Prima riga
      [3, 4, 5], // Seconda riga
      [6, 7, 8], // Terza riga
      [0, 3, 6], // Prima colonna
      [1, 4, 7], // Seconda colonna
      [2, 5, 8], // Terza colonna
      [0, 4, 8], // Diagonale principale
      [2, 4, 6], // Diagonale secondaria
    ];
    // cicliamo winningCombinations cosi da verificare la loro vittoria
    for (let combination of winningCombinations) {
      // creiamo delle variabili in array che prenderanno come valore le combination
      const [a, b, c] = combination;
      // se il components con indice a è uguale a tutti gli altri (b e c) vuol dire che ce un vincitore e lo stampiamo
      if (
        components[a] &&
        components[a] === components[b] &&
        components[a] === components[c]
      ) {
        console.log(a, b, c);
        return components[a];
      }
    }
    // se non ce un vincitore ci sara null
    return null;
  };

  return (
    <main className="h-100 d-flex flex-column align-items-center">
      <div className="container px-5 h-100">
        <div className="row p-3 justify-content-center h-100 align-items-center row-cols-3">
          {components.map((component, index) => (
            <div
              key={index}
              onClick={() => squareClick(index)}
              className="col bord bord_1 d-flex justify-content-center"
            >
              {renderComponent(component)}
            </div>
          ))}
        </div>
      </div>
      {winner && (
        <div className="win container text-center text-danger">
          {winner === "X_card" ? "X ha vinto!" : "O ha vinto!" || winner === null}
        </div>
      )}
      {pari && (
        <div className="win container text-center text-danger">
          Pareggio
        </div>
      )}
    </main>
  );
});

export default Main;
