import getCollection from "api/asyncGetters/getCollection";
import { useState } from "react";

const useCatalogFilters = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [categories, setCategories] = useState<[]>();
  const [styles, setStyles] = useState<[]>();
  const [subjects, setSubjects] = useState<[]>();
  const [techniques, setTechniques] = useState<[]>();

  const fetch = async () => {
    if (categories && styles && subjects && techniques) {
      return;
    }
    setLoading(true);

    try {
      const [categoriesList, stylesList, subjectsList, techniquesList] =
        await Promise.all([
          getCollection("categories"),
          getCollection("styles"),
          getCollection("subjects"),
          getCollection("techniques"),
        ]);

      setCategories(categoriesList);
      setStyles(stylesList);
      setSubjects(subjectsList);
      setTechniques(techniquesList);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetch,
    loading,
    error,
    categories,
    styles,
    subjects,
    techniques,
  };
};

export default useCatalogFilters;
