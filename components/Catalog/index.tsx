import { IProduct } from "types";
import CatalogPagination from "@/components/Catalog/CatalogPagination/CatalogPagination";
import PerPage from "@/components/Catalog/PerPage/PerPage";
import ProductsList from "@/components/Catalog/ProductsList/ProductsList";
import CatalogFilters from "../CatalogFilters/CatalogFilters";

interface ICatalogProps {
  products?: IProduct[];
  total?: number;
}

const Catalog = ({ products, total }: ICatalogProps) => {
  return (
    <>
      <CatalogFilters />
      <ProductsList products={products} />
      <CatalogPagination total={total} />
      <PerPage />
    </>
  );
};

export default Catalog;
