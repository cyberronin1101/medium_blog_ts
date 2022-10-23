import { Link } from "react-router-dom";

const TagList = ({
  tagList,
  asLink = false,
}: {
  tagList: string[];
  asLink?: boolean;
}) => {
  return (
    <ul className={"tag-list"}>
      {tagList.map((tag) => (
        <li key={tag} className={"tag-default tag-pill tag-outline"}>
          {asLink ? <Link to={`/tags/${tag}`}>{tag}</Link> : tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
