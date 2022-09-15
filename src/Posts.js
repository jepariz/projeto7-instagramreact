function Post (props){
  return (
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src= {props.foto} />
        meowed
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.imagem} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src= {props.curtida} />
        <div class="texto">
          Curtido por <strong>{props.textocurtida}</strong> e <strong>{props.numerocurtidas}</strong>
        </div>
      </div>
    </div>
  </div>
  )
}



export default function Posts (){
    return (
        <div class="posts">

        <Post 
        foto="assets/img/meowed.svg"
        imagem="assets/img/gato-telefone.svg" 
        curtida="assets/img/respondeai.svg" 
        textocurtida="respondeai"
        numerocurtidas="outras 101.523 pessoas"
        />

        <Post 
        foto="assets/img/barked.svg"
        imagem="assets/img/dog.svg" 
        curtida="assets/img/adorable_animals.svg" 
        textocurtida="adorable_animals"
        numerocurtidas="outras 99.159 pessoas"
        />

      </div>
    )
}