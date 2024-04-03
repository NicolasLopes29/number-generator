import React, { useState } from "react"
import "./style.css"

function PaginaInicial(){
    //Criar a variável de estado numeroAleatorio
    const [numeroAleatorio, setNumeroAleatorio] = useState(10)


    //Função para gerar um novo número de forma aleatória - random()
    function gerarNumero (){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero)
    }

    return(
        <div className="container">
            <h1>Número aleatório</h1>
            <h2>{ numeroAleatorio }</h2>
            <div className="area-botao">
                <label>
                    Clique no botão abaixo para gerar um novo número
                </label>
                <button onClick={ gerarNumero }>
                    Gerar novo número
                </button>
            </div>
        </div>
    );
}



export default PaginaInicial