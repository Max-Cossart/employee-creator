import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div
      className={
        title === "Employee's List" ? styles.home__wrapper : styles.wrapper
      }
    >
      {title !== "Employee's List" ? (
        <NavLink to={"/"}>
          <button className={styles.btn}>&lt; Back</button>
        </NavLink>
      ) : null}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Header;
