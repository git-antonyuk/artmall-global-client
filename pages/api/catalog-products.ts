import {
  IProduct,
  IApiError,
  ICollectionQueryParams,
} from "./../../types/index.d";
import fetchCollection from "api/fetchCollection";
import type { NextApiRequest, NextApiResponse } from "next";
import transformProducts from "api/transformers/transformProducts";
import fetchCollectionCount from "api/fetchCollectionCount";
import { CATALOG_PER_PAGE_DEFAULT_LIMIT, FILTER_PRICE_MAP } from "@/utils/constants";

const CONTENT_TYPE_NAME = "products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ products: IProduct[]; total: number } | IApiError>
) {
  const { page, limit, locale, price } = req.body.params;

  const currentPage = Number(page) - 1 || 0;
  const currentLimit = Number(limit) || CATALOG_PER_PAGE_DEFAULT_LIMIT;

  const collectionOptions: ICollectionQueryParams = {
    removedByUser_ne: true,
    _start: currentPage * currentLimit,
    _limit: currentLimit,
    _sort: "rating:DESC",
  };

  console.log('%c 🥖 price: ', 'font-size:12px;background-color: #4b4b4b;color:#fff;', price);

  if (price) {
    if (!collectionOptions._where) {
      collectionOptions._where = [];
    }
    collectionOptions._where.push(
      { price_gte: FILTER_PRICE_MAP[Number(price)][0] || 1 },
      { price_lte: FILTER_PRICE_MAP[Number(price)][1] || 999999999 },
    );
  }

  console.log('%c 🥥 collectionOptions: ', 'font-size:12px;background-color: #33A5FF;color:#fff;', collectionOptions);

  try {
    const [total, products]: [number, IProduct[]] = await Promise.all([
      fetchCollectionCount(CONTENT_TYPE_NAME, {
        removedByUser_ne: true,
      }),
      fetchCollection(CONTENT_TYPE_NAME, collectionOptions),
    ]);
    res
      .status(200)
      .send({ products: transformProducts(products, locale), total });
  } catch (err: any) {
    res
      .status(err.status || 500)
      .send({ message: err.message || "Failed to fetch data" });
  }
}
