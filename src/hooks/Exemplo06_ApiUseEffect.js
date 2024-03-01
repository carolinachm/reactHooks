// importando modulo
import React, {useState, useEffect} from "react";

function Exemplo06_ApiUseEffect() {

    //useState
    const [vetor, setVetor] = useState([]);
    const [status, setStatus] = useState('Carregando')

    //Funcao para obter os dados da api
    const obterDados = async () => {
        //await - aguarda a api retorna os dados
        //fetch - retorna informação como texto
        const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        const converter = await dados.json();
        setVetor(converter);
        setStatus('Dados carregados com sucesso')

    }

    //useEffect
    useEffect(() => {
        obterDados()
    });
    //Evento


    //Retorno
    return (
        <div>
            <h1>{status}</h1>
            <ul>
                {vetor.map(objeto => (
                    <li>{objeto.title}</li>

                ))}
            </ul>
        </div>
    )
}

export default Exemplo06_ApiUseEffect;