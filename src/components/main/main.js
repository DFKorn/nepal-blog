import "./main.css";
import React, { useEffect, useState } from "react";
import { getSubredditPosts } from "../../api/reddit";

const Main = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    alert("Requested data from server...");
    (async () => {
      const subredditPosts = await getSubredditPosts();
      setPosts(subredditPosts);
    })();
    console.log("render");
  }, []);

  // console.log(posts)

  return <>{!posts ? <h2>Loading...</h2> : <h2>{posts[0].title}</h2>}</>;
};

export default Main;
