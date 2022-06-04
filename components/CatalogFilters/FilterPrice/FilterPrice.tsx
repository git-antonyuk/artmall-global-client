import { FILTER_PRICE_MAP } from "@/utils/constants";
import styles from "./FilterPrice.module.scss";
import Menu from "antd/lib/menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { DownOutlined } from "@ant-design/icons";

const FilterPrice = () => {
  const { t } = useTranslation("catalog");
  const router = useRouter();

  const getLabel = (item: (number | undefined)[]): string => {
    return (item[0] || "0") + "$ - " + (item[1] || "n") + "$";
  };

  const menu = (
    <Menu
      items={FILTER_PRICE_MAP.map(
        (item: (number | undefined)[], i: number) => ({
          label: (
            <Link
              href={{
                pathname: "/catalog",
                query: {
                  ...router.query,
                  price: i,
                  show: 1
                },
              }}
            >
              <a>{getLabel(item)}</a>
            </Link>
          ),
          key: i,
        })
      ).filter((item) => item.key !== Number(router.query.price))}
    />
  );

  return (
    <>
      <b>{t("price")}</b>
      <Dropdown overlay={menu} placement="bottom">
        <Button>
          {getLabel(FILTER_PRICE_MAP[Number(router.query.price) || 0])}
          <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default FilterPrice;
