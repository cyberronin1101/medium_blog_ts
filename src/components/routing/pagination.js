import { Link } from "react-router-dom";

const PaginationItem = ({ url, idx, current }) => {
  return (
    <li className={"page-item" + (+current === idx ? " active" : "")}>
      <Link to={url + "?page=" + idx} className={"page-link"}>
        {idx}
      </Link>
    </li>
  );
};

const Pagination = ({ total, limit, url, current }) => {
  let totalPages = Math.ceil(total / limit);
  let pages = [...Array(totalPages)].map((i, idx) => idx + 1);

  return (
    <ul className={"pagination"}>
      {pages.map((idx) => (
        <PaginationItem key={idx} {...{ url, idx, current }} />
      ))}
    </ul>
  );
};

export default Pagination;
