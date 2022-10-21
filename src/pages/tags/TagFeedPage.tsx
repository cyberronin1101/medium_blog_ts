import TopBanner from "../../components/header/TopBanner";
import FeedToggler from "../../components/feed/feedToggler";
import FeedListContainer from "../../components/feed/feedListContainer";

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
          </div>

          <FeedListContainer tag={tagName} />

          <div className={"col-md-3"}>Popular tags</div>
        </div>
      </div>
    </div>
  );
};

export default TagFeedPage;
