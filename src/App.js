import Jogo from "./jogo.js"
import Chute from "./chute.js"
import Letras from "./letras.js"




function App(props) {
  return (
    <div className="App">
      <Jogo funcSelecionaPalavra={props.funcSelecionaPalavra}/>
      <Letras />
      <Chute/>
    </div>
  );
}

export default App;
