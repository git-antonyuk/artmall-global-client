import { IProduct, IApiError } from "./../../types/index.d";
import fetchCollection from "api/fetchCollection";
import type { NextApiRequest, NextApiResponse } from "next";
import transformProducts from "api/transformers/transformProducts";
import fetchCollectionCount from "api/fetchCollectionCount";
import getCollectionsParams from "api/getters/getCollectionsParams";

const CONTENT_TYPE_NAME = "products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ products: IProduct[]; total: number } | IApiError>
) {
  const { locale, subject } = req.body.params;

  try {
    const [total, products]: [number, IProduct[]] = await Promise.all([
      fetchCollectionCount(
        CONTENT_TYPE_NAME,
        getCollectionsParams(req.body.params).generalOptions
      ),
      fetchCollection(
        CONTENT_TYPE_NAME,
        getCollectionsParams(req.body.params).collectionOptions
      ),
    ]);

    res
      .status(200)
      .send({ products: transformProducts(products, locale), total });
  } catch (err: any) {
    res
      .status(err.status || 500)
      .send({ message: err.message || "Failed to fetch catalog products" });
  }
}
