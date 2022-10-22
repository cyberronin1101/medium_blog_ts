import TopBanner from "../../components/header/TopBanner";
import FeedToggler from "../../components/feed/feedToggler";
import PopularTagsContainer from "../../components/tags/popularTagsContainer";
import { useParams } from "react-router-dom";
import FeedListContainer from "../../components/feed/feedListContainer";

const TagFeedPage = (): JSX.Element => {
  let { tag, page } = useParams();

  return (
    <div className={"home-page"}>
      <TopBanner
        title={
          <>
            <i className={"ion-pound"}></i> {tag}
          </>
        }
      />

      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-9"} style={{ minWidth: 0 }}>
            <FeedToggler tagName={tag} />
            <FeedListContainer tag={tag} page={page} />
          </div>

          <div className={"col-md-3"}>
            <PopularTagsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagFeedPage;
