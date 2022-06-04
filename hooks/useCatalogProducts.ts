import { IProduct } from "types";
import { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { getProducts } from "./getProducts";

const useCatalogProducts = async () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<any>();

  const fetch = async (query: ParsedUrlQuery, locale: string) => {
    setLoading(true);
    try {
      const { products, total } = await getProducts({ ...query, locale });
      setProducts(products);
      setTotal(total);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetch,
    products,
    loading,
    total,
    error,
  };
};

export default useCatalogProducts;
