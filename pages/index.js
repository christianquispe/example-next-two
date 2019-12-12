// Hola
import posts from "../post.json";
import Link from "next/link";
export default () => (
  <div>
    {Object.entries(posts).map((value, index) => {
      return (
        <li key={index}>
          <Link href="post/[slug]" as={`post/${value[0]}`}>
            <a>{value[1].title}</a>
          </Link>
        </li>
      );
    })}
    <h1>This is my home page</h1>
  </div>
);
