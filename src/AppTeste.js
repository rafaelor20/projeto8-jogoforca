import React, { useCallback, useState } from "react"
import styled from "styled-components"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import alfabeto from "./alfabeto.js"
import palavras from "./palavras.js"

const lstForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
let palavraPartida;
let palavraPartidaTela;


function App() {
  return (
    <div className="App">
      <Jogo />
      <Letras />
      <Chute/>
    </div>
  );
}

export default App;



function Jogo() {
    const [rPalavraPartidaTela, setRPalavraPartidaTela] = React.useState(palavraPartidaTela)
    return (
        <JogoDiv>
            <ImgForca src={lstForca[0]} alt="" />
            <JogoLadoDireito>
                <BotaoIniciar onClick={()=>(palavraAleatoria(setRPalavraPartidaTela))}>
                    <FonteBotaoIniciar>Escolher Palavra</FonteBotaoIniciar>
                </BotaoIniciar>
                <FontePalavraDisplay>{rPalavraPartidaTela}</FontePalavraDisplay>
            </JogoLadoDireito>
        </JogoDiv>
    )
}

function palavraAleatoria(setRPalavraPartidaTela){
    if (palavraPartida === undefined){
        palavraPartida = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(palavraPartida);
        palavraPartidaDisplay(setRPalavraPartidaTela);
    }   
}

function palavraPartidaDisplay(setRPalavraPartidaTela){
    palavraPartidaTela = "";
    for (let i = 0; i<palavraPartida.length; i++){
        palavraPartidaTela += "_";
    }
    setRPalavraPartidaTela(palavraPartidaTela);
    console.log(palavraPartidaTela);
}

function Letras() {
    return (
        <ContainerLetras>
            <CaixaLetras>
                {alfabeto.map(Letra)}
            </CaixaLetras>
        </ContainerLetras>
    )
}

function Letra(letra) {
    return (
        <CaixaLetra>
            <FonteLetra>{letra}</FonteLetra>
        </CaixaLetra>
    )
}

function Chute() {
    return (
        <ContainerChute>
            <CaixaTexto>
                <FonteCaixaTexto>Já sei a palavra!</FonteCaixaTexto>
            </CaixaTexto>
            <InputChute type="text" placeholder="" />
            <BotaoChutar>
                <FonteBotaoChutar>chutar</FonteBotaoChutar>
            </BotaoChutar>
        </ContainerChute>
    )
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


const ContainerChute = styled.div`
display: flex;
padding: 100px 100px;
align-items: center;
`

const CaixaTexto = styled.div`
width: 150px;
height: 23px;
display: flex;
align-items: center;
text-align: center;
`

const FonteCaixaTexto = styled.p`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
`

const InputChute = styled.input`
margin: 0px 10px;
width: 353px;
height: 40px;
box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
`

const BotaoChutar = styled.button`
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;
    box-shadow: border: 1px solid #7AA7C7;
    border-radius: 3px;
`

const FonteBotaoChutar = styled.p`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #3C76A1;
`