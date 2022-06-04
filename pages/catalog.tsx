import CatalogPagination from "@/components/Catalog/CatalogPagination/CatalogPagination";
import ProductsList from "@/components/Catalog/ProductsList/ProductsList";
import getCommonTranslations from "@/utils/getCommonTranslations";
import { getProducts } from "hooks/getProducts";
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
      <ProductsList products={products}/>
      <CatalogPagination total={total} />
    </LayoutDefault>
  );
};

export async function getServerSideProps({
  query,
  locale,
}: GetServerSidePropsContext) {
  const { products, total } = await getProducts({ ...query, locale });

  return {
    props: {
      products,
      total,
      ...(await getCommonTranslations(locale || "en_GB")),
    },
  };
}

export default CatalogPage;
