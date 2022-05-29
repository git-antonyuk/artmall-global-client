import type { NextPage } from "next";
import styles from "../styles/About.module.scss";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage: NextPage = () => {
  return (
    <LayoutDefault>
      <div className="about">
        <div>About</div>
      </div>
    </LayoutDefault>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "navigation"])),
      },
    };
  };

export default AboutPage;
