import styles from "./FilterItem.module.scss";
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

interface IFilterItemProps {
  name: string;
  items: IFilterItem[];
}

const FilterItem = ({ items, name }: IFilterItemProps) => {
  const router = useRouter();
  const {
    i18n: { language },
  } = useTranslation();
  const lang = getLangFromLocale(language);

  const getQuery = (uid: string) => {
    const query = router.query[name] || "";

    if (typeof query !== "string") {
      return;
    }

    const queryList = query.split(",");

    if (queryList.find((item) => item === uid)) {
      const queries = { ...router.query }
      const list = queryList.filter((item) => item !== uid);

      if (list.length === 0) {
        delete queries[name];
        return queries;
      }

      return {
        ...queries,
        [name]: list.filter(item => item).join(","),
      };
    }

    queryList.push(uid);

    return {
      ...router.query,
      [name]: queryList.filter(item => item).join(","),
    };
  };

  const checkChecked = (uid: string): boolean => {
    const query = router.query[name] || "";
    if (typeof query !== "string") {
      return false;
    }
    const queries = query.split(",");

    if (queries.find((item) => item === uid)) {
      return true;
    }

    return false;
  };

  const filtersList: IFilterGroupItem[] = items.map((item) => ({
    query: {
      ...getQuery(item.id),
      show: 1,
    },
    checked: checkChecked(item.id),
    label: item[`name_${lang}`],
  }));

  return <FilterGroup uid={`${name}-filter`} items={filtersList} />;
};

FilterItem.defaultProps = {
  items: [],
};

export default FilterItem;
