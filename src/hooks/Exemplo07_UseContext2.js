import React, { createContext, useContext, useState } from 'react';

const Contexto = createContext();

function Exemplo07_UseContext2() {

    let texto = 'Enviado informações';
    const [fundo, setFundo] = useState('yellow');
    const alterarFundo = () => {
        setFundo(fundo === 'yellw' ? 'blue' : 'yellw');
    }

    return (

        <div>
            <Contexto.Provider value={{texto, fundo, alterarFundo}}>
                <Camada1/>
            </Contexto.Provider>
        </div>
    );
}

function Camada1() {
    return (
        <div style={{backgroundColor: 'red', width: '500px', height: '500px', display: 'inline-block'}}>
            <Camada2/>
        </div>
    );
}

function Camada2() {
    return (
        <div style={{
            backgroundColor: 'green',
            width: '400px',
            height: '400px',
            margin: '50px',
            display: 'inline-block'
        }}>
            <Camada3/>
        </div>
    );
}

function Camada3() {

    const {texto, fundo, alterarDundo} = useContext(Contexto);

    return (
        <div style={{backgroundColor: fundo, width: '300px', height: '300px', margin: '50px'}}>
            <p>{texto}</p>
            <button onClick={alterarDundo}>Clique aqui</button>
        </div>
    );
}

export default Exemplo07_UseContext2;
