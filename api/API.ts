import { DEV_API } from "@/utils/constants";
import fetch from 'node-fetch';

type TContentType = 'product' | 'category'

class API {
  private base: string;

  constructor() {
    // console.log('%c 🍮 process.env: ', 'font-size:12px;background-color: #2EAFB0;color:#fff;', process.env);
    this.base = process.env.API_URL || DEV_API;
  }

  async fetchCollection (contentType: TContentType): Promise<any> {
    const url = `${this.base}/${contentType}`


    // console.log('%c 🦐 url: ', 'font-size:12px;background-color: #3F7CFF;color:#fff;', url);
    const options = {
      method: 'GET',
      headers: {}
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  }
}

export default API;
