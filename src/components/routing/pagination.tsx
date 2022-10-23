import { Link } from "react-router-dom";
import ApiService from "../../services/apiService";

const PaginationItem = ({
  url,
  idx,
  current,
}: {
  url: string;
  idx: number;
  current: number;
}) => {
  return (
    <li className={"page-item" + (+current === idx ? " active" : "")}>
      <Link to={url + "/" + idx} className={"page-link"}>
        {idx}
      </Link>
    </li>
  );
};

const Pagination = ({
  total,
  limit = ApiService.helperBaseLimit(),
  current,
  url,
}: {
  total: number;
  limit?: number;
  current: number;
  url: string;
}) => {
  const totalPages = Math.ceil(total / limit);
  const pages = [...Array(totalPages)].map((i, idx) => idx + 1);

  return (
    <ul className={"pagination"}>
      {pages.map((idx) => (
        <PaginationItem key={idx} {...{ url, idx, current }} />
      ))}
    </ul>
  );
};

export default Pagination;
