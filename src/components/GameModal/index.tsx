import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function GameModal({ isOpen, onRequestClose }: Props) {
  const customStyles = {};

  <Modal
    isOpen={isOpen}
    //onAfterOpen={afterOpenModal}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <section className="game-modal" id="about-game-modal">
      <div className="container-modal">
        <div className="content">
          <h1>Genshin Impact</h1>
          <div className="description">
            <h2>Descrição</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores quas cupiditate fugiat odit aut earum, dolore
              vitae magnam nesciunt veritatis inventore sequi, ullam eum.
              Impedit, dolor! Placeat, temporibus aut.
            </p>
            <p>
              Quisquam voluptatem quaerat assumenda dicta aspernatur aliquid
              quos cupiditate, quis quibusdam vitae iste consequatur officia,
              minus enim corporis, possimus sunt ducimus harum nemo! Ullam omnis
              blanditiis dolor dicta perferendis eligendi.
            </p>
          </div>
          <div className="tags">
            <a href="">#Fantasy</a>
            <a href="">#Adventure</a>
          </div>
        </div>
        <div className="image">
          <img src="/src/banner-3.png" alt="" />
        </div>
        <div className="demo">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/ZxWTIdVr3C8"
            title="YouTube video player"
            /*   frameborder="0" */
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            /*    allowfullscreen */
          ></iframe>
        </div>
        <div className="buy">
          <div className="price">
            <p>Price</p>
            <p>R$150,00</p>
          </div>
          <form action="">
            <label /* for="gift" */>
              <input type="checkbox" name="gift" id="gift" />
              Dar de presente?
            </label>
            <input
              type="text"
              name=""
              id="inputTag"
              className="input-tag"
              placeholder="Insira a #TAG do seu amigo"
            />
            <button type="submit" className="button">
              Comprar
            </button>
          </form>
        </div>
        <a
          href="javascript:void(0)"
          className="close-button" /*  onclick="closeGameModal()" */
        >
          <i className="fas fa-times-square"></i>
        </a>
      </div>
    </section>
  </Modal>;
}
