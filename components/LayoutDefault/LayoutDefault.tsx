import styles from "./LayoutDefault.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";
import Layout from "antd/lib/layout/layout";
import MobileMenu from "../Header/MobileMenu/MobileMenu";
import MobileSearch from "../SearchBar/MobileSearch/MobileSearch";
import usePageLoader from "hooks/usePageLoader";

interface ILayoutDefaultProps {
  children: ReactNode | ReactNode[];
}

const LayoutDefault = ({ children }: ILayoutDefaultProps) => {
  const { loading } = usePageLoader();

  const mainContent = loading ? <div>Loading...</div> : <>{children}</>;
  return (
    <Layout>
      <Header />
      <Layout className={styles.content}>
        <MobileMenu />
        <main className="container">
          <MobileSearch />
          {mainContent}
        </main>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default LayoutDefault;
