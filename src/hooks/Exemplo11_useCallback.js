import React, {useEffect, useState} from "react";

function Exemplo11_useCallback(){

    //useState
    const [cor, setCor] = useState('blue')
    const[numero, setNumero] = useState(0)
    //função alterar a cor
    const alterarCor = ()=> {
        if (cor === 'blue') {
            setCor('gray')
        } else {
            setCor('blue')
        }
    }
    //funcao para listar os numeros
    const listarNumero = () => {
        return [numero-1,numero, numero+1]
    }
    //Retorno
    return(
        <div style={{backgroundColor:cor}}>
            <button onClick={alterarCor}>AlterarCor</button>
            <input type={"number"} value={numero} onChange={e => setNumero(parseInt(e.target.value))}/>

            <ComponenteListarNumeros lista={listarNumero()} />
        </div>
    )
}
//Compomente listar numeros
function ComponenteListarNumeros({lista}){
    //useState
    const [vetor, setVetor] = useState(([]))
    //useEffect
    useEffect(() => {
        console.log("Componente Criado")
        setVetor(lista)
    }, [lista]);
    //Retorno
    return(
        <ul>
            {vetor.map((vetor) => (<li key={vetor}>{vetor}</li>))}
        </ul>
    )
}
export default Exemplo11_useCallback;