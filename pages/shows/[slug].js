import fetch from "isomorphic-unfetch";
const Shows = props => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
  </div>
);
Shows.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${slug}`);
  const show = await res.json();

  console.log(slug);

  return { show };
};

export default Shows;
