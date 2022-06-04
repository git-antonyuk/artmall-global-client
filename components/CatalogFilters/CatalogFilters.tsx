import styles from "./CatalogFilters.module.scss";
import { Switch, Drawer, Input } from "antd";
import { useState } from "react";
import FilterSwitch from "./FilterSwitch/FilterSwitch";
import { useTranslation } from "next-i18next";

const CatalogFilters = () => {
    const { t } = useTranslation("catalog");
  const [opened, setOpened] = useState<boolean>(false);

  const onChange = (value: any) => {
    setOpened(value);
  };

  const onClose = () => {
    setOpened(false);
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
        <>
          <h1>Filters hello world!</h1>
        </>
      </Drawer>
    </>
  );
};

export default CatalogFilters;
