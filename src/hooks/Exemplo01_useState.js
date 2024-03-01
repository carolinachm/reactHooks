//importando modulo e hook useState
import React, {useState} from "react";


//Função
function Exemplo01_useState(){

    //useState
    // 1 - parametro é nome do state
    // 2 - função para enviar dados e informaçoes para o state
    const [texto, setTexto] = useState('Hello World');

    //Evento
    const evento = (e) => {
        setTexto(e.target.value)
    }

    //Retorno
    return(
        <div>
            <input type={"text"} onChange={evento}/>
            <p>{texto}</p>

        </div>
    );
}

//exportação
export default Exemplo01_useState;