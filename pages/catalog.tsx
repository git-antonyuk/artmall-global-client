import Catalog from "@/components/Catalog";
import getCommonTranslations from "@/utils/getCommonTranslations";
import getCatalogProducts from "api/asyncGetters/getCatalogProducts";
import type { GetServerSidePropsContext, NextPage } from "next";
import { IProduct } from "types";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";

interface ICatalogPageProps {
  products?: IProduct[];
  total?: number;
}

const CatalogPage: NextPage = ({ products, total }: ICatalogPageProps) => {
  return (
    <LayoutDefault>
      <Catalog products={products} total={total} />
    </LayoutDefault>
  );
};

export async function getServerSideProps({
  query,
  locale,
}: GetServerSidePropsContext) {
  const { products, total } = await getCatalogProducts({ ...query, locale });

  return {
    props: {
      products: products || [],
      total: total || 0,
      ...(await getCommonTranslations(locale || "en_GB", ["catalog", "filters"])),
    },
  };
}

export default CatalogPage;
