// Importando os módulos React, useState e useEffect do pacote "react"
import React, { useState, useEffect } from "react";

// Definindo a função de componente chamada Exemplo07_UseContext
function Exemplo07_UseContext() {

    // Definindo uma variável 'texto' com uma string 'Enviado informações'
    let texto = 'Enviado informações';

    // Retornando o JSX que representa a estrutura do componente
    return (
        <div>
            {/* Renderizando o componente Camada1 e passando a propriedade 'texto' */}
            <Camada1 texto={texto}/>
        </div>
    );
}

// Definindo o componente Camada1 como uma função que recebe a propriedade 'texto'
function Camada1({texto}) {
    // Retornando o JSX que representa a estrutura do componente
    return (
        <div style={{backgroundColor:'red', width:'500px', height:'500px', display:'inline-block'}}>
            {/* Renderizando o componente Camada2 e passando a propriedade 'texto' */}
            <Camada2 texto={texto}/>
        </div>
    );
}

// Definindo o componente Camada2 como uma função que recebe a propriedade 'texto'
function Camada2({texto}) {
    // Retornando o JSX que representa a estrutura do componente
    return (
        <div style={{backgroundColor:'green', width:'400px', height:'400px', margin:'50px', display:'inline-block'}}>
            {/* Renderizando o componente Camada3 e passando a propriedade 'texto' */}
            <Camada3 texto={texto}/>
        </div>
    );
}

// Definindo o componente Camada3 como uma função que recebe a propriedade 'texto'
function Camada3({texto}) {
    // Retornando o JSX que representa a estrutura do componente
    return (
        <div style={{backgroundColor:'yellow', width:'300px', height:'300px', margin:'50px'}}>
            {/* Exibindo o texto recebido como propriedade */}
            <p>{texto}</p>
        </div>
    );
}

// Exportando o componente Exemplo07_UseContext para ser utilizado em outros arquivos
export default Exemplo07_UseContext;
