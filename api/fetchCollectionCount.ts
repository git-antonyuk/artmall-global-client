import { TContentType } from "./../types/index.d";
import { config } from "../config";
import qs from "qs";

const fetchCollectionCount = async (
  contentType: TContentType,
  params: { [key: string]: string | boolean }
) => {
  const query = qs.stringify(params);
  const queryParams = (query && `?${query}`) || ''
  const url = `${config.apiUrl}/${contentType}/count${queryParams}`;

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

export default fetchCollectionCount;
