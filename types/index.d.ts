export interface IGetStaticProps {
  locale: string
}

export interface DefaultProps {
  className?: string
}

export type TContentType = "products";

export interface ICollectionQueryParams {
  removedByUser_ne?: boolean,
  _start?: number,
  _limit?: number,
  _sort?: string
}

export interface IMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string | null;
  url: string;
}
export interface IMediaItem {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: {
    thumbnail: IMediaFormat;
    large: IMediaFormat;
    medium: IMediaFormat;
    small: IMediaFormat;
  };
  provider: string;
  related: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
export interface ICategory {
  _id: string;
  name_uk: string;
  name_en: string;
  name_ru: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: IMediaItem;
  id: string;
}

export interface IStyle {
  _id: string;
  name_uk: string;
  name_en: string;
  name_ru: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IUser {
  confirmed: boolean;
  blocked: boolean;
  _id: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
export interface IProduct {
  price: number;
  height: number;
  width: number;
  removedByUser: boolean;
  nude: boolean;
  rating: number;
  media: IMediaItem[];
  _id: string;
  sold: boolean;
  description_en: string;
  description_uk: string;
  title_en: string;
  title_uk: string;
  title?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  category: ICategory;
  style: IStyle;
  subject: string;
  subjects: string[];
  id: string;
  user: IUser;
}

export interface IApiError {
  message: string
}

type TCollectionSort = "rating:DESC"
export interface ICollectionQueryParams {
  removedByUser_ne: boolean,
  _start: number,
  _limit: number,
  _sort: TCollectionSort,
  _where?: any[]
}
