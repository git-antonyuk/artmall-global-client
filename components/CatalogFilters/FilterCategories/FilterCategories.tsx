import styles from "./FilterCategories.module.scss";
import { useTranslation } from "next-i18next";
import getLangFromLocale from "@/utils/getLangFromLocale";
import FilterGroup, { IFilterGroupItem } from "../FilterGroup/FilterGroup";
import { useRouter } from "next/router";

interface IFilterItem {
  createdAt: string;
  id: string;
  name_en: string;
  name_uk: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

interface IFilterCategoriesProps {
  items: IFilterItem[];
}

const FilterCategories = ({ items }: IFilterCategoriesProps) => {
  const router = useRouter();
  const {
    i18n: { language },
  } = useTranslation();
  const lang = getLangFromLocale(language);

  const getPriceCatalog = (uid: string) => {
    const categoryQuery = router.query.category || "";

    if (typeof categoryQuery !== "string") {
      return;
    }

    const categoryQueryList = categoryQuery.split(",");

    if (categoryQueryList.find((item) => item === uid)) {
      const category = categoryQueryList.filter((item) => item !== uid);

      if (category.length === 0) {
        return {
          ...router.query,
        };
      }

      return {
        ...router.query,
        category: category.join(","),
      };
    }

    categoryQueryList.push(uid);

    return {
      ...router.query,
      category: categoryQueryList.join(","),
    };
  };

  const checkChecked = (uid: string): boolean => {
    const categoryQuery = router.query.category || "";
    if (typeof categoryQuery !== "string") {
      return false;
    }
    const categories = categoryQuery.split(",");

    if (categories.find((item) => item === uid)) {
      return true;
    }

    return false;
  };

  const filtersList: IFilterGroupItem[] = items.map((item) => ({
    query: {
      ...getPriceCatalog(item.id),
      show: 1,
    },
    checked: checkChecked(item.id),
    label: item[`name_${lang}`],
  }));

  return (
    <FilterGroup uid="category-filter" items={filtersList} />
  );
};

FilterCategories.defaultProps = {
  items: [],
};

export default FilterCategories;
