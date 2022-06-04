import { IProduct, IApiError } from "./../../types/index.d";
import fetchCollection from "api/fetchCollection";
import type { NextApiRequest, NextApiResponse } from "next";
import transformProducts from "api/transformers/transformProducts";
import fetchCollectionCount from "api/fetchCollectionCount";

const LIMIT = 12;
const CONTENT_TYPE_NAME = "products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ products: IProduct[]; total: number } | IApiError>
) {
  const { page, limit, locale } = req.body.params;

  const currentPage = Number(page) - 1 || 0;
  const currentLimit = Number(limit) || LIMIT;

  const collectionOptions = {
    removedByUser_ne: true,
    _start: currentPage * currentLimit,
    _limit: currentLimit,
    _sort: "rating:DESC",
  }

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

export {
  LIMIT
}
