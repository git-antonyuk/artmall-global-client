import { Header } from "antd/lib/layout/layout";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import useHeader from "./useHeader";
import Navigation from "../Navigation/Navigation";
import SwitchLocale from "../SwitchLocale/SwitchLocale";

const CustomHeader = () => {
  const { show, isOnTop } = useHeader();

  const headerClasses = `${styles.header} 
  ${!show ? styles["header--hidden"] : ""} 
  ${isOnTop ? styles["header--on-top"] : ""}`;

  return (
    <Header className={headerClasses}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Logo />
          <Navigation />
        </div>
        <div>
          <SwitchLocale />
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
