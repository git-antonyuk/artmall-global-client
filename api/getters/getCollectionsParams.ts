/**
 * Parameters transformer before send them to strapi API
 * Each filter entity is hardcoded.
 */
import {
  CATALOG_PER_PAGE_DEFAULT_LIMIT,
  FILTER_PRICE_MAP,
} from "@/utils/constants";
import { ICollectionQueryParams, IGeneralQueryParams } from "types";

interface IGetCollectionsParams {
  price?: string;
  limit?: string;
  page?: string;
  category?: string;
  style?: string;
  subject?: string;
  technique?: string;
}

interface IGetCollectionsResult {
  generalOptions: IGeneralQueryParams;
  collectionOptions: ICollectionQueryParams;
}

const getCollectionsParams = ({
  page,
  limit,
  price,
  category,
  style,
  subject,
  technique
}: IGetCollectionsParams): IGetCollectionsResult => {
  const generalOptions: IGeneralQueryParams = {
    removedByUser_ne: true,
    _where: []
  };

  const getListOfIds = (items: string) => items.split(",").filter((item) => item);

  if (category) {
    generalOptions._where.push({ "category.id": getListOfIds(category) });
  }

  if (style) {
    generalOptions._where.push({ "style.id": getListOfIds(style) });
  }

  if (subject) {
    // subjects is bug on backend, have to fixed to same approach as in all another relations. Like: subject.id
    // TODO fix it
    
    getListOfIds(subject).forEach(id => {
      generalOptions._where.push({ "subjects.id": id });
    })
  }

  if (technique) {
    generalOptions._where.push({ "technique.id": getListOfIds(technique) });
  }

  if (price) {
    generalOptions._where.push(
      { price_gte: FILTER_PRICE_MAP[Number(price)][0] || 1 },
      { price_lte: FILTER_PRICE_MAP[Number(price)][1] || 999999999 }
    );
  }

  const currentPage = Number(page) - 1 || 0;
  const currentLimit = Number(limit) || CATALOG_PER_PAGE_DEFAULT_LIMIT;

  const collectionOptions: ICollectionQueryParams = {
    _start: currentPage * currentLimit,
    _limit: currentLimit,
    _sort: "rating:DESC",
    ...generalOptions,
  };

  return {
    generalOptions,
    collectionOptions,
  };
};

export default getCollectionsParams;
