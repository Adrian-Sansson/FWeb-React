import { useState , useEffect} from "react";
import {Link} from 'react-router-dom';

function Contador() {
    const [contador, setContador] = useState(1)
    useEffect(()=>{const timerId = setInterval(()=>{setContador(contador+1)}, 1000)
        return () => clearInterval(timerId)},[contador])

    function adicionarCont() {
        setContador(contador + 1);
    };
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarCont}>Adicionar</button>
            <Link to='/formulario'> Página Principal </Link>
        </div>
    );
}

export default Contador;