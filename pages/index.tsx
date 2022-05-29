import type { NextPage } from "next";
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { DatePicker } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";
import { IGetStaticProps } from "../types";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <LayoutDefault>
      <div>
        <p>{t("hello")}</p>
      </div>
    </LayoutDefault>
  );
};

export const getStaticProps = async ({ locale }: IGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navigation"])),
    },
  };
};

export default Home;
