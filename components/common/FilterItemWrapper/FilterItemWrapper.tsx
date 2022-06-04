import { Checkbox } from "antd";
import styles from "./FilterItemWrapper.module.scss";

interface IFilterItemWrapperProps {
  checked: boolean;
  label: string | null;
}

const FilterItemWrapper = ({ label, checked }: IFilterItemWrapperProps) => {
  return (
    <span className={styles.wrapper}>
      <Checkbox checked={checked} className={styles.checkbox} />
      {label}
    </span>
  );
};

export default FilterItemWrapper;
