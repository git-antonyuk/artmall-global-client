import styles from "./CatalogFilters.module.scss";
import { Drawer } from "antd";
import { useState } from "react";
import FilterSwitch from "./FilterSwitch/FilterSwitch";
import { useTranslation } from "next-i18next";
import FilterPrice from "./FilterPrice/FilterPrice";
import { useRouter } from "next/router";

interface ICatalogFiltersProps {
  total: number
}
const CatalogFilters = ({ total }: ICatalogFiltersProps) => {
  const router = useRouter();
  const { t } = useTranslation("catalog");
  const [opened, setOpened] = useState<boolean>(router.query.show === "1");

  const removeShowQuery = () => {
    const list = { ...router.query };
    delete list.show;
    router.push({
      pathname: "/catalog",
      query: list,
    });
  };

  const onChange = (value: boolean) => {
    setOpened(value);
    if (!value) {
      removeShowQuery();
    }
  };

  const onClose = () => {
    setOpened(false);
    removeShowQuery();
  };

  return (
    <>
      <FilterSwitch opened={opened} onChange={onChange} />
      <Drawer
        title={t("filters")}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={opened}
        key="filters-menu"
      >
        <div>
          total found: {total}
        </div>
        <FilterPrice />
      </Drawer>
    </>
  );
};

export default CatalogFilters;
