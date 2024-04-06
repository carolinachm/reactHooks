// Importando os módulos React e useState do pacote "react"
import React, { useState } from "react";

// Definindo uma função de componente chamada Exemplo03_MultiplosUseState
function Exemplo03_MultiplosUseState() {

    // Definindo estados utilizando o hook useState
    // 'nome' irá armazenar o nome e 'setNome' é uma função para atualizá-lo
    // 'idade' irá armazenar a idade e 'setIdade' é uma função para atualizá-la
    // O valor inicial do estado 'nome' é uma string vazia e o valor inicial do estado 'idade' é 0
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    // Função evento que é chamada quando o valor dos inputs é alterado
    const evento = (e) => {
        // Verifica se o evento foi disparado pelo input de nome
        if (e.target.name === "nome") {
            // Atualiza o estado 'nome' com o valor digitado no input de nome
            setNome(e.target.value);
        }
        // Verifica se o evento foi disparado pelo input de idade
        else if (e.target.name === "idade") {
            // Atualiza o estado 'idade' com o valor digitado no input de idade convertido para inteiro
            setIdade(parseInt(e.target.value, 10));
        }
    };

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            {/* Input onde o usuário pode digitar o nome */}
            <input type={"text"} placeholder={"Nome"} name={"nome"} onChange={evento} />
            {/* Input onde o usuário pode digitar a idade */}
            <input type={"number"} placeholder={"Idade"} name={"idade"} onChange={evento} />
            {/* Parágrafo que exibe o valor do estado 'nome' */}
            <p>{nome}</p>
            {/* Parágrafo que exibe o valor do estado 'idade' */}
            <p>{idade}</p>
        </div>
    );
}

// Exportando o componente Exemplo03_MultiplosUseState para ser utilizado em outros arquivos
export default Exemplo03_MultiplosUseState;
