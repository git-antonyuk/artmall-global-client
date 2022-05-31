import { config } from "../config";
type TContentType = "products";

const fetchCollection = async (contentType: TContentType): Promise<any> => {
  const url = `${config.apiUrl}/${contentType}`;

  // console.log('%c 🦐 url: ', 'font-size:12px;background-color: #3F7CFF;color:#fff;', url);
  const options = {
    method: "GET",
    headers: {},
    // dataType: "json",
    // contentType: "application/json; charset=UTF-8",
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw response; 
  }

  console.log('%c 🍾 response: ', 'font-size:12px;background-color: #B03734;color:#fff;', response.ok);
  const data = await response.json();

  return data;
};

export default fetchCollection;
