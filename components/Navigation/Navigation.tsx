import styles from "./Navigation.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Navigation = () => {
  const { t } = useTranslation("navigation");

  const items = [
    {
      label: <Link href="/catalog">{t("headerNavigation.catalog")}</Link>,
    },
    {
      label: <Link href="/authors">{t("headerNavigation.authors")}</Link>,
    },
    {
      label: <Link href="/about">{t("headerNavigation.about")}</Link>,
    },
    {
      label: <Link href="/faq">{t("headerNavigation.faq")}</Link>,
    },
    {
      label: <Link href="/sell">{t("headerNavigation.sell")}</Link>,
    },
  ];

  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>{item.label}</li>
      ))}
    </ul>
  );
};

export default Navigation;
