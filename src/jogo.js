import styled from "styled-components"
import React, { useCallback, useState } from "react"

export default function Jogo(props) {
    return (
        <JogoDiv>
            <ImgForca src={props.info.forca} alt="" dsata-test="game-image"/>
            <JogoLadoDireito>
                <BotaoIniciar onClick={() => (palavraAleatoria(props))} data-test="choose-word">
                    <FonteBotaoIniciar>Escolher Palavra</FonteBotaoIniciar>
                </BotaoIniciar>
                <FontePalavraDisplay data-test="word" data-answer={props.info.palavraPartida}>{props.info.palavraPartidaTela}</FontePalavraDisplay>
            </JogoLadoDireito>
        </JogoDiv>
    )
}

function palavraAleatoria(props) {
    if (props.info.palavraPartida === undefined) {
        props.info.palavraPartida = props.info.palavras[Math.floor(Math.random() * props.info.palavras.length)];
        const setPalavraPartida = props.info.setPalavraPartida;
        setPalavraPartida(props.info.palavraPartida);
        palavraPartidaDisplay(props);
    }
}

function palavraPartidaDisplay(props) {
    for (let i = 0; i < props.info.palavraPartida.length; i++) {
        props.info.palavraPartidaTela += "_";
    }
    const setPalavraPartidaTela = props.info.setPalavraPartidaTela;
    setPalavraPartidaTela(props.info.palavraPartidaTela);
}

const JogoDiv = styled.div`
    display: flex;
    padding: 50px 30px;
    justify-content: space-between;
`

const JogoLadoDireito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 30px;
`

const ImgForca = styled.img`
    width: 480px;
    height: 467px;
`
const BotaoIniciar = styled.button`
 width: 200px;
height: 60px;
    background-color: #27AE60;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FonteBotaoIniciar = styled.p`
    font-family: roboto, sans-serif;
    font-size: 20px;
    text-align: center;
    color: white;
`

const FontePalavraDisplay = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 68px;
letter-spacing: 5px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
`