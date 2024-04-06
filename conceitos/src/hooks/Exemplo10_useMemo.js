// Importa o React, juntamente com os hooks useMemo e useState, do pacote 'react'.
import React, { useMemo, useState } from "react";

// Definição do componente Exemplo10_useMemo.
function Exemplo10_useMemo() {
    // Utiliza o hook useState para criar um estado chamado 'contador', inicializado com 0,
    // e uma função 'setContador' para atualizar esse estado.
    const [contador, setContador] = useState(0);

    // Utiliza o hook useState para criar um estado chamado 'nomes', inicializado com um array de strings,
    // e uma função 'setNome' (embora mais apropriado seria 'setNomes') para atualizar esse estado.
    const [nomes, setNome] = useState(["Ralf", "Carol", "ze"]);

    // useMemo é um hook que memoriza o resultado de uma função, neste caso, memoriza um componente JSX.
    // Isso significa que o componente ListarNomes só será re-renderizado se o estado 'nomes' mudar,
    // o que ajuda a otimizar a performance evitando re-renderizações desnecessárias.
    const listarSemRender = useMemo(() => {
        return <ListarNomes lista={nomes} />
    }, [nomes]);

    // O retorno do componente contém um título que exibe o valor do 'contador', 
    // um botão que, ao ser clicado, incrementa o valor do 'contador' em 1,
    // e finalmente, exibe o componente memorizado 'listarSemRender' que lista os nomes.
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={e => setContador(contador + 1)}>Incrementar</button>
            {listarSemRender}
        </div>
    );
}

// Este é um componente filho que recebe uma prop 'lista' e retorna uma lista não ordenada (<ul>)
// de itens (<li>), onde cada item representa um nome contido no array 'lista' recebido.
// O uso de 'key={nomes}' é uma prática recomendada para ajudar o React a identificar quais itens mudaram,
// foram adicionados ou removidos, o que ajuda na otimização da performance.
function ListarNomes({ lista }) {
    // A cada renderização do componente, esta linha loga uma mensagem no console.
    console.log("Listar Nomes Criados");
    return (
        <ul>
            {lista.map(nome => (<li key={nome}>{nome}</li>))}
        </ul>
    );
}

// Exporta o componente Exemplo10_useMemo para que possa ser utilizado em outras partes da aplicação.
export default Exemplo10_useMemo;
