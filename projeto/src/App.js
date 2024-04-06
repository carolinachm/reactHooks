// Hooks
import React, {useState} from 'react';
//import css
import './App.css';
import Formulario from "./componentes/Formulario";
import Tabela from "./componentes/Tabela";

//Componente
function App() {
    // useState
    const [btnCadastro, setBtnCadastro] = useState(true);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [vetor, setVetor] = useState([]);
    const [indiceVetor, setIndiceVetor] = useState([]);

    //função cadastrar
    const cadastrar = () => {

        let obj = {
            'nome': nome,
            'idade': idade,
            'cidade': cidade
        }
        setVetor([...vetor, obj]);

        setNome('');
        setIdade('')
        setCidade('')

    }
    //Função para alterar os dados
    const alterar = () => {
        let obj = {
            'nome': nome,
            'idade': idade,
            'cidade': cidade
        }
        let copiaVetor = [...vetor];
        copiaVetor[indiceVetor] = obj;
        setVetor(copiaVetor);

        setNome('');
        setIdade('');
        setCidade('');
        setBtnCadastro(true);
    }
    //Função para remover usuario
    const remover = () => {
        let copiaVetor = [...vetor]
        copiaVetor.splice(indiceVetor, 1);
        setVetor(copiaVetor);

        setNome('');
        setIdade('');
        setCidade('');
        setBtnCadastro(true);
    }
    //funcao para selecionar o usuario
    const selecionar = (indice) => {
       setIndiceVetor(indice);

       setNome(vetor[indice].nome);
       setIdade(vetor[indice].idade);
       setCidade(vetor[indice].cidade);

       setBtnCadastro(false)
    }
    //funcao para cancelar edição ou remoção
    const cancelar = () => {
        setNome('');
        setIdade('');
        setCidade('');
        setBtnCadastro(true);
    }

    return (
        <div>

            <Formulario btnCadastro={btnCadastro} alterar={alterar} remover={remover} cancelar={cancelar} setNome={setNome} setIdade={setIdade} setCidade={setCidade}
                        cadastrar={cadastrar} nome={nome} idade={idade} cidade={cidade}/>
            <Tabela vetor={vetor} selecionar={selecionar} />
        </div>


    );
}

//Exportando o componente
export default App;
