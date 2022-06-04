import getLangFromLocale from '@/utils/getLangFromLocale';
import { IProduct } from './../../types/index.d';

const transformProducts = (products: IProduct[], locale: string) => {
  if (!products) {
    return [];
  }

  return products.map(product => {
    const lang = getLangFromLocale(locale);

    if (!lang) {
      return product;
    }

    const result = {
      ...product,
      title: product[`title_${lang}`],
      description: product[`description_${lang}`]
    }

    return result;
  });
}

export default transformProducts;
