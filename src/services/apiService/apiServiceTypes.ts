import { AxiosRequestConfig, AxiosResponse } from "axios";

export type apiErrorType = {
  code?: string;
  response?: AxiosResponse<apiBackendErrorsTypeData>;
  message: string;
};

export type apiBackendErrorsTypeData = {
  errors: apiBackendErrorsType;
};
export type apiBackendErrorsType = {
  [key: string]: string[];
};

export type apiUserSignInType = {
  email: string;
  password: string;
};

export type apiUserSignUpType = {
  username: string;
  email: string;
  password: string;
};

export type apiUserType = {
  bio?: string;
  email: string;
  image: string;
  token?: string;
  username: string;
  password?: string;
};

export type apiAuthorType = {
  username: string;
  image: string;
};

export type apiEditArticleType = {
  body: string;
  title: string;
  description: string;
  tagList: string[];
};

export type apiArticleType = {
  author: apiAuthorType;
  body: string;
  title: string;
  description: string;
  slug: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
};

export type apiUserResponseType = {
  user: apiUserType;
};
export type apiArticleResponseType = {
  article: apiArticleType;
};

export type apiArticlesResponseType = {
  articles: apiArticleType[];
  articlesCount: number;
};

export type apiTagType = string;

export type apiTagsResponseType = {
  tags: apiTagType[];
};

export type getTypeRequire<respType, options = string> = (
  options: options
) => Promise<AxiosResponse<respType>>;

export type getType<respType, options = string> = (
  options?: options
) => Promise<AxiosResponse<respType>>;

export type putType<respType, dataType> = (
  item: dataType
) => Promise<AxiosResponse<respType>>;

export type putTypeBySlug<respType, dataType, options = string> = (
  item: dataType,
  options: options
) => Promise<AxiosResponse<respType>>;

export type deleteType<respType = "", options = string> = (
  options: options
) => Promise<AxiosResponse<respType>>;

export type togglerFavoriteType<respType, slug = string> = (
  slug: slug,
  isFavorite: boolean
) => Promise<AxiosResponse<respType>>;

export type postType<respType, dataType> = (
  item: dataType
) => Promise<AxiosResponse<respType>>;

export type fetcherType = <respType>(
  url: string,
  data?: AxiosRequestConfig
) => Promise<AxiosResponse<respType>>;
