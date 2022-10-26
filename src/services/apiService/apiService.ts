import axios from "axios";
import {
  apiArticleResponseType,
  apiArticlesResponseType,
  apiEditArticleType,
  apiTagsResponseType,
  apiUserResponseType,
  apiUserSignInType,
  apiUserSignUpType,
  apiUserType,
  deleteType,
  fetcherType,
  getType,
  getTypeRequire,
  postType,
  putType,
  putTypeBySlug,
  togglerFavoriteType,
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
  static getTag: getType<apiTagsResponseType> = () => fetcher("/tags");

  static getUser: getType<apiUserResponseType> = () => fetcher("/user");

  static getArticles: getType<apiArticlesResponseType> = (params) =>
    fetcher(joinParams("/articles", params));

  static getArticle: getTypeRequire<apiArticleResponseType> = (slug) =>
    fetcher("/articles/" + slug);

  static createArticle: postType<apiArticleResponseType, apiEditArticleType> = (
    article
  ) =>
    fetcher("/articles", {
      method: "post",
      data: { article },
    });

  static editArticle: putTypeBySlug<
    apiArticleResponseType,
    apiEditArticleType
  > = (article, slug) =>
    fetcher("/articles/" + slug, {
      method: "put",
      data: { article },
    });

  static articleToggleFavorite: togglerFavoriteType<apiArticleResponseType> = (
    slug,
    isFavorite
  ) =>
    fetcher("/articles/" + slug + "/favorite", {
      method: isFavorite ? "delete" : "post",
    });

  static deleteArticle: deleteType = (slug) =>
    fetcher("/articles/" + slug, {
      method: "delete",
    });

  static getFeedArticles: getType<apiArticlesResponseType> = (params) =>
    fetcher(joinParams("/articles/feed", params));

  static signIn: postType<apiUserResponseType, apiUserSignInType> = (user) =>
    fetcher("/users/login", {
      method: "post",
      data: { user },
    });

  static signUp: postType<apiUserResponseType, apiUserSignUpType> = (user) =>
    fetcher("/users", {
      method: "post",
      data: { user },
    });

  static userSave: putType<apiUserResponseType, apiUserType> = (user) =>
    fetcher("/user", {
      method: "put",
      data: { user },
    });

  // HELPERS

  static helperLimitOffset = (page: number = 1, limit = BASE_LIMIT) => ({
    limit,
    offset: (page - 1) * limit,
  });

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
