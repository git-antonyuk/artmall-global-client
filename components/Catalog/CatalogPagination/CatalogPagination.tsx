import styles from "./CatalogPagination.module.scss";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import type { PaginationProps } from "antd";
import Link from "next/link";
import useCatalogPerPage from "hooks/useCatalogPerPage";
import { PATHNAMES } from "@/utils/constants";
interface ICatalogPagination {
  total?: number;
}

const CatalogPagination = ({ total }: ICatalogPagination) => {
  const router = useRouter();
  const { getCurrentLimit } = useCatalogPerPage();

  const itemRender: PaginationProps["itemRender"] = (
    pageNumber,
    type,
    originalElement
  ) => {
    if (type === "page") {
      return (
        <Link
          href={{
            pathname: PATHNAMES.catalog,
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

  const currentPage = Number(router.query.page) || 1
  

  return (
    <Pagination
      defaultCurrent={currentPage}
      total={total || 0}
      itemRender={itemRender}
      defaultPageSize={getCurrentLimit()}
      showSizeChanger={false}
    />
  );
};

export default CatalogPagination;
