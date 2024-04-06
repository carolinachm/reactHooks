// Importando os módulos React, useState e useEffect do pacote "react"
import React, { useState, useEffect } from "react";

// Definindo uma função de componente chamada Exemplo06_ApiUseEffect
function Exemplo06_ApiUseEffect() {

    // Definindo estados utilizando o hook useState
    // 'vetor' irá armazenar os dados da API e 'setVetor' é uma função para atualizá-lo
    const [vetor, setVetor] = useState([]); // Inicializado como um vetor vazio
    // 'status' irá armazenar o status da requisição à API e 'setStatus' é uma função para atualizá-lo
    const [status, setStatus] = useState('Carregando'); // Inicializado com a mensagem 'Carregando'

    // Função assíncrona para obter os dados da API
    const obterDados = async () => {
        // Utilizando 'await' para aguardar a resposta da API
        // O método 'fetch' é utilizado para fazer a requisição à URL da API
        const dados = await fetch('https://jsonplaceholder.typicode.com/photos');
        // O método 'json()' converte a resposta em formato JSON
        const converter = await dados.json();
        // Atualizando o estado 'vetor' com os dados obtidos da API
        setVetor(converter);
        // Atualizando o estado 'status' para indicar que os dados foram carregados com sucesso
        setStatus('Dados carregados com sucesso');
    }

    // Utilizando o hook useEffect para executar a função 'obterDados' após a renderização do componente
    useEffect(() => {
        obterDados(); // Chamando a função para obter os dados da API
    });

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            <h1>{status}</h1> {/* Exibindo o status da requisição */}
            <ul>
                {/* Mapeando cada objeto do vetor e renderizando um elemento de lista para cada um */}
                {vetor.map(objeto => (
                    /* Exibindo o título de cada objeto */
                    <li>{objeto.title}</li>
                    ))}
            </ul>
        </div>
    );
}

// Exportando o componente Exemplo06_ApiUseEffect para ser utilizado em outros arquivos
export default Exemplo06_ApiUseEffect;
