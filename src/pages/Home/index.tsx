import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import { mergeStyle } from "../../utils/mergeCss";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function Home() {
  return (
    <>
      <section className={mergeStyle(styles.banner, styles["banner-1"])}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Histórias e Lendas possuem começos</h1>
            <h2>Começe a sua Conosco, Loman Games. : )</h2>
            <p>
              Mundos com açao, fantisia, plataformas esperando um novo campeão
              para desvendalos, faça sua escolha Gamer
            </p>
          </div>
        </div>
      </section>

      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={mergeStyle(styles.swiper, styles["swiper-banner-1"])}>
            <div className={styles["swiper-slide"]}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <h1>
                    The Legend Of Zelda <span>Age Of Destruction</span>
                  </h1>
                  <h2>R$ 200,00</h2>
                  <p>
                    Breath of the Wild é um jogo eletrônico de ação-aventura em
                    mundo aberto que os jogadores podem explorar livremente
                    enquanto controlam Link. ... O jogador pode realizar ações
                    como correr, escalar, nadar e voar com um paraglider, porém
                    todas são limitadas pelo fôlego de Link.
                  </p>
                  <a href="/#">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                    Participar da Aventura
                  </a>
                </div>
                <div className={styles["empty-space"]}></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={mergeStyle(styles.swiper, styles["swiper-banner-1"])}>
            <div className={styles["swiper-wrapper"]}>
              <div className={styles["swiper-slide"]}>
                <div className={styles.container}>
                  <div className={styles.content}>
                    <h1>
                      The Legend Of Zelda <span>Age Of Destruction</span>
                    </h1>
                    <h2>R$ 200,00</h2>
                    <p>
                      Breath of the Wild é um jogo eletrônico de ação-aventura
                      em mundo aberto que os jogadores podem explorar livremente
                      enquanto controlam Link. ... O jogador pode realizar ações
                      como correr, escalar, nadar e voar com um paraglider,
                      porém todas são limitadas pelo fôlego de Link.
                    </p>
                    <a href="/#">
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                      Participar da Aventura
                    </a>
                  </div>
                  <div className={styles["empty-space"]}></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/*  <section className={mergeStyle(styles.banner, styles["banner-2"])}>
        <div className={mergeStyle(styles.swiper, styles["swiper-banner-1"])}>
          <div className={styles["swiper-wrapper"]}>
            <div className={styles["swiper-slide"]}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <h1>
                    The New World <span>Amazon Series</span>
                  </h1>
                  <h2>R$ 280,00</h2>
                  <p>
                    Breath of the Wild é um jogo eletrônico de ação-aventura em
                    mundo aberto que os jogadores podem explorar livremente
                    enquanto controlam Link. ... O jogador pode realizar ações
                    como correr, escalar, nadar e voar com um paraglider, porém
                    todas são limitadas pelo fôlego de Link.
                  </p>
                  <a href="#">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                    Participar da Aventura
                  </a>
                </div>
                <div className={styles["empty-space"]}></div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-1"></div>
        </div>
      </section> */}
    </>
  );
}
