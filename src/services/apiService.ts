import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://conduit.productionready.io/api";
const BASE_LIMIT = 10;

export type apiServiceOptionsType = {
  limit?: number;
  offset?: number;
  tag?: string;
  [key: string]: string | number | undefined;
};

type doFetchType = (
  options?: apiServiceOptionsType,
  data?: {
    method?: "post" | "get";
  } & Object
) => Promise<AxiosResponse>;

const doFetch = async (url: string, data: Object = {}) => {
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

  return await axios(url, data);
};

const updateUrl = (
  path: string,
  urlExtends?: apiServiceOptionsType
): string => {
  if (!urlExtends) {
    return BASE_URL + path;
  }

  const pathParts = Object.keys(urlExtends).map(
    (key) => `${key}=${urlExtends[key]}`
  );

  return BASE_URL + path + `?${pathParts.join("&")}`;
};

class ApiService {
  getTag: doFetchType = async () => {
    const path = "/tags";
    return await doFetch(updateUrl(path));
  };

  getArticles: doFetchType = async (options) => {
    const path = "/articles";
    return await doFetch(updateUrl(path, options));
  };

  getArticle: doFetchType = async (options, slug) => {
    const path = "/articles/" + slug;
    return await doFetch(updateUrl(path, options));
  };

  getFeed: doFetchType = async (options) => {
    const path = "/articles/feed";
    return await doFetch(updateUrl(path, options));
  };

  getUser: doFetchType = async (options, data = {}) => {
    return await doFetch(updateUrl("/user"), data);
  };

  signIn: doFetchType = async (options, data = {}) => {
    data.method = "post";
    return await doFetch(updateUrl("/users/login"), data);
  };

  signUp: doFetchType = async (options, data = {}) => {
    data.method = "post";
    return await doFetch(updateUrl("/users"), data);
  };

  helperBaseLimit = () => BASE_LIMIT;

  helperLimitOffset = (page: number = 1, limit = BASE_LIMIT) => {
    return {
      limit,
      offset: (page - 1) * limit,
    };
  };
}

export default new ApiService();
