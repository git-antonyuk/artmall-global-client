import styles from "./Navigation.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { DefaultProps } from "types";

const Navigation = ({ className }: DefaultProps) => {
  const { t } = useTranslation("navigation");

  const items = [
    {
      href: "/catalog",
      label: t("headerNavigation.catalog"),
    },
    {
      href: "/authors",
      label: t("headerNavigation.authors"),
    },
    {
      href: "/about",
      label: t("headerNavigation.about"),
    },
    {
      href: "/faq",
      label: t("headerNavigation.faq"),
    },
    {
      href: "/sell",
      label: t("headerNavigation.sell"),
    },
  ];

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

export default Navigation;
