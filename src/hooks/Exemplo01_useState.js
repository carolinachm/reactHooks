// Importando os módulos React e useState do pacote "react"
import React, { useState } from "react";

// Definindo uma função de componente chamada Exemplo01_useState
function Exemplo01_useState() {

    // Definindo um estado utilizando o hook useState
    // 'texto' irá armazenar o estado atual e 'setTexto' é uma função para atualizá-lo
    // O valor inicial do estado é 'Hello World'
    const [texto, setTexto] = useState('Hello World');

    // Evento que é chamado quando o valor do input é alterado
    const evento = (e) => {
        // Atualiza o estado 'texto' com o valor digitado no input
        setTexto(e.target.value);
    }

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            {/* Input onde o usuário pode digitar texto */}
            <input type={"text"} onChange={evento} />
            {/* Parágrafo que exibe o conteúdo do estado 'texto' */}
            <p>{texto}</p>
        </div>
    );
}

// Exportando o componente Exemplo01_useState para ser utilizado em outros arquivos
export default Exemplo01_useState;
