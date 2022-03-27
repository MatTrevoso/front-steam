import styles from "./styles.module.scss";

import logo from "../../assets/images/lomanGames.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../../contexts/Modal";
import AuthContext from "../../contexts/Auth";

export function Header() {
  const { userIsSigned } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {userIsSigned && (
                <li>
                  <Link to="/store">My Games</Link>
                </li>
              )}
              <li>
                <Link to="/store">Genres</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["button-place"]}>
          <Button text="Sign In" isRound={true} onClick={() => openModal()} />
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
