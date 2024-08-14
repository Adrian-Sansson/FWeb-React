import './App.css';
import Form from './components/nemeForm.js';
import Contador from './components/contador.js';
import Calculadora from './components/calculadora.js';
import Welcome from './components/imagem.js';

function App() {
  return (
    <div className="app">
      <div className="container">
         <Form />
         <Contador />
         <Calculadora />
         <Welcome src={imgspt} />
      </div>
    </div>
  );
}

export default App;
