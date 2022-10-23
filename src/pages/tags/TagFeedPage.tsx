import TopBanner from "../../components/header/TopBanner";
import FeedToggler from "../../components/feed/feedToggler";
import { useParams } from "react-router-dom";
import FeedListContainer from "../../components/feed/feedListContainer";
import Main from "../../components/page/main";

const TagFeedPage = (): JSX.Element => {
  const { tag, page } = useParams();
  const numberPage = (page && +page) || 1;
  const url = `/tags/${tag}`;

  return (
    <div className={"home-page"}>
      <TopBanner
        title={
          <>
            <i className={"ion-pound"}></i> {tag}
          </>
        }
      />

      <Main>
        <FeedToggler tagName={tag} />
        <FeedListContainer tag={tag} page={numberPage} url={url} />
      </Main>
    </div>
  );
};

export default TagFeedPage;
