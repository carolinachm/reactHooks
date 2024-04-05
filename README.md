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