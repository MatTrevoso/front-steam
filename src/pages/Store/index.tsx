import { mergeStyle } from "../../utils/mergeCss";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CallToAction from "../../assets/images/callToAction.png";
import Game2 from "../../assets/images/game2.png";
import Game3 from "../../assets/images/game3.png";
import Game4 from "../../assets/images/game4.png";

export function Store() {
  return (
    <>
      <section className={styles["genres-banner"]}>
        <div className={styles.container}>
          <div className={styles.content}>
            <input type="search" name="" id="" placeholder="Search" />
            {/*    <FontAwesomeIcon icon={faSearch} /> */}
            <div className={styles.title}>
              <h2>Aproveite Jogos Em Promoção</h2>
            </div>
          </div>
        </div>
        <div
          className={mergeStyle(styles.swiper, styles["swiper-genres-title"])}
        >
          <div className={styles["swiper-wrapper"]}>
            <div className={styles["swiper-slide"]}>
              <img src={CallToAction} alt="Banner" />
            </div>
            {/*   <div className="swiper-slide">
              <img src="/src/banner-2.png" alt="Banner" />
            </div> */}
          </div>
          <div className="swiper-pagination swiper-pagination-genres-title"></div>
        </div>
      </section>
      <section className={styles["games-list"]}>
        <div className="container">
          <nav>
            <ul>
              <li>
                <span>Action</span>
              </li>
              <li>
                <span>Fantasy</span>
              </li>
              <li>
                <span>Race</span>
              </li>
              <li>
                <span>Esports</span>
              </li>
              <li>
                <span>FPS</span>
              </li>
              <li>
                <span>MMORPG</span>
              </li>
              <li>
                <span>Platform</span>
              </li>
              <li>
                <span>Strategy</span>
              </li>
              <li>
                <span>Adventure</span>
              </li>
            </ul>
          </nav>

          <div className={styles.games}>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game2} alt="Jogo 1" />
                <div className={styles.data}>
                  <span className={styles.name}>Gun Gale Online</span>
                  <span className={styles.price}>R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game3} alt="Jogo 2" />
                <div className={styles.data}>
                  <span className={styles.name}>Genshin Impact</span>
                  <span className={styles.price}>R$150,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game4} alt="Jogo 3" />
                <div className={styles.data}>
                  <span className={styles.name}>Final Fantasy XIV</span>
                  <span className={styles.price}>R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game4} alt="Jogo 4" />
                <div className={styles.data}>
                  <span className={styles.name}>Pokémon</span>
                  <span className={styles.price}>R$300,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game3} alt="Jogo 1" />
                <div className={styles.data}>
                  <span className={styles.name}>Gun Gale Online</span>
                  <span className={styles.price}>R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game2} alt="Jogo 2" />
                <div className={styles.data}>
                  <span className={styles.name}>Genshin Impact</span>
                  <span className={styles.price}>R$150,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game4} alt="Jogo 3" />
                <div className={styles.data}>
                  <span className={styles.name}>Final Fantasy XIV</span>
                  <span className={styles.price}>R$100,00</span>
                </div>
              </div>
            </a>
            <a href="javacript:void(0)" /* onclick="openGameModal()" */>
              <div className={styles.game}>
                <img src={Game2} alt="Jogo 4" />
                <div className={styles.data}>
                  <span className={styles.name}>Pokémon</span>
                  <span className={styles.price}>R$300,00</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
