import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import PATHROUTES from "../../helpers/PathRoutes.helper";
import image from "../../img/jerickdev.png"

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.nav}>
      <img src={image} alt="logo" className={styles.navImg} />
      <div className={styles.wrapperButton}>
        <Link to={PATHROUTES.HOME} className={styles.linkRouter}>
          Home
        </Link>
        <Link to={PATHROUTES.FAVORITES} className={styles.linkRouter}>
          Favorites
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={PATHROUTES.ABOUT}
        >
          About me
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
