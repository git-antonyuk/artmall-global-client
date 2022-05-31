import getCommonTranslations from "@/utils/getCommonTranslations";
import type { NextPage } from "next";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";
import { IGetStaticProps } from "../types";

const AboutPage: NextPage = () => {
  return (
    <LayoutDefault>
      <h1>About page</h1>
    </LayoutDefault>
  );
};

export const getStaticProps = async ({ locale }: IGetStaticProps) => {
  return {
    props: {
      ...(await getCommonTranslations(locale)),
    },
  };
};

export default AboutPage;
