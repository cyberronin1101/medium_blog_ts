import FeedToggler from "../components/feed/feedToggler";
import TopBanner from "../components/header/TopBanner";
import FeedListContainer from "../components/feed/feedListContainer";
import Main from "../components/page/main";

const GlobalFeedPage = () => {
  return (
    <div className={"home-page"}>
      <TopBanner title={"Medium clone"} desc={"A place to share knowledge"} />

      <Main>
        <FeedToggler />
        <FeedListContainer url={"/articles"} />
      </Main>
    </div>
  );
};

export default GlobalFeedPage;
