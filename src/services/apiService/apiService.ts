import axios from "axios";
import {
  apiArticleResponseType,
  apiArticlesResponseType,
  apiEditArticleType,
  apiTagsResponseType,
  apiUserResponseType,
  apiUserSignInType,
  apiUserSignUpType,
  fetcherType,
  getType,
  getTypeRequire,
  postType,
} from "./apiServiceTypes";

const BASE_URL = "https://conduit.productionready.io/api";
const BASE_LIMIT = 10;

const addToken = (data = {}) => {
  const token = localStorage.getItem("token");

  if (token && data) {
    data = {
      ...data,
      ...{
        headers: {
          authorization: `Token ${token}`,
        },
      },
    };
  }

  return data;
};

const joinParams = (path: string, options?: string): string => {
  return !options ? path + "?" + options : path;
};

const fetcher: fetcherType = (url, data = {}) => {
  return axios(BASE_URL + url, addToken(data));
};

class ApiService {
  static getTag: getType<apiTagsResponseType> = () => {
    return fetcher("/tags");
  };

  static getUser: getType<apiUserResponseType> = () => {
    return fetcher("/user");
  };

  static getArticles: getType<apiArticlesResponseType> = (params) => {
    return fetcher(joinParams("/articles", params));
  };

  static getArticle: getTypeRequire<apiArticleResponseType, string> = (
    slug: string
  ) => {
    return fetcher("/articles/" + slug);
  };

  static createArticle: postType<apiArticleResponseType, apiEditArticleType> = (
    data
  ) => {
    data.method = "post";
    return fetcher("/articles", data);
  };

  static getFeedArticles: getType<apiArticlesResponseType> = (params) => {
    return fetcher(joinParams("/articles/feed", params));
  };

  static signIn: postType<apiUserResponseType, apiUserSignInType> = async (
    data
  ) => {
    data.method = "post";
    return await fetcher("/users/login", data);
  };

  static signUp: postType<apiUserResponseType, apiUserSignUpType> = async (
    data
  ) => {
    data.method = "post";
    return await fetcher("/users", data);
  };

  static helperLimitOffset = (page: number = 1, limit = BASE_LIMIT) => {
    return {
      limit,
      offset: (page - 1) * limit,
    };
  };

  static helperObjToParams = (
    object: { [key: string]: true | string | number } = {}
  ): string => {
    const pathParts = Object.keys(object).map((key) => {
      return object[key] === true ? key : key + "=" + object[key];
    });

    return "?" + pathParts.join("&");
  };

  static helperBaseLimit = () => BASE_LIMIT;
}

export default ApiService;
