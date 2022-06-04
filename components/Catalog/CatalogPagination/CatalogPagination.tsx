import styles from "./CatalogPagination.module.scss";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import type { PaginationProps } from "antd";
import Link from "next/link";
import { LIMIT } from "pages/api/catalog-products";

interface ICatalogPagination {
  total?: number;
}

const CatalogPagination = ({ total }: ICatalogPagination) => {
  const router = useRouter();

  const itemRender: PaginationProps["itemRender"] = (
    pageNumber,
    type,
    originalElement
  ) => {
    if (type === "page") {
      return (
        <Link
          href={{
            pathname: "/catalog",
            query: {
              ...router.query,
              page: pageNumber,
            },
          }}
        >
          <a>{pageNumber}</a>
        </Link>
      );
    }
    return originalElement;
  };

  return (
    <Pagination
      defaultCurrent={Number(router.query.page) || 1}
      total={total || 0}
      itemRender={itemRender}
      defaultPageSize={LIMIT}
    />
  );
};

export default CatalogPagination;
