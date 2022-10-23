export type backendErrorsType = {
  errors: { [key: string]: string[] };
};

export type authorType = {
  username: string;
  image: string;
};

export type userType = {
  bio?: string;
  email: string;
  image: string;
  token?: string;
  username: string;
};

export type articleType = {
  author: authorType;
  body: string;
  title: string;
  description: string;
  slug: string;
  tagList: string[];
  createdAt: string;
};

export type articleTypeEdit = {
  body?: string;
  title?: string;
  description?: string;
  tagList?: string[];
};

export type respFeedType = {
  articles: articleType[];
  articlesCount: number;
};
