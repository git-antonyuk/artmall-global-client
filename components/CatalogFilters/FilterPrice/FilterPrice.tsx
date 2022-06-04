import { FILTER_PRICE_MAP } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Collapse } from "antd";
import FilterItemWrapper from "@/components/common/FilterItemWrapper/FilterItemWrapper";

const { Panel } = Collapse;

const FilterPrice = () => {
  const { t } = useTranslation("catalog");
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

  return (
    <>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header={t("price")} key="1">
          {FILTER_PRICE_MAP.map((item: (number | undefined)[], i: number) => (
            <div key={i}>
              <Link
                href={{
                  pathname: "/catalog",
                  query: {
                    ...getPriceQuery(i),
                    show: 1,
                  },
                }}
              >
                <a>
                  <FilterItemWrapper
                    checked={Number(router.query.price) === i}
                    label={getLabel(item)}
                  />
                </a>
              </Link>
            </div>
          ))}
        </Panel>
      </Collapse>
    </>
  );
};

export default FilterPrice;
