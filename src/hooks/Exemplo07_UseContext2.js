// Importa React e os hooks createContext, useContext e useState do pacote 'react'.
import React, { createContext, useContext, useState } from 'react';

// Cria um novo Contexto, útil para compartilhar dados entre componentes sem prop drilling.
const Contexto = createContext();

// Define o componente Exemplo07_UseContext2, que será o componente pai.
function Exemplo07_UseContext2() {
    // Define uma variável de estado `texto` que armazena uma string.
    let texto = 'Enviado informações';
    // Define um estado `fundo` com o useState hook para armazenar a cor de fundo atual.
    const [fundo, setFundo] = useState('yellow');
    // Define a função `alterarFundo` para alternar a cor de fundo entre 'yellow' e 'blue'.
    const alterarFundo = () => {
        setFundo(fundo === 'yellw' ? 'blue' : 'yellw'); // Erro de digitação: deveria ser 'yellow' em vez de 'yellw'.
    }

    return (
        // Usa o Contexto.Provider para passar `texto`, `fundo`, e `alterarFundo` para componentes filhos.
        <div>
            <Contexto.Provider value={{texto, fundo, alterarFundo}}>
                {/* Camada1 é renderizado e tem acesso ao contexto. */}
                <Camada1/>
            </Contexto.Provider>
        </div>
    );
}

// Define o componente Camada1, o primeiro nível de componente filho.
function Camada1() {
    return (
        // Retorna um JSX para Camada1 com estilos específicos aplicados.
        <div style={{backgroundColor: 'red', width: '500px', height: '500px', display: 'inline-block'}}>
            {/* Renderiza Camada2 dentro de Camada1. */}
            <Camada2/>
        </div>
    );
}

// Define o componente Camada2, o segundo nível de componente filho.
function Camada2() {
    return (
        // Retorna um JSX para Camada2 com estilos específicos e renderiza Camada3 dentro dele.
        <div style={{
            backgroundColor: 'green',
            width: '400px',
            height: '400px',
            margin: '50px',
            display: 'inline-block'
        }}>
            {/* Camada3 é renderizada dentro de Camada2. */}
            <Camada3/>
        </div>
    );
}

// Define o componente Camada3, o terceiro nível de componente filho.
function Camada3() {
    // Utiliza useContext para acessar `texto`, `fundo`, e `alterarFundo` do contexto.
    const {texto, fundo, alterarDundo} = useContext(Contexto); // Erro de digitação em `alterarDundo`; deveria ser `alterarFundo`.

    return (
        // Retorna um JSX para Camada3, usando `fundo` para a cor de fundo e exibindo `texto`.
        <div style={{backgroundColor: fundo, width: '300px', height: '300px', margin: '50px'}}>
            {/* Mostra o texto e um botão que, ao ser clicado, chama `alterarDundo` (deveria ser `alterarFundo`). */}
            <p>{texto}</p>
            <button onClick={alterarDundo}>Clique aqui</button> {/* O nome da função está incorreto; deve-se corrigir para `alterarFundo`. */}
        </div>
    );
}

// Exporta o componente Exemplo07_UseContext2 como o padrão do módulo.
export default Exemplo07_UseContext2;
