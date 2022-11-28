import styled from "styled-components"
import alfabeto from "./alfabeto.js"
import React, { useCallback, useState } from "react"

export default function Letras(props) {
    return (
        <ContainerLetras>
            <CaixaLetras>
                {alfabeto.map(Letra, {props})}
            </CaixaLetras>
        </ContainerLetras>
    )
}

function Letra(letra) {
    return (
        <CaixaLetra onClick={() => (temLetra(letra, this.props))} data-test="letter">
            <FonteLetra >{letra}</FonteLetra>
        </CaixaLetra>
    )
}

function temLetra(letra, props) {
    let palavraPartidaTelaAux = "";
    for (let i = 0; i < props.info.palavraPartida.length; i++) {
        if (props.info.palavraPartida[i] === letra) {
            palavraPartidaTelaAux += letra;
        } else {
            palavraPartidaTelaAux += props.info.palavraPartidaTela[i];
        }
        const setPalavraPartidaTela = props.info.setPalavraPartidaTela;
        console.log("Aux: " + palavraPartidaTelaAux);
        setPalavraPartidaTela(palavraPartidaTelaAux);
    }
}

const ContainerLetras = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

const CaixaLetras = styled.div`
max-width: 660px;
display: flex;
flex-flow: wrap;
height: 100px;
padding: 0px 100px;
`

const CaixaLetra = styled.div`
width: 40px;
height: 40px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 3px 3px;
background-color: #9FAAB5;
border: 1px solid #7AA7C7;
border-radius: 3px;
`

const FonteLetra = styled.p`
font-family: Roboto, sans-serif;
font-size: 16px;
font-weight: 700;
text-align: center;
color: #798A9F;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
`