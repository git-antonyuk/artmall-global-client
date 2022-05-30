import { Header } from "antd/lib/layout/layout";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import useHeader from "./useHeader";
import Navigation from "../Navigation/Navigation";
import SwitchLocale from "../SwitchLocale/SwitchLocale";
import SearchBar from "../SearchBar/SearchBar";
import Hamburger from "./Hamburger/Hamburger";

const CustomHeader = () => {
  const { show, isOnTop } = useHeader();

  const headerClasses = `${styles.header} 
  ${!show ? styles["header--hidden"] : ""} 
  ${isOnTop ? styles["header--on-top"] : ""}`;

  return (
    <Header className={headerClasses}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Hamburger />
          <Logo />
          <SearchBar />
        </div>
        <Navigation />
        <div>
          <SwitchLocale />
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
