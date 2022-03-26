import styles from "./styles.module.scss";

import logo from "../../assets/images/lomanGames.svg";
import { Button } from "../Button";

export function Header() {
  return (
    <header className={styles.headerContent}>
      <div className={styles.container}>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">My Games</a>
              </li>
              <li>
                <a href="#">Genres</a>
              </li>
            </ul>
          </nav>
        </div>
        <Button text="Sign In" />
      </div>
    </header>
  );
}

{
  /* <span className="mobile-menu-icon" onClick="openSideNav()">
<i className="fas fa-bars fa-2x"></i>
</span> */
}
