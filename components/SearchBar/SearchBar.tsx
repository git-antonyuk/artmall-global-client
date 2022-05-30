import styles from "./SearchBar.module.scss";
import Search from "antd/lib/input/Search";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "next-i18next";

const SearchBar = () => {
  const { t } = useTranslation("search");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearch = async (value: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearchValue(value.target.value);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
  };
  return (
    <div className="search-bar">
      <Search
        placeholder={t("navBar.placeholder")}
        onChange={onSearch}
        style={{ width: 260 }}
        value={searchValue}
        loading={loading}
      />
    </div>
  );
};

export default SearchBar;
