// import { useRouter } from "next/router";
import posts from "../../post.json";
const Page = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  );
};
Page.getInitialProps = function({ query }) {
  return {
    post: posts[query.slug]
  };
};
export default Page;
