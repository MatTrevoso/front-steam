import styles from "./styles.module.scss";

import logo from "../../assets/images/lomanGames.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../../contexts/Modal";
import AuthContext from "../../contexts/Auth";
import { UserSignedButton } from "../UserSignedButton";

export function Header() {
  const { userIsSigned, signOut } = useContext(AuthContext);
  const { openModal } = useContext(ModalContext);

  function handleSignOut() {
    signOut();
  }

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
                  <Link to="/library">My Games</Link>
                </li>
              )}
              <li>
                <Link to="/store">Genres</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["button-place"]}>
          {userIsSigned ? (
            <UserSignedButton text="Mateus" onClick={handleSignOut} />
          ) : (
            <Button text="Sign In" isRound={true} onClick={() => openModal()} />
          )}
        </div>
      </div>
    </header>
  );
}
