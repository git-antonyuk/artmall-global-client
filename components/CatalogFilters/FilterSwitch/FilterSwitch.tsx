import styles from "./FilterSwitch.module.scss";
import { useTranslation } from "next-i18next";
import { Switch } from "antd";

interface IFilterSwitchProps {
  opened: boolean;
  onChange: Function;
}

const FilterSwitch = ({
  opened,
  onChange: handleChange,
}: IFilterSwitchProps) => {
  const { t } = useTranslation("catalog");

  const onChange = (v: boolean) => handleChange(v);
  return (
    <>
      <div className={styles["filter-switch"]}>
        <Switch checked={opened} onChange={onChange} />
        <p className={styles.text}>{opened ? t("filtersHide") : t("filtersShow")}</p>
      </div>
    </>
  );
};

export default FilterSwitch;
