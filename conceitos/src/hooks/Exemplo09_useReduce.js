// Importa React e o hook useReducer do pacote 'react'.
import React, { useReducer } from "react";

// Define o componente funcional Exemplo09UseReduce.
function Exemplo09UseReduce() {

    // Define a função 'funcao', que determina como o estado é atualizado em resposta a ações.
    // Esta função recebe o estado atual e uma ação, e retorna o novo estado.
    const funcao = (state, acao) => {
        // Usa um switch para determinar o tipo de ação recebida.
        switch (acao) {
            case 'incrementar': // Caso a ação seja 'incrementar', aumenta o estado em 1.
                return state + 1;
            case 'decrementar': // Caso a ação seja 'decrementar', diminui o estado em 1.
                return state - 1;
            default: // Caso receba uma ação não reconhecida, retorna o estado inicial (0 neste caso).
                return 0;
        }
    }

    // Inicializa o estado usando useReducer. 
    // 'funcao' é o redutor que define como as ações atualizam o estado.
    // O segundo argumento, 0, é o estado inicial.
    // 'contador' é o valor atual do estado, e 'executarFuncao' é a função que despacha ações.
    const [contador, executarFuncao] = useReducer(funcao, 0);

    // Renderiza o componente.
    return (
        <div>
            {/* Exibe o valor atual do 'contador'. */}
            <h1>{contador}</h1>
            {/* Botões para incrementar e decrementar o contador.
                 Ao clicar, eles chamam 'executarFuncao' com a ação correspondente. */}
            <button onClick={e => executarFuncao('incrementar')}>Incrementar</button>
            <button onClick={e => executarFuncao('decrementar')}>Decrementar</button>
        </div>
    )
}

// Exporta o componente Exemplo09UseReduce para que possa ser usado em outras partes da aplicação.
export default Exemplo09UseReduce;
