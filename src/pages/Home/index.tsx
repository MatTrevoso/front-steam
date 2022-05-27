import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import { mergeStyle } from "../../utils/mergeCss";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { gamesService } from "../../services/gamesService/gamesService";
import { useQuery } from "react-query";

export function Home() {
  const { isLoading, error, data } = useQuery("jogos", () =>
    gamesService.getGames({ page: 0, take: 3 })
  );

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

      {data?.data.map((jogo) => {
        //console.log("fui executao", jogo.midia[0].caminho);
        /*   const divImage = {
          backgroundImage: "url(" + jogo.midia[0].caminho + ");",
          // backgroundImage: "url(" + jogo.midia[0].caminho + ");",
        }; */

        return (
          <Swiper
            key={jogo.id}
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
              <div
                className={mergeStyle(styles.swiper, styles["swiper-banner-1"])}
              >
                <div className={styles["swiper-slide"]}>
                  <div className={styles.container}>
                    <div className={styles.content}>
                      <h1>{jogo.nome}</h1>
                      <h2>R$ 200,00</h2>
                      <p>{jogo.sinopse}</p>
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
              <div
                className={mergeStyle(styles.swiper, styles["swiper-banner-2"])}
              >
                <div className={styles["swiper-wrapper"]}>
                  <div className={styles["swiper-slide"]}>
                    <div className={styles.container} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        );
      })}
    </>
  );
}
