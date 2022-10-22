export type authorType = {
  username: string;
  image: string;
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
