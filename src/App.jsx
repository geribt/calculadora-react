import { useState } from 'react'
import Display from './components/Display'
import Tecla from './components/Tecla'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [display, setDisplay] = useState(0);
  const [operacion, setOperacion] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(0);

  function borrarDisplay(){
    setDisplay(0);
    setValorAnterior(0);
    setOperacion(null);
  }

  function calcular(){
    console.log('enyro a calcuatlar');
    setDisplay(eval(valorAnterior)); 
    setValorAnterior(eval(valorAnterior)); 
  };

  function pulsar(x){
    console.log('Enyts s puldt');
    console.log(x);
    console.log(valorAnterior);
    if(x === "C"){
      borrarDisplay();
    }else if(x === "+" || x === "-" || x === "*" || x === "/"){
      setValorAnterior(valorAnterior+x);
      setOperacion(x);
      setDisplay(0);
    }else if(x === "="){
      calcular();
    }else if(valorAnterior === 0){
      setDisplay(x);
      setValorAnterior(x);
    }else{
      setDisplay(valorAnterior + x);
      setValorAnterior(valorAnterior + x);

    }

}
  


  


  return (
    <>
      <div className="calculadora col-6">
        <h1>Calculadora React</h1>
      <Display value={display} />
      <div className="teclado col-6">
          <Tecla  funcionaEnviar={pulsar} />
      </div>
    </div>
    </>
  )
}

export default App;
