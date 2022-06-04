import styles from "./LayoutDefault.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";
import Layout from "antd/lib/layout/layout";
import MobileMenu from "../Header/MobileMenu/MobileMenu";
import MobileSearch from "../SearchBar/MobileSearch/MobileSearch";
import usePageLoader from "hooks/usePageLoader";
import { Spin } from "antd";

interface ILayoutDefaultProps {
  children: ReactNode | ReactNode[];
}

const LayoutDefault = ({ children }: ILayoutDefaultProps) => {
  const { loading } = usePageLoader();

  return (
    <Layout>
      <Header />
      <Layout className={styles.content}>
        <MobileMenu />
        <main className="container">
          <MobileSearch />
          <Spin spinning={loading}>{children}</Spin>
        </main>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default LayoutDefault;
