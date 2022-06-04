import { IProduct } from "types";
import CatalogPagination from "@/components/Catalog/CatalogPagination/CatalogPagination";
import PerPage from "@/components/Catalog/PerPage/PerPage";
import ProductsList from "@/components/Catalog/ProductsList/ProductsList";

interface ICatalogProps {
  products?: IProduct[];
  total?: number;
}

const Catalog = ({ products, total }: ICatalogProps) => {
  return (
    <>
      <ProductsList products={products} />
      <CatalogPagination total={total} />
      <PerPage />
    </>
  );
};

export default Catalog;
