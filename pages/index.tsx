import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";
import { IGetStaticProps } from "../types";

const Home: NextPage = () => {
  return (
    <LayoutDefault>
      <h1>Hello 42</h1>
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
