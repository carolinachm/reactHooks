# Curso de React Hooks - Prof Ralf Lima

## Cronograma
    - O que são Hooks?
    - Quais as vantagens?
    - Hooks básicos (useState, useEffect e useContext)
    - Hooks adicionais( useReducer, useRef, useMemo e useCallback)
    - Aplicação prática contedo as funcionalidaes
        - Cadastra;
        - Selecionar;
        - Alterar;
        - Remover.

## O que são Hooks?
   > Segundo o site oficial do React: Hooks são uma nova adição ao React 16.8. 
   > Eles permitem que você use o ste e outrs recusos do Readct sem escrever uma classe.
   
## Quais são as vantagens?
       Algumas vantagens de aprender Hooks:
        * Código mais enxuto;
        * Funções possuem suporte e cilo e vida(useEffect) e ao state(useState);
        * Classes confundem tanto pessoas quanto máquinas;
        * Auxiliam em uma melhor performance.
    
# O que é o useContext?
   > Segundo o site oficial do React
   "Aceita um objeto de contexto (O valor retornado de React.createContext) e retorna o valor atual do contexto. O valor de contexto
   atual é determinado pela prop value do<MyContext.Provider>mais próximo acima do componente de chamada na árvore".

# Hook userRef
   O hooks useRef é utilizado para manipularmos elementos Html sem precisar realizr um render.
   Um uso muito comum desse hook é formulario. Utilizamos o Dom (Document Object Model), podemos alterar caracteristicas de elementos HTML como : corre, bordas, sombras, adicionar/remover textos, entre outras funcionalidades
   
# Hook useReducer
   Segundo a documentação oficial do REact: "O useReducer é geralmente preferivel em relacao ao useState quando se tem uma lógica de estudo complexa que envolve mútiplos sub-valores"
   ---
Estrutura ustilizada state: const [state, setState] =useState(0);
Estrutura utilizada reducer: const [state, dispatch] = useReduce(reducer, initialArg, init);

# Hook useMemo
O useMemo é um hook para trabalhar com informações memoizadas

# Hook useCallback
Segundo a documentação oficial do React Hooks: "O useCallBack" é um hook que retorna um callback memoisado, que só muda se as entradas tiverem sido alteradas"

## Diferança entre useMemo e useCallback

useMemo: Irá executar sempre que o componente for renderizado
useCallback: Irá executar sempre que houver um evento(onChange, onClick, onSubimit...)

## Vamos resolver um problema utilizando o useCallback

Teremos dus funcionalidades, um botão para interclar a cor de fundo e um elemento "input" que quando alterdo o valor, retorna ele mesmo, seu antecessor e seu sucessor.