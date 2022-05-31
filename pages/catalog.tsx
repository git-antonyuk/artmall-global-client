import getCommonTranslations from "@/utils/getCommonTranslations";
import type { NextPage } from "next";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";
import { IGetStaticProps } from "../types";

const CatalogPage: NextPage = () => {
  return (
    <LayoutDefault>
      <h1>Catalog page</h1>
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

export default CatalogPage;
