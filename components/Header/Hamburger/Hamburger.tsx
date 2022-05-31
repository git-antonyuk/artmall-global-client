import styles from "./Hamburger.module.scss";
import { stateGlobalUi, toggleShowMobileMenu } from "@/state/globalUi";
import { useSnapshot } from "valtio";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { DefaultProps } from "types";

const Hamburger = ({ className }: DefaultProps) => {
  const snap = useSnapshot(stateGlobalUi);
  const onClick = () => {
    toggleShowMobileMenu();
  };
  const iconStyles = { fontSize: "24px" };
  const icon = snap.showMobileMenu ? (
    <CloseOutlined style={iconStyles} />
  ) : (
    <MenuOutlined style={iconStyles} />
  );
  const componentStyles = `${styles.button} ${className}`;
  return (
    <button type="button" onClick={onClick} className={componentStyles}>
      {icon}
    </button>
  );
};

export default Hamburger;
