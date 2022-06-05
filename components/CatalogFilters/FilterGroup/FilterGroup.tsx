import styles from "./FilterGroup.module.scss";
import Link from "next/link";
import FilterItemWrapper from "@/components/common/FilterItemWrapper/FilterItemWrapper";
import { PATHNAMES } from "@/utils/constants";

export interface IFilterGroupItem {
  query: { [key: string]: string | number };
  checked: boolean;
  label: string | null;
}

interface IFilterGroupProps {
  uid?: string;
  items: IFilterGroupItem[];
}

const FilterGroup = ({ uid, items }: IFilterGroupProps) => {
  return (
    <>
      {items.map((item: IFilterGroupItem, i: number) => (
        <Link
          key={`${uid}__${i}`}
          href={{
            pathname: PATHNAMES.catalog,
            query: item.query,
          }}
        >
          <a>
            <FilterItemWrapper checked={item.checked} label={item.label} />
          </a>
        </Link>
      ))}
    </>
  );
};

FilterGroup.defaultProps = {
  items: [],
};

export default FilterGroup;
