import styles from "./MobileMenu.module.scss";
import { stateGlobalUi, toggleShowMobileMenu } from "@/state/globalUi";
import { useSnapshot } from "valtio";
import { Drawer } from "antd";

const MobileMenu = () => {
  const snap = useSnapshot(stateGlobalUi);
  const onClose = () => {
    toggleShowMobileMenu();
  };
  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable={true}
      onClose={onClose}
      visible={snap.showMobileMenu}
      key="left"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default MobileMenu;
