import { useTranslation } from "next-i18next";

const useNavigation = () => {
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

  return {
    items
  }
}

export default useNavigation;
