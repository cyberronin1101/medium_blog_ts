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

export type feedType = {
  author: authorType;
  body: string;
  title: string;
  description: string;
  slug: string;
  tagList: string[];
  createdAt: string;
};

export type respFeedType = {
  articles: feedType[];
  articlesCount: number;
};
