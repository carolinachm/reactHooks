// Importa React e os hooks useCallback, useEffect e useState do pacote 'react'.
import React, { useCallback, useEffect, useState } from "react";

// Definição do componente Exemplo11_useCallback.
function Exemplo11_useCallback() {
    // Utiliza useState para criar e gerenciar o estado 'cor', inicialmente definido como 'blue'.
    const [cor, setCor] = useState('blue')
    // Utiliza useState para criar e gerenciar o estado 'numero', inicialmente definido como 0.
    const [numero, setNumero] = useState(0)

    // Função para alternar a cor entre 'blue' e 'gray'.
    const alterarCor = () => {
        if (cor === 'blue') {
            setCor('gray')
        } else {
            setCor('blue')
        }
    }

    // Utiliza useCallback para memorizar a função listarNumero, que depende do estado 'numero'.
    // Essa otimização ajuda a evitar recriações desnecessárias da função em cada renderização.
    const listarNumero = useCallback(() => {
        return [numero - 1, numero, numero + 1]
    }, [numero])

    // O componente retorna um div que muda de cor conforme o estado 'cor', um botão para alterar essa cor,
    // um input do tipo número que permite modificar o estado 'numero',
    // e o componente ComponenteListarNumeros que recebe a lista de números a serem listados.
    return (
        <div style={{ backgroundColor: cor }}>
            <button onClick={alterarCor}>Alterar Cor</button>
            <input type={"number"} value={numero} onChange={e => setNumero(parseInt(e.target.value))} />

            <ComponenteListarNumeros lista={listarNumero()} />
        </div>
    );
}

// Componente para listar números.
function ComponenteListarNumeros({ lista }) {
    // Utiliza useState para criar e gerenciar o estado 'vetor', inicialmente definido como um array vazio.
    const [vetor, setVetor] = useState([])

    // useEffect é chamado quando o componente é montado e sempre que a prop 'lista' é atualizada.
    // Nesse caso, atualiza o estado 'vetor' com os valores recebidos de 'lista'.
    useEffect(() => {
        console.log("Componente Criado")
        setVetor(lista)
    }, [lista]);

    // Retorna uma lista não ordenada (<ul>) com os itens do estado 'vetor'.
    // Cada item é um <li> que é mapeado a partir do 'vetor'.
    return (
        <ul>
            {vetor.map((vetor) => (<li key={vetor}>{vetor}</li>))}
        </ul>
    );
}

// Exporta o componente Exemplo11_useCallback para que possa ser utilizado em outras partes da aplicação.
export default Exemplo11_useCallback;
