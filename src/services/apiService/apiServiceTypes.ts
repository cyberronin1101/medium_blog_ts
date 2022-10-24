import { AxiosRequestConfig, AxiosResponse } from "axios";

export type apiUserSignInType = {
  user: {
    email: string;
    password: string;
  };
};

export type apiUserSignUpType = {
  user: {
    username: string;
    email: string;
    password: string;
  };
};

export type apiUserType = {
  bio?: string;
  email: string;
  image: string;
  token?: string;
  username: string;
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

export type optionsType = {
  limit?: number;
  offset?: number;
  [key: string]: string | number | undefined;
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

export type postType<respType, dataType> = (
  data: AxiosRequestConfig<dataType>
) => Promise<AxiosResponse<respType>>;

export type fetcherType = <respType>(
  url: string,
  data?: AxiosRequestConfig
) => Promise<AxiosResponse<respType>>;
