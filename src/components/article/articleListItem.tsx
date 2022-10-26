import { Link, Navigate } from "react-router-dom";
import TagList from "../tags/tagList";
import AddToFavorite from "../favorite/addToFavorite";
import { apiArticleType } from "../../services/apiService/apiServiceTypes";
import { useFetch } from "../../hooks/useFetch";
import ApiService from "../../services/apiService/apiService";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";

const ArticleListItem = (props: { article: apiArticleType }) => {
  const [article, setArticle] = useState(props.article);
  const [redirect, setRedirect] = useState(false);
  const [currentUser] = useContext(CurrentUserContext);

  const [{ response, loading }, articleToggleFavorite] = useFetch(
    ApiService.articleToggleFavorite
  );

  useEffect(() => {
    setArticle(props.article);
  }, [props.article]);

  useEffect(() => {
    if (!response) return;

    setArticle(response.article);
  }, [response, setArticle]);

  const toggleFavorite = () => {
    if (!currentUser.isLoggedIn) {
      setRedirect(true);
      return;
    }
    articleToggleFavorite(article.slug, article.favorited);
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

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
        <div className={"pull-xs-right"}>
          <AddToFavorite
            {...{
              isFavorite: article.favorited,
              favoriteCount: article.favoritesCount,
              isLoading: loading,
              favoriteToggler: toggleFavorite,
            }}
          />
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

export default ArticleListItem;
