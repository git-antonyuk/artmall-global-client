import styles from "./Navigation.module.scss";
import Link from "next/link";
import { DefaultProps } from "types";
import useNavigation from "../useNavigation";

const NavigationMain = ({ className }: DefaultProps) => {
  const { items } = useNavigation();

  const componentStyles = `${styles.list} ${className}`;

  return (
    <ul className={componentStyles}>
      {items.map((item, i) => (
        <li key={i} className={styles.link}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMain;
