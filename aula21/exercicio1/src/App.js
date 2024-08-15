import './App.css';
import Form from './components/nemeForm.js';
import Contador from './components/contador.js';
import Calculadora from './components/calculadora.js';
import Welcome from './components/imagem.js';
import imgspt from './components/Kokushibo.png';
import Itens from './components/compiten.js';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className='exUm'>
         <Form />
        </div>
        <div className='exDois'>
         <Contador />
        </div>
        <div className='exTres'>
         <Itens />
        </div>
      </div>
      <div className='img'>
        <Welcome src={imgspt} />
      </div>
    </div>
  );
}

export default App;
