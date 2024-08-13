import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(1)
    function adicionarCont() {
        setContador(contador + 1);
    };

    function retirarCont() {
        setContador(contador - 1);
    };

    switch (contador) {
        case "<button onClick={adicionarCont}>Adicionar</button>":
        setContador(contador + 1);
            break;
        
        case "<button onClick={retirarCont}>Retirar</button>":
        setContador(contador - 1);
            break;
    }
}

export default Contador;