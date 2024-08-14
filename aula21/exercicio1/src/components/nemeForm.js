import { useState } from "react";

function Form() {
    const [name, setName] = useState('')
    const [mensagem, setMensagem] = useState('')
    const mudaName = (event) => {
        setName(event.target.value);
    };
    const clickEnter = (event) => {
        event.preventDefault();
        setMensagem(`Bem Vindo: ${name}`)
    };
    return (
        <div>
            <form onSubmit={clickEnter}>
                <input 
                    type="text"
                    value={name}
                    placeholder="Digite seu nome:"
                    onChange={mudaName}
                />
                <button type="submit">Enviar</button>
            </form>
            {<p>{mensagem}</p>}
        </div>
    );
}

export default Form;