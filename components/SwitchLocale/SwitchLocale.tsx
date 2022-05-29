import styles from "./SwitchLocale.module.scss";
import Dropdown from "antd/lib/dropdown";
import Menu from "antd/lib/menu";
import { LANGUAGES } from "../../utils/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";

const LIST = [
  {
    label: "UA",
    key: LANGUAGES.ukrainianCode,
  },
  {
    label: "EN",
    key: LANGUAGES.englishBritishCode,
  },
];

const SwitchLocale = () => {
  const { locale, route } = useRouter();

  const menu = (
    <Menu
      items={LIST.map((item) => ({
        label: (
          <Link href={route} locale={item.key}>
            {item.label}
          </Link>
        ),
        key: item.key,
      }))}
    />
  );

  const getCurrentLocaleLabel = () =>
    LIST.find((item) => locale === item.key)?.label || "";

  return (
    <Dropdown overlay={menu} placement="bottom">
      <Button>{getCurrentLocaleLabel()} <DownOutlined /></Button>
    </Dropdown>
  );
};

export default SwitchLocale;
