//importando modulo e hook useState
import React, {useState} from "react";


//Função
function Exemplo02_MultiplosUseState(){

    //useState
    // 1 - parametro é nome do state
    // 2 - função para enviar dados e informaçoes para o state
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0)


    //Retorno
    return(
        <div>
            <input type={"text"} placeholder={"Nome"} onChange={e => setNome(e.target.value)}/>
            <input type={"number"} placeholder={"Idade"} name={"idade"} onChange={e => setIdade(e.target.value)}/>
            <p>{nome}</p>
            <p>{idade}</p>
        </div>
    );
}

//exportação
export default Exemplo02_MultiplosUseState;