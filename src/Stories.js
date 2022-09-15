function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}

export default function Stories() {
  return (
    <div class="stories">
      <Story imagem="assets/img/9gag.svg" user="9gag" />
      <Story imagem="assets/img/meowed.svg" user="meowed" />
      <Story imagem="assets/img/barked.svg" user="barked" />
      <Story
        imagem="assets/img/nathanwpylestrangeplanet.svg"
        user="nathanwpylestrangeplanet"
      />
      <Story imagem="assets/img/wawawicomics.svg" user=" wawawicomics" />
      <Story imagem="assets/img/respondeai.svg" user=" respondeai" />
      <Story imagem="assets/img/filomoderna.svg" user=" filomoderna" />
      <Story imagem="assets/img/memeriagourmet.svg" user=" memeriagourmet" />

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
