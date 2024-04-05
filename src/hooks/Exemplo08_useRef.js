import React, { useRef} from "react";

//Funcao
function  Exemplo08_useRef(){
    //useRef
    const ref = useRef();

    //Função
    const acao = () =>{
        ref.current.focus();
        ref.current.style.backgroundColor = "red";
        ref.current.value = "Digite algo...";
    }
    //retorno
    return(
        <div>
            <input type='text' ref={ref}/>
            <input type='button' value='Clique aqui' onClick={acao}/>
        </div>
    );
}
export default Exemplo08_useRef;