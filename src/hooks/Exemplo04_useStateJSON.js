//Importando modulo

import React, {useState} from "react";

//função
function Exemplo04_useStateJSON(){

    //modelo json
    const modelo={
        "nome": '',
        "email": '',
        "cidade": ''
    }
    //useState
    const [formulario, setFormulario] = useState(modelo);

    //evento
    const evento = (e) => {
        let nome = e.target.name;
        let valor = e.target.value;

        setFormulario({
            ...formulario,[nome]:valor
        })
    }

    //retorno
    return(
        <div>
            <input type="text" name={"nome"} placeholder={"Informe o nome"} onChange={evento}/>
            <input type="email" name={"email"} placeholder={"Informe o email"} onChange={evento}/>
            <input type="text" name={"cidade"} placeholder={"Informe a cidade"} onChange={evento}/>

            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>
            <p>{JSON.stringify(formulario)}</p>
        </div>
    )
}
export default Exemplo04_useStateJSON;