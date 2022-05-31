import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import useHeader from "./useHeader";
import NavigationMain from "../Navigation/Main/Navigation";
import SwitchLocale from "../SwitchLocale/SwitchLocale";
import SearchBar from "../SearchBar/SearchBar";
import Hamburger from "./Hamburger/Hamburger";

const CustomHeader = () => {
  const { show, isOnTop } = useHeader();

  const headerClasses = `${styles.header} 
  ${!show ? styles["header--hidden"] : ""} 
  ${isOnTop ? styles["header--on-top"] : ""}`;

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <Hamburger className={styles.hamburger} />
            <Logo />
            <SearchBar className={styles.search} />
          </div>
          <NavigationMain className={styles.navigation} />
          <div>
            <SwitchLocale />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;
