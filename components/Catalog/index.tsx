import styles from './CatalogIndex.module.scss';
import { IProduct } from "types";
import CatalogPagination from "@/components/Catalog/CatalogPagination/CatalogPagination";
import PerPage from "@/components/Catalog/PerPage/PerPage";
import ProductsList from "@/components/Catalog/ProductsList/ProductsList";
import CatalogFilters from "../CatalogFilters/CatalogFilters";
import { useTranslation } from "next-i18next";
interface ICatalogProps {
  products?: IProduct[];
  total?: number;
}

const Catalog = ({ products, total }: ICatalogProps) => {
  const { t } = useTranslation("catalog");

  return (
    <>
      <div className={styles.header}>
        <CatalogFilters total={total || 0} />
        <h5 >{t('foundProducts')} {total}</h5>
      </div>
     
      <ProductsList products={products} />
      <CatalogPagination total={total} />
      <PerPage />
    </>
  );
};

export default Catalog;
