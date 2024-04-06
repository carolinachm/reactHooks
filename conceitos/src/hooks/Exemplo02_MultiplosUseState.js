// Importando os módulos React e useState do pacote "react"
import React, { useState } from "react";

// Definindo uma função de componente chamada Exemplo02_MultiplosUseState
function Exemplo02_MultiplosUseState() {

    // Definindo estados utilizando o hook useState
    // 'nome' irá armazenar o nome e 'setNome' é uma função para atualizá-lo
    // 'idade' irá armazenar a idade e 'setIdade' é uma função para atualizá-la
    // O valor inicial do estado 'nome' é uma string vazia e o valor inicial do estado 'idade' é 0
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            {/* Input onde o usuário pode digitar o nome */}
            <input type={"text"} placeholder={"Nome"} onChange={e => setNome(e.target.value)} />
            {/* Input onde o usuário pode digitar a idade */}
            <input type={"number"} placeholder={"Idade"} name={"idade"} onChange={e => setIdade(e.target.value)} />
            {/* Parágrafo que exibe o valor do estado 'nome' */}
            <p>{nome}</p>
            {/* Parágrafo que exibe o valor do estado 'idade' */}
            <p>{idade}</p>
        </div>
    );
}

// Exportando o componente Exemplo02_MultiplosUseState para ser utilizado em outros arquivos
export default Exemplo02_MultiplosUseState;
