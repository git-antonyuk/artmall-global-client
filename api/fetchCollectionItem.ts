import { config } from "../config";
import qs from "qs";
import { ICollectionQueryParams, TContentType } from "types";

const fetchCollectionItem = async (
  contentType: TContentType,
  id: string,
  params?: ICollectionQueryParams
): Promise<any> => {
  const query = qs.stringify(params);
  const queryParams = (query && `?${query}`) || "";
  const url = `${config.apiUrl}/${contentType}/${id}/${queryParams}`;

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

export default fetchCollectionItem;
