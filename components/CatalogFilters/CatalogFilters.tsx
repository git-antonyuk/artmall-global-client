/* eslint-disable react-hooks/exhaustive-deps */
import cssStyles from "./CatalogFilters.module.scss";
import { Drawer, Spin, Collapse } from "antd";
import { useEffect, useState } from "react";
import FilterSwitch from "./FilterSwitch/FilterSwitch";
import { useTranslation } from "next-i18next";
import FilterPrice from "./FilterPrice/FilterPrice";
import { useRouter } from "next/router";
import useCatalogFilters from "hooks/useCatalogFilters";
import usePageLoader from "hooks/usePageLoader";
import { PATHNAMES } from "@/utils/constants";
import ClearAllFilters from "./ClearAllFilters/ClearAllFilters";
import FilterItem from "./FilterItem/FilterItem";
const { Panel } = Collapse;
interface ICatalogFiltersProps {
  total: number;
}
const CatalogFilters = ({ total }: ICatalogFiltersProps) => {
  const router = useRouter();
  const { t } = useTranslation(["catalog", "filters"]);
  const { loading: loadingOfPage } = usePageLoader();
  const {
    loading,
    fetch: fetchFilters,
    categories,
    styles,
    // subjects,
    techniques,
  } = useCatalogFilters();
  const [opened, setOpened] = useState<boolean>(router.query.show === "1");

  const removeShowQuery = () => {
    const list = { ...router.query };
    delete list.show;
    router.push({
      pathname: PATHNAMES.catalog,
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
  }, [opened]);

  const header = (
    <header className={cssStyles.header}>
      <span>{t("filters", { ns: "catalog" })}</span>
      <h5 className={cssStyles.title}>
        {t("foundProducts", { ns: "catalog" })} {total}
      </h5>
    </header>
  );

  return (
    <>
      <FilterSwitch opened={opened} onChange={onChange} />
      <Drawer
        title={header}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={opened}
        key="filters-menu"
        footer={<ClearAllFilters />}
      >
        <Spin spinning={loading || loadingOfPage}>
          <Collapse defaultActiveKey={["0", "1", "2", "3", "4"]}>
            <Panel header={t("price", { ns: "catalog" })} key="0">
              <FilterPrice />
            </Panel>
            <Panel header={t("categories", { ns: "filters" })} key="1">
              <FilterItem name="category" items={categories} />
            </Panel>

            <Panel header={t("styles", { ns: "filters" })} key="2">
              <FilterItem name="style" items={styles} />
            </Panel>

            {/* !!!TODO Fix styles multiple variant on backend.  */}
            {/* <Panel header={t("subjects", { ns: "catalog" })} key="3">
              <FilterItem name="subject" items={subjects} />
            </Panel> */}

            <Panel header={t("technique", { ns: "filters" })} key="4">
              <FilterItem name="technique" items={techniques} />
            </Panel>
          </Collapse>
        </Spin>
      </Drawer>
    </>
  );
};

export default CatalogFilters;
