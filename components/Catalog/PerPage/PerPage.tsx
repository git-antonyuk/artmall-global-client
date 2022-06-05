import styles from "./PerPage.module.scss";
import { useRouter } from "next/router";
import Menu from "antd/lib/menu";
import Link from "next/link";
import useCatalogPerPage from "hooks/useCatalogPerPage";
import { DownOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { useTranslation } from "next-i18next";
import { PATHNAMES } from "@/utils/constants";

const PerPage = () => {
  const { t } = useTranslation("catalog");
  const router = useRouter();
  const { getCurrentLimit, currentPageSizeOptions } = useCatalogPerPage();

  const menu = (
    <Menu
      items={currentPageSizeOptions()
        .map((limit: number, i) => ({
          label: (
            <Link
              href={{
                pathname: PATHNAMES.catalog,
                query: {
                  ...router.query,
                  limit,
                },
              }}
            >
              <a>{limit}</a>
            </Link>
          ),
          key: limit,
        }))
        .filter((item) => item.key !== getCurrentLimit())}
    />
  );

  return (
    <Dropdown overlay={menu} placement="bottom">
      <Button>
        {getCurrentLimit()} / {t("perPage")}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default PerPage;
