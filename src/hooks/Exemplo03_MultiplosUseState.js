//importando modulo e hook useState
import React, {useState} from "react";
import Exemplo02_MultiplosUseState from "./Exemplo02_MultiplosUseState";


//Função
function Exemplo03_MultiplosUseState(){

    //useState
    // 1 - parametro é nome do state
    // 2 - função para enviar dados e informaçoes para o state
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0)

    //Evento
    const evento = (e) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        } else if (e.target.name === "idade") {
            setIdade(parseInt(e.target.value, 10));
        }
    };

    //Retorno
    return(
        <div>
            <input type={"text"} placeholder={"Nome"} name={"nome"} onChange={evento} />
            <input type={"number"} placeholder={"Idade"} name={"idade"} onChange={evento}/>
            <p>{nome}</p>
            <p>{idade}</p>
        </div>
    );
}

//exportação
export default Exemplo03_MultiplosUseState;