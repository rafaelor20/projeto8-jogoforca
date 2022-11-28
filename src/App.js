import Jogo from "./jogo.js"
import Chute from "./chute.js"
import Letras from "./letras.js"
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

function caixaAlta(str){
    return str.toUpperCase();
}


function App() {
  const [palavraPartida, setPalavraPartida] = React.useState(undefined);
  const lstForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const [palavraPartidaTela, setPalavraPartidaTela] = React.useState("");
  const [forca, setForca] = React.useState(lstForca[0]);
  let infoJogo = {
      palavras: palavras.map(caixaAlta),
      palavraPartida: palavraPartida,
      setPalavraPartida: setPalavraPartida,
      palavraPartidaTela: palavraPartidaTela,
      setPalavraPartidaTela: setPalavraPartidaTela,
      lstForca: lstForca,
      forca: forca,
      setForca: setForca
  }
  return (
      <div className="App">
          <Jogo info={infoJogo}/>
          <Letras info={infoJogo}/>
          <Chute info={infoJogo}/>
      </div>
  );
}

export default App;
