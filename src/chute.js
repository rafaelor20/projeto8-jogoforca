import styled from "styled-components"
import React, { useCallback, useState } from "react"


export default function Chute(props) {
    const [resposta, setResposta] = React.useState("");
    const [update, setUpdate] = React.useState(resposta);
    return (
        <ContainerChute>
            <CaixaTexto>
                <FonteCaixaTexto>Já sei a palavra!</FonteCaixaTexto>
            </CaixaTexto>
            <InputChute type="text" placeholder="" />
            <BotaoChutar onClick={()=>chutar(props, resposta)}>
                <FonteBotaoChutar>chutar</FonteBotaoChutar>
            </BotaoChutar>
        </ContainerChute>
    )
}

function chutar(props, valor){
    if (props.info.palavraPartida === valor){
        alert("Voce ganhou!");
    } else {
        alert("Voce perdeu");
    }
}

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