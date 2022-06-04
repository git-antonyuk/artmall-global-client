import styles from "./CatalogFilters.module.scss";
import { Drawer, Spin } from "antd";
import { useEffect, useState } from "react";
import FilterSwitch from "./FilterSwitch/FilterSwitch";
import { useTranslation } from "next-i18next";
import FilterPrice from "./FilterPrice/FilterPrice";
import { useRouter } from "next/router";
import useCatalogFilters from "hooks/useCatalogFilters";

interface ICatalogFiltersProps {
  total: number;
}
const CatalogFilters = ({ total }: ICatalogFiltersProps) => {
  const router = useRouter();
  const { t } = useTranslation("catalog");
  const { loading, fetch: fetchFilters } = useCatalogFilters();
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

  useEffect(() => {
    if (opened) {
      fetchFilters();
    }
  }, [opened, fetchFilters]);

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
        <Spin spinning={loading}>
          <h5 className={styles.total}>
            {t("foundProducts")} {total}
          </h5>
          <FilterPrice />
        </Spin>
      </Drawer>
    </>
  );
};

export default CatalogFilters;
