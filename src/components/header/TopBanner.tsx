import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentTitleContext } from "../../context/titleContext";

const TopBanner = (): JSX.Element => {
  const [{ title, description, meta }] = useContext(CurrentTitleContext);

  useEffect(() => {});

  return (
    <div className={"banner"}>
      <div className={"container"}>
        <h1
          style={{
            maxHeight: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h1>
        {meta && meta.user && (
          <div className={"article-meta"}>
            <Link to={`/profiles/${meta.user.username}`}>
              <img src={meta.user.image} alt={meta.user.username} />
            </Link>
            <div className={"info"}>
              <Link to={`/profiles/${meta.user.username}`}>
                {meta.user.username}
              </Link>
              {meta.date && <span className={"date"}>{meta.date}</span>}
            </div>
          </div>
        )}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default TopBanner;
