import { Input } from "../../components/Input";
import { mergeStyle } from "../../utils/mergeCss";

import styles from "./styles.module.scss";

export function CreateGame() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register a new Game</h2>

      <section className={mergeStyle(styles.searchWrapper, styles.padding)}>
        <h2>Not sure if the game already exists ?</h2>
        <input type="search" name="" id="" placeholder="Search for it !!" />
      </section>

      <h2>Game Information !!</h2>
      <section className={mergeStyle(styles.gameDetails, styles.padding)}>
        <Input
          text="Game Name *"
          placeholder="Fill in the game name"
          htmlFor="game"
          type="text"
          name="game"
          id="game"
          required
        />

        <Input
          text="Price *"
          placeholder="Fill in the game price"
          htmlFor="price"
          type="number"
          name="price"
          id="price"
          required
        />
        <div className={styles.checkboxWrapper}>
          <label htmlFor="avaiable">Make it avaiable ?</label>
          <input type="checkbox" name="avaiable" />
        </div>

        <Input
          text="Description *"
          placeholder="Fill in the game description"
          htmlFor="description"
          type="text"
          name="description"
          id="description"
          required
        />
      </section>

      <h2>Game Midia</h2>
      <section className={mergeStyle(styles.gameMidia, styles.padding)}>
        <div>
          <Input
            text="Image"
            htmlFor="description"
            type="radio"
            name="image"
            id="image"
            required
          />
          <Input
            text="Video"
            htmlFor="video"
            type="radio"
            name="video"
            id="video"
            required
          />
        </div>

        <Input
          text="Escolha o arquivo"
          htmlFor="video"
          type="file"
          name="video"
          id="video"
          required
        />
      </section>
    </div>
  );
}
