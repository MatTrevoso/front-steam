export function Store() {
  return (
    <>
      <section className="genres-banner">
        <div className="container">
          <div className="content">
            <form action="">
              <input type="search" name="" id="" placeholder="Search" />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="title">
              <h2>Aproveite Jogos Em Promoção</h2>
            </div>
          </div>
        </div>
        <div className="swiper swiper-genres-title">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/src/banner-1.png" alt="Banner" />
            </div>
            <div className="swiper-slide">
              <img src="/src/banner-2.png" alt="Banner" />
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-genres-title"></div>
        </div>
      </section>
      <section className="games-list">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Fantasy</a>
              </li>
              <li>
                <a href="#">Race</a>
              </li>
              <li>
                <a href="#">Esports</a>
              </li>
              <li>
                <a href="#">FPS</a>
              </li>
              <li>
                <a href="#">MMORPG</a>
              </li>
              <li>
                <a href="#">Platform</a>
              </li>
              <li>
                <a href="#">Strategy</a>
              </li>
              <li>
                <a href="#">Adventure</a>
              </li>
            </ul>
          </nav>
          <div className="games">
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-1.jfif" alt="Jogo 1" />
                <div className="data">
                  <span className="name">Gun Gale Online</span>
                  <span className="price">R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-2.png" alt="Jogo 2" />
                <div className="data">
                  <span className="name">Genshin Impact</span>
                  <span className="price">R$150,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-3.png" alt="Jogo 3" />
                <div className="data">
                  <span className="name">Final Fantasy XIV</span>
                  <span className="price">R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-4.png" alt="Jogo 4" />
                <div className="data">
                  <span className="name">Pokémon</span>
                  <span className="price">R$300,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-1.jfif" alt="Jogo 1" />
                <div className="data">
                  <span className="name">Gun Gale Online</span>
                  <span className="price">R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-2.png" alt="Jogo 2" />
                <div className="data">
                  <span className="name">Genshin Impact</span>
                  <span className="price">R$150,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-3.png" alt="Jogo 3" />
                <div className="data">
                  <span className="name">Final Fantasy XIV</span>
                  <span className="price">R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className="game">
                <img src="/src/game-4.png" alt="Jogo 4" />
                <div className="data">
                  <span className="name">Pokémon</span>
                  <span className="price">R$300,00</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="game-modal" id="about-game-modal">
        <div className="container-modal">
          <div className="content">
            <h1>Genshin Impact</h1>
            <div className="description">
              <h2>Descrição</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos dolores quas cupiditate fugiat odit aut earum,
                dolore vitae magnam nesciunt veritatis inventore sequi, ullam
                eum. Impedit, dolor! Placeat, temporibus aut.
              </p>
              <p>
                Quisquam voluptatem quaerat assumenda dicta aspernatur aliquid
                quos cupiditate, quis quibusdam vitae iste consequatur officia,
                minus enim corporis, possimus sunt ducimus harum nemo! Ullam
                omnis blanditiis dolor dicta perferendis eligendi.
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
    </>
  );
}
