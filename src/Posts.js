import React from "react";


function Post(props) {

  console.log(props)

  const [bookmark, setBookmark] = React.useState("bookmark-outline")
  const [like, setLike] = React.useState("heart-outline")
  const [cor, setCor] = React.useState("")
  const [curtida, setCurtida] = React.useState(props.numeroCurtidas)

  function salvarPost (){
    if(bookmark === "bookmark-outline"){
      setBookmark("bookmark")
    } else{
      setBookmark("bookmark-outline")
    }
  }

  function curtirPost (){
    if(like === "heart-outline"){
      setLike("heart")
      setCor("like")
      setCurtida (props.numeroCurtidas + 1)
    } else{
      setLike("heart-outline")
      setCor("")
      setCurtida(props.numeroCurtidas)
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.fotoUsuario} />
          meowed
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={curtirPost} src={props.imagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon  onClick={curtirPost} class={cor} name={like}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={salvarPost} name={bookmark}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtida} />
          <div class="texto">
            Curtido por <strong>{props.usuarioCurtiu}</strong> e{" "}
            <strong>outras {curtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {

  const posts = [
    {
      fotoUsuario: "assets/img/meowed.svg",
      imagem: "assets/img/gato-telefone.svg",
      curtida: "assets/img/respondeai.svg",
      usuarioCurtiu: "respondeai",
      numeroCurtidas: 101523,
    },

    {
      fotoUsuario: "assets/img/barked.svg",
      imagem: "assets/img/dog.svg",
      curtida: "assets/img/adorable_animals.svg",
      usuarioCurtiu: "adorable_animals",
      numeroCurtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {posts.map((p) => (
        <Post
          fotoUsuario={p.fotoUsuario}
          imagem={p.imagem}
          curtida={p.curtida}
          usuarioCurtiu={p.usuarioCurtiu}
          numeroCurtidas={p.numeroCurtidas}
        />
      ))}
    </div>
  );
}
