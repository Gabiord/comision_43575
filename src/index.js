//Estas dos son librerias de react y react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';

//Esto es una variable que yo creo, tiene que ser un componente de react
import App from './App';
import './index.css'
//Los componentes en react siempre son funciones que arrancan con la primera letra en mayuscula y tienen que retornar algo

/* 

class App extends React.Component {
  render(){
    return "Hola Mundo"
  }
} 

*/

/* const App = () => {
  return "Hola Mundo por las dudas"
} */

/* function App(){
  //return ?
}
 */

//Uso la libreria de react-dom para renderizar el componente App en el elemento con id root (que esta en el index.html en public/)
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>);