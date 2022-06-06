import styles from "./ClearAllFilters.module.scss";
import { PATHNAMES } from "@/utils/constants";
import { Button } from "antd";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ClearAllFilters = () => {
  const { t } = useTranslation("filters");
  return (
    <Button className={styles.clear}>
      <Link
        href={{
          pathname: PATHNAMES.catalog,
        }}
      >
        <a>{t('btnCleatAll')}</a>
      </Link>
    </Button>
  );
};

export default ClearAllFilters;
