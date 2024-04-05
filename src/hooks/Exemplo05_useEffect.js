// Importando os módulos React, useEffect e useState do pacote "react"
import React, { useEffect, useState } from "react";

// Definindo uma função de componente chamada Exemplo05_useEffect
function Exemplo05_useEffect() {

    // Definindo um estado utilizando o hook useState
    // A variável 'texto' irá armazenar o estado atual e 'setTexto' é uma função para atualizá-lo
    const [texto, setTexto] = useState("Hello world");

    // Utilizando o hook useEffect para executar código após a renderização do componente
    useEffect(() => {

        // Dentro do useEffect, definimos um intervalo que irá alterar o estado de 'texto' a cada 5 segundos
        setInterval(() => {
            // Atualiza o estado 'texto' para exibir uma mensagem diferente
            setTexto('useEffect executado com sucesso!');
        }, 5000); // Intervalo de 5000 milissegundos (5 segundos)

        // O retorno é uma função de limpeza opcional que é executada antes da próxima execução do efeito ou ao desmontar o componente
        // Neste caso, não há retorno, então não há limpeza necessária
    });

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            <h1>{texto}</h1> {/* Exibindo o estado 'texto' no elemento de cabeçalho */}
        </div>
    );
}

// Exportando o componente Exemplo05_useEffect para ser utilizado em outros arquivos
export default Exemplo05_useEffect;
