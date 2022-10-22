import FeedToggler from "../components/feed/feedToggler";
import PopularTagsContainer from "../components/tags/popularTagsContainer";
import TopBanner from "../components/header/TopBanner";
import FeedListContainer from "../components/feed/feedListContainer";

const GlobalFeedPage = () => {
  return (
    <div className={"home-page"}>
      <TopBanner title={"Medium clone"} desc={"A place to share knowledge"} />
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-9"} style={{ minWidth: 0 }}>
            <FeedToggler />
            <FeedListContainer />
          </div>
          <div className={"col-md-3"}>
            <PopularTagsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeedPage;
