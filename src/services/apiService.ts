import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://conduit.productionready.io/api";
const BASE_LIMIT = 10;

type optionsType = {
  limit?: number;
  offset?: number;
  tag?: string;
  [key: string]: string | number | undefined;
};

type doFetchType = (
  options?: optionsType,
  data?: Object
) => Promise<AxiosResponse>;

const doFetch = async (url: string, data: Object = {}) => {
  let token = localStorage.getItem("token");

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

const updateUrl = (path: string, urlExtends?: optionsType): string => {
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
    let path = "/tags";
    return await doFetch(updateUrl(path));
  };

  getFeed: doFetchType = async (options) => {
    let path = "/articles";
    return await doFetch(updateUrl(path, options));
  };

  getUser: doFetchType = async (options, data) => {
    return await doFetch(updateUrl("/user"), data);
  };
}

export const getLimitOffset = (page: number = 1, limit = BASE_LIMIT) => {
  return {
    limit,
    offset: (page - 1) * limit,
  };
};

export default new ApiService();
