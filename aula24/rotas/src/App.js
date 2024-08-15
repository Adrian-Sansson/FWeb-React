import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Calculadora from './components/pageCalc.js'
import Contador from './components/pageCounter';
import Form from './components/pageName'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Calculadora />}/>
      <Route path='/contador' element={<Contador />}/>
      <Route path='/formulario' element={<Form />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
