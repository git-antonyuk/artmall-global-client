import { ParsedUrlQuery } from "querystring";
import fetch from "node-fetch";

const getProducts = async (query: ParsedUrlQuery): Promise<any> => {
  const res = await fetch(`${process.env.BASE_URL}/api/catalog-products`, {
    method: "post",
    body: JSON.stringify({ params: query }),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

export {
  getProducts
}
