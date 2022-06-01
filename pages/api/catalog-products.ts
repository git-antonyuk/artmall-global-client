// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetchCollection from "api/fetchCollection";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }
const LIMIT = 12;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { page } = req.query;

  try {
    const products = await fetchCollection("products", {
      _start: Number(page) || 0,
      _limit: LIMIT,
      _sort: "rating:DESC",
    });
    res.status(200).send({ products });
  } catch (err: any) {
    res
      .status(err.status || 500)
      .send({ error: err.message || "Failed to fetch data" });
  }
}
