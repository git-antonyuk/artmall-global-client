import styles from "./LayoutDefault.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";
import Layout, { Content } from "antd/lib/layout/layout";

interface ILayoutDefaultProps {
  children: ReactNode | ReactNode[];
}

const LayoutDefault = ({ children }: ILayoutDefaultProps) => {
  return (
    <Layout>
      <Header />
      <Layout className={styles.content}>
        <Content>{children}</Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default LayoutDefault;
