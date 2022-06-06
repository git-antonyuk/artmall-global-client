import styles from "./ProductsList.module.scss";
import { IProduct } from "types";
import { memo } from "react";
import Masonry from "@/components/Masonry/Masonry";
import { Image } from "antd";
import Ratio from "@/components/Ratio/Ratio";
interface IProductListProps {
  products?: IProduct[];
}

const ProductsList = ({ products }: IProductListProps) => {
  // const getWidth = () => Math.random() * -1 * 320;
  // const getHeight = () => Math.random() * -1 * 400;

  const ChildElement = memo(({ value: product }: { value: IProduct }) => {
    return (
      <li
        className={styles.item}
        style={{
          // background: "blue",
        }}
      >
        {/* <h3>{product.title}</h3> */}
        <Ratio
          ratio={
            product.media[0].formats.medium.width /
            product.media[0].formats.medium.height
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            className={styles.image}
            src={product.media[0].formats.medium.url}
            width={product.media[0].formats.medium.width}
            height={product.media[0].formats.medium.height}
            alt="yo"
          />
        </Ratio>
        {/* <Image
        <Image
          src={product.media[0].formats.medium.url}
          width={product.media[0].formats.medium.width}
          height={product.media[0].formats.medium.height}
          alt="yo"
        /> */}
      </li>
    );
  });

  ChildElement.displayName = "Hello";

  return (
    <div>
      <ul className={styles.grid}>
        {/* {products?.map((product, i) => (
          <li
            className={styles.item}
            key={product.id}
            style={{
              width: "auto",
              height: (i + 3) * 0.5 * 75,
              background: "blue",
            }}
          >
            <h3>{product.title}</h3>
          </li>
        ))} */}
        <Masonry
          dataArray={products}
          columnCount={3}
          ChildElement={ChildElement}
        />
      </ul>
    </div>
  );
};

export default ProductsList;
