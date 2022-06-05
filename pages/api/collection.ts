import { IApiError } from "./../../types/index.d";
import type { NextApiRequest, NextApiResponse } from "next";
import fetchCollection from "api/fetchCollection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[] | IApiError>
) {
  const { contentType } = req.body.params;

  try {
    const result = await fetchCollection(contentType);

    res.status(200).send(result);
  } catch (err: any) {
    res
      .status(err.status || 500)
      .send({ message: err.message || "Failed to fetch collection" });
  }
}
