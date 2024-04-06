//obter duas notas e retornar a média e a situação (aprovado(a) ou reprovado(a)).

// importar modulos
import React, {useState} from "react";

//função
function Exercicio01(){

    //Usestate
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState('');

    //funcao calcular media
    const calcularMedia = () => {
        const novaMedia = (nota1 + nota2) / 2;
        setMedia(novaMedia);

        if (novaMedia >= 6) {
            setSituacao('Aprovado(a)');
        } else {
            setSituacao('Reprovado(a)');
        }
    };

    //evento
    const evento = (e) => {
        if(e.target.name === nota1){
           setNota1(parseFloat(e.target.value));
        }else if(e.target.name === nota2){
            setNota2(parseFloat(e.target.value));
        }
    }

    //Retorno
    return(
        <div>
            <input type={"number"} placeholder={"Digite a primera nota:"} name={"nota1"} onChange={evento}/>
            <input type={"number"} placeholder={"Digite a segunda nota:"} name={"nota2"} onChange={evento}/>
            <button onClick={calcularMedia}>Calcular Média</button>

            <p>A media é: {media}</p>
            <p>A situação é: {situacao}</p>
        </div>
    )

}

//exportar
export default Exercicio01;