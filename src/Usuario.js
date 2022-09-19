import React from "react";

function User(props) {

  return (
    <>
      <img onClick={props.funcao2} src={props.imagem} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {props.nome}
          <ion-icon onClick= {props.funcao1} name="pencil"></ion-icon>
        </span>
      </div>
    </>
  );
}



export default function Usuario() {

  const [nome, setNome] = React.useState("Catana");
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")

  function trocarNome (){
    const nomePrompt = prompt("Digite o novo nome")
    setNome(nomePrompt)
  }

  function trocarImagem (){
    const imagemPrompt = prompt("Digite o link da imagem")
    setImagem(imagemPrompt)
  }

  return (
    <div class="usuario">
        <User funcao1={trocarNome} funcao2={trocarImagem} imagem={imagem} nome={nome}/>
    </div>
  );
}
