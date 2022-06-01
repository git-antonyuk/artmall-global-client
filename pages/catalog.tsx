import ProductsList from "@/components/Catalog/ProductsList/ProductsList";
import getCommonTranslations from "@/utils/getCommonTranslations";
import type {
  GetServerSidePropsContext,
  NextPage,
} from "next";
import fetch from "node-fetch";
import LayoutDefault from "../components/LayoutDefault/LayoutDefault";

const CatalogPage: NextPage = () => {
  return (
    <LayoutDefault>
      <ProductsList />
    </LayoutDefault>
  );
};

export async function getServerSideProps({ query, locale }: GetServerSidePropsContext) {
  const res = await fetch(`${process.env.BASE_URL}/api/catalog-products`, {
    method: "post",
    body: JSON.stringify(query),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();

  return { 
    props: { 
      data, 
      ...(await getCommonTranslations(locale || 'en_GB')) 
    } 
  };
}

export default CatalogPage;
