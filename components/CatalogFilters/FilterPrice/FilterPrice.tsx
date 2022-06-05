import { FILTER_PRICE_MAP } from "@/utils/constants";
import { useRouter } from "next/router";
import FilterGroup, { IFilterGroupItem } from "../FilterGroup/FilterGroup";

const FilterPrice = () => {
  const router = useRouter();

  const getLabel = (item: (number | undefined)[]): string | null => {
    if (!item) {
      return null;
    }
    return (item[0] || "0") + "$ - " + (item[1] || "n") + "$";
  };

  const getPriceQuery = (index: number) => {
    const queries = { ...router.query };
    delete queries.page;
    if (Number(router.query.price) === index) {
      delete queries.price;
      return {
        ...queries,
      };
    }

    return {
      ...queries,
      price: index,
    };
  };

  const items = FILTER_PRICE_MAP.map(
    (item: (number | undefined)[], i: number): IFilterGroupItem => ({
      query: {
        ...getPriceQuery(i),
        show: 1,
      },
      checked: Number(router.query.price) === i,
      label: getLabel(item),
    })
  );

  return (
    <FilterGroup uid="price-filter" items={items} />
  );
};

export default FilterPrice;
