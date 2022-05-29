import { useRef } from "react";
import styles from "./Header.module.scss";
import useHeader from "./useHeader";

const Header = () => {
  const refElement = useRef<HTMLElement>(null);
  const { show, isOnTop } = useHeader();

  const headerClasses = `${styles.header} 
    ${!show && styles["header--hidden"]} 
    ${isOnTop && styles["header--on-top"]}`;

  return (
    <header ref={refElement} className={headerClasses}>
      <div>Header {show ? "show" : "hidden"}</div>
    </header>
  );
};

export default Header;
