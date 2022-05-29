import styles from "./Navigation.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Navigation = () => {
  const { t } = useTranslation("navigation");

  const items = [
    {
      label: <Link href="/catalog">{t("catalog")}</Link>,
    },
    {
      label: <Link href="/authors">{t("authors")}</Link>,
    },
    {
      label: <Link href="/about">{t("about")}</Link>,
    },
    {
      label: <Link href="/faq">{t("faq")}</Link>,
    },
    {
      label: <Link href="/sell">{t("sell")}</Link>,
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
