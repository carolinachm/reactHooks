//importando modulo
import React, {useEffect, useState} from "react";

//funcao
function Exemplo05_useEffect(){

    //useState
    const [texto, setTexto] = useState("Hello world");

    //useEffect

    useEffect(()=> {
        setInterval(()=>{
            setTexto('useEffect executado com sucesso!')

        },5000)
    })


    //Retorno
    return(
        <div>
            <h1>{texto}</h1>
        </div>
    )
}
export default Exemplo05_useEffect