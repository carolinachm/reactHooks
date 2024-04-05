// Importando os módulos React e useState do pacote "react"
import React, { useState } from "react";

// Definindo uma função de componente chamada Exemplo04_useStateJSON
function Exemplo04_useStateJSON() {

    // Definindo um modelo JSON para o estado 'formulario'
    const modelo = {
        "nome": '',
        "email": '',
        "cidade": ''
    };

    // Definindo um estado utilizando o hook useState
    // 'formulario' irá armazenar os dados do formulário e 'setFormulario' é uma função para atualizá-lo
    // O valor inicial do estado 'formulario' é o modelo JSON definido acima
    const [formulario, setFormulario] = useState(modelo);

    // Função evento que é chamada quando o valor dos inputs é alterado
    const evento = (e) => {
        // Obtendo o nome e o valor do input alterado
        let nome = e.target.name;
        let valor = e.target.value;

        // Atualizando o estado 'formulario' com os dados do formulário
        setFormulario({
            ...formulario, [nome]: valor
        });
    }

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            {/* Input onde o usuário pode digitar o nome */}
            <input type="text" name={"nome"} placeholder={"Informe o nome"} onChange={evento} />
            {/* Input onde o usuário pode digitar o email */}
            <input type="email" name={"email"} placeholder={"Informe o email"} onChange={evento} />
            {/* Input onde o usuário pode digitar a cidade */}
            <input type="text" name={"cidade"} placeholder={"Informe a cidade"} onChange={evento} />

            {/* Parágrafos que exibem os valores dos campos nome, email e cidade */}
            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>

            {/* Parágrafo que exibe o estado 'formulario' convertido para uma string JSON */}
            <p>{JSON.stringify(formulario)}</p>
        </div>
    );
}

// Exportando o componente Exemplo04_useStateJSON para ser utilizado em outros arquivos
export default Exemplo04_useStateJSON;
