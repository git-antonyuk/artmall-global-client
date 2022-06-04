import fetchCollection from "api/fetchCollection";
import { useState } from "react";

const FILTERS_KEYS = ["categories", "styles", "subjects", "techniques"];

const useCatalogFilters = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const fetch = async () => {
    setLoading(true);

    // const filterPromises = FILTERS_KEYS.map((endpoint: string) => {
    //   return async () => await fetchCollection(endpoint);
    // });

    await new Promise((resolve) => setTimeout(resolve, 500));

    // try {
    //   const [categories, styles, subjects, techniques] = await Promise.all(
    //     filterPromises
    //   );

    //   console.log(
    //     "%c 🍵 fetch: ",
    //     "font-size:12px;background-color: #465975;color:#fff;",
    //     {
    //       categories,
    //       styles,
    //       subjects,
    //       techniques,
    //     }
    //   );
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setLoading(false);
    setLoading(false);
    // }
  };

  return {
    fetch,
    loading,
    error,
  };
};

export default useCatalogFilters;
