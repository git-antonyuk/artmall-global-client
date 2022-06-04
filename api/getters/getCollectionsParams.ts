import {
  CATALOG_PER_PAGE_DEFAULT_LIMIT,
  FILTER_PRICE_MAP,
} from "@/utils/constants";
import { ICollectionQueryParams, IGeneralQueryParams } from "types";

interface IGetCollectionsParams {
  price?: string;
  limit?: string;
  page?: string;
}

interface IGetCollectionsResult {
  generalOptions: IGeneralQueryParams;
  collectionOptions: ICollectionQueryParams;
}

const getCollectionsParams = ({
  page,
  limit,
  price,
}: IGetCollectionsParams): IGetCollectionsResult => {
  const currentPage = Number(page) - 1 || 0;
  const currentLimit = Number(limit) || CATALOG_PER_PAGE_DEFAULT_LIMIT;

  const generalOptions: IGeneralQueryParams = {
    removedByUser_ne: true,
  };

  if (price) {
    if (!generalOptions._where) {
      generalOptions._where = [];
    }
    generalOptions._where.push(
      { price_gte: FILTER_PRICE_MAP[Number(price)][0] || 1 },
      { price_lte: FILTER_PRICE_MAP[Number(price)][1] || 999999999 }
    );
  }

  const collectionOptions: ICollectionQueryParams = {
    _start: currentPage * currentLimit,
    _limit: currentLimit,
    _sort: "rating:DESC",
    ...generalOptions,
  };

  return {
    generalOptions,
    collectionOptions,
  };
};

export default getCollectionsParams;
