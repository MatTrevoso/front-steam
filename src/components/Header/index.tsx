import styles from "./styles.module.scss";

import logo from "../../assets/images/lomanGames.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">My Games</Link>
              </li>
              <li>
                <Link to="/store">Genres</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["button-place"]}>
          <Button text="Sign In" isRound={false} />
        </div>
      </div>
    </header>
  );
}

{
  /* <span className="mobile-menu-icon" onClick="openSideNav()">
<i className="fas fa-bars fa-2x"></i>
</span> */
}
