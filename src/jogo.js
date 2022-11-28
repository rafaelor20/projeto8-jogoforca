import styled from "styled-components"
import forca from "./assets/forca0.png"

export default function Jogo(props) {
    return (
        <JogoDiv>
            <ImgForca src={forca} alt="" />
            <JogoLadoDireito>
                <BotaoIniciar onClick={props.funcSelecionaPalavra}>
                    <FonteBotaoIniciar>Escolher Palavra</FonteBotaoIniciar>
                </BotaoIniciar>
                <p></p>
            </JogoLadoDireito>
        </JogoDiv>
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