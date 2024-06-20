import { useState } from 'react'
import Display from './components/Display'
import Tecla from './components/Tecla'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [display, setDisplay] = useState(0);
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  function borrarDisplay(){
    setDisplay(0);
    setValorAnterior(null);
    setOperacion(null);
  }

  function pulsar(x){
    if(x === "C"){
      borrarDisplay();
    }else if(x === "+" || x === "-" || x === "*" || x === "/"){
      setOperacion(x);
      setValorAnterior(display);
      setDisplay(0);
    }else if(x === "="){
      calcular();
}
  }

  function calcular(){
    switch(operacion){
      case "+":
        setDisplay(valorAnterior + display);
      break;
      case "-":
        setDisplay(valorAnterior - display);
      break;
      case "*":
        setDisplay(valorAnterior * display);
        break;
      case "/":
        if(display === 0){
          setDisplay("Error");
        }else{
          setDisplay(valorAnterior / display);
        }
        break;
  }
    setDisplay(resultado.toString().replace('.', ','));
    setValorAnterior(null);
    setOperacion(null);
  };


  return (
    <>
      <div className="calculadora">
        <h1>Calculadora React</h1>
      <Display contenido={display} />
      <div className="teclado">
          <Tecla  />
      </div>
    </div>
    </>
  )
}

export default App;
