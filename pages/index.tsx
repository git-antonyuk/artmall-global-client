import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";
import { IGetStaticProps } from "../types";
import Button from "antd/lib/button";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutDefault>
      <div>
        <Button type="primary">
          Primary
        </Button>
        <p>{t("hello")}</p>
      </div>
    </LayoutDefault>
  );
};

export const getStaticProps = async ({ locale }: IGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navigation", "search"])),
    },
  };
};

export default Home;
