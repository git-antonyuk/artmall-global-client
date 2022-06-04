import { TContentType, ICollectionQueryParams, IProduct } from "./../types/index.d";
import { config } from "../config";
import qs from "qs";

const fetchCollection = async (
  contentType: TContentType,
  params: ICollectionQueryParams
): Promise<IProduct[]> => {
  const query = qs.stringify(params);
  console.log('%c 🥃 query: ', 'font-size:12px;background-color: #F5CE50;color:#fff;', query);
  const queryParams = (query && `?${query}`) || "";
  const url = `${config.apiUrl}/${contentType}${queryParams}`;

  const options = {
    method: "GET",
    headers: {},
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw response;
  }
  const data = await response.json();

  return data;
};

export default fetchCollection;
