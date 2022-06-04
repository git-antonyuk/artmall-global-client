import { useRouter } from "next/router";
import { CATALOG_PER_PAGE_DEFAULT_LIMIT } from "@/utils/constants";

const useCatalogPerPage = () => {
  const router = useRouter();

  const getCurrentLimit = () => {
    return Number(router.query.limit) || CATALOG_PER_PAGE_DEFAULT_LIMIT
  }

  const currentPageSizeOptions = (): number[] => {
    const res = [];
    for (let i = 0; i < 5; i++) {
      res.push((i + 1) * CATALOG_PER_PAGE_DEFAULT_LIMIT)
    }
    return res;
  }
  
  return {
    getCurrentLimit,
    currentPageSizeOptions
  }
}

export default useCatalogPerPage;
