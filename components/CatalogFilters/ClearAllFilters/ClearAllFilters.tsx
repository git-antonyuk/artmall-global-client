import styles from "./ClearAllFilters.module.scss";
import { PATHNAMES } from "@/utils/constants";
import { Button } from "antd";
import Link from "next/link";

const ClearAllFilters = () => {
  return (
    <Button className={styles.clear}>
      <Link
        href={{
          pathname: PATHNAMES.catalog,
        }}
      >
        <a>Clear All</a>
      </Link>
    </Button>
  );
};

export default ClearAllFilters;
