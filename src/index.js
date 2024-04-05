//importar modulos
import React from "react";
import ReactDOM from "react-dom";
import Exemplo09_useReduce from "./hooks/Exemplo09_useReduce";


//import Exercicio01 from "./hooks/Exercicio01";
//import Exemplo04_useStateJSON from "./hooks/Exemplo04_useStateJSON";
//import Exemplo05_useEffect from "./hooks/Exemplo05_useEffect";
//import Exemplo06_ApiUseEffect from "./hooks/Exemplo06_ApiUseEffect";
//import Exemplo03_MultiplosUseState from "./hooks/Exemplo03_MultiplosUseState";
//import Exemplo02_MultiplosUseState from "./hooks/Exemplo02_MultiplosUseState";
//import Exemplo01_useState from "./hooks/Exemplo01_useState";
//import Exemplo07_UseContext from "./hooks/Exemplo07_UseContext";
//import Exemplo07_UseContext1 from "./hooks/Exemplo07_UseContext1";
//import Exemplo07_UseContext2 from "./hooks/Exemplo07_UseContext2";
//import Exemplo08_useRef from "./hooks/Exemplo08_useRef";

//Componente
class Principal extends React.Component{
    render() {
        return(
            <div>
                <Exemplo09_useReduce/>
            </div>


        )
    }
}
//Render
ReactDOM.render(<Principal />, document.getElementById('root'))