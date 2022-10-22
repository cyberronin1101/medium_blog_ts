import TopBanner from "../../components/header/TopBanner";
import FeedToggler from "../../components/feed/feedToggler";
import FeedListContainer from "../../components/feed/feedListContainer";
import PopularTagsContainer from "../../components/tags/popularTagsContainer";

const TagFeedPage = (): JSX.Element => {
  let tagName = "qui";

  return (
    <div className={"home-page"}>
      <TopBanner
        title={
          <>
            <i className={"ion-pound"}></i> {tagName}
          </>
        }
      />

      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-9"} style={{ minWidth: 0 }}>
            <FeedToggler tagName={tagName} />

            <FeedListContainer tag={tagName} />
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
