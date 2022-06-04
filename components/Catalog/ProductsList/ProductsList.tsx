import styles from "./ProductsList.module.scss";
import { IProduct } from "types";
interface IProductListProps {
  products?: IProduct[];
}

const ProductsList = ({ products }: IProductListProps) => {
  return (
    <div className="products-list">
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
