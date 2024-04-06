// Importa React e os hooks createContext e useContext do pacote 'react'.
import React, { createContext, useContext } from 'react';

// Cria um novo Contexto, útil para passar dados profundamente na árvore de componentes sem usar props manualmente.
const Contexto = createContext();

// Define o componente Exemplo07_UseContext1, que será o componente pai no exemplo.
function Exemplo07_UseContext1() {
    // Define uma variável texto que será passada aos componentes filhos através do Contexto.
    let texto = 'Enviado informações';

    return (
        // Retorna um JSX que inclui o Provider do Contexto criado.
        <div>
            {/* O Contexto.Provider permite que os componentes filhos que assinam este Contexto acessem o valor `texto`. */}
            <Contexto.Provider value={{texto}}>
                {/* Camada1 é o primeiro componente filho, que receberá o contexto indiretamente. */}
                <Camada1/>
            </Contexto.Provider>
        </div>
    );
}

// Define o componente Camada1, que representa o primeiro nível de componente filho.
function Camada1() {
    return (
        // Retorna um JSX para Camada1, com estilos inline aplicados.
        <div style={{backgroundColor: 'red', width: '500px', height: '500px', display: 'inline-block'}}>
            {/* Camada2 é renderizada dentro de Camada1, seguindo a hierarquia de componentes. */}
            <Camada2/>
        </div>
    );
}

// Define o componente Camada2, que representa o segundo nível de componente filho.
function Camada2() {
    return (
        // Retorna um JSX para Camada2, com estilos inline aplicados, criando um efeito de empilhamento visual.
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

// Define o componente Camada3, que representa o terceiro e último nível de componente filho.
function Camada3() {
    // Utiliza o hook useContext para assinar o valor do contexto e acessar `texto`.
    const {texto} = useContext(Contexto);

    return (
        // Retorna um JSX para Camada3, exibindo o texto recebido do contexto, com estilos inline aplicados.
        <div style={{backgroundColor: 'yellow', width: '300px', height: '300px', margin: '50px'}}>
            {/* Renderiza o valor de `texto` dentro de um parágrafo (<p>). */}
            <p>{texto}</p>
        </div>
    );
}

// Exporta o componente Exemplo07_UseContext1 como o default do módulo.
export default Exemplo07_UseContext1;
