import { ParsedUrlQuery } from "querystring";

const getCatalogProducts = async (query: ParsedUrlQuery): Promise<any> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/catalog-products`, {
    method: "post",
    body: JSON.stringify({ params: query }),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

export default getCatalogProducts;
