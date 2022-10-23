import { Link } from "react-router-dom";
import TagList from "../tags/tagList";

type authorType = {
  username: string;
  image: string;
};
type feedType = {
  author: authorType;
  body: string;
  title: string;
  description: string;
  slug: string;
  tagList: string[];
  createdAt: string;
};

const FeedListItem = (props: { article: feedType }) => {
  const { article } = props;

  return (
    <div className={"article-preview"}>
      <div className={"article-meta"}>
        <Link to={`/profiles/${article.author.username}`}>
          <img src={article.author.image} alt="" />
        </Link>
        <div className={"info"}>
          <Link
            to={`/profiles/${article.author.username}`}
            className={"author"}
          >
            {article.author.username}
          </Link>
          <span className={"date"}>{article.createdAt}</span>
        </div>
      </div>
      <Link to={`/article/${article.slug}`} className={"preview-link"}>
        <h1
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {article.title}
        </h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <TagList tagList={article.tagList} />
      </Link>
    </div>
  );
};

export default FeedListItem;
