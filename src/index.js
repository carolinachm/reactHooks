//importar modulos
import React from "react";
import ReactDOM from "react-dom";
import Exercicio01 from "./hooks/Exercicio01";
import Exemplo04_useStateJSON from "./hooks/Exemplo04_useStateJSON";
//import Exemplo03_MultiplosUseState from "./hooks/Exemplo03_MultiplosUseState";
//import Exemplo02_MultiplosUseState from "./hooks/Exemplo02_MultiplosUseState";
//import Exemplo01_useState from "./hooks/Exemplo01_useState";


//Componente
class Principal extends React.Component{
    render() {
        return(
            <div>
                <Exemplo04_useStateJSON />
            </div>


        )
    }
}
//Render
ReactDOM.render(<Principal />, document.getElementById('root'))