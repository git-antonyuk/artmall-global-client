import styles from "./MobileMenu.module.scss";
import { stateGlobalUi, toggleShowMobileMenu } from "@/state/globalUi";
import { useSnapshot } from "valtio";
import { Drawer, List } from "antd";
import useNavigation from "@/components/Navigation/useNavigation";
import Link from "next/link";
import Logo from "../Logo/Logo";

const MobileMenu = () => {
  const { items } = useNavigation();
  const snap = useSnapshot(stateGlobalUi);
  const onClose = () => {
    toggleShowMobileMenu();
  };
  return (
    <Drawer
      title={<Logo />}
      placement="left"
      closable={true}
      onClose={onClose}
      visible={snap.showMobileMenu}
      key="left"
    >
      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Link href={item.href}>{item.label}</Link>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default MobileMenu;
