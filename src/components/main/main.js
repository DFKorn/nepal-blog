import "./main.css";
import React, { useEffect, useState } from "react";
import { getSubredditPosts } from "../../api/reddit";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Post from "../post/post";
import CommunitiyNavigator from "../community-nav/communityNavigator";

const Main = (props) => {
  const {changeSubreddit, subreddit} = props;
  const [posts, setPosts] = useState([]);

  
  

  useEffect(() => {
    alert("Requested data from server...");
    (async () => {
      const subredditPosts = await getSubredditPosts('worldnews');
      setPosts(subredditPosts);
    })();
    console.log("render");
  }, []);

  console.log(posts)
  

  // const getRandomNumber = (min,max) =>{
  //   return Math.floor(Math.random() * max) + min
  // }

  if(!posts){
    return(
      <>
      <Skeleton count={5} height={300} width={'100%'}/>
      </>
    )
  }

  
  return (
    <main>
      <CommunitiyNavigator changeSubreddit={changeSubreddit} subreddit={subreddit}/>
      {posts.map((post)=>(
        <Post 
          key={post.id}
          post = {post}
        />
      ))}
      {/* {!posts ? <h2>Loading...</h2> : <Post post={posts}/>} */}

      {/* {!posts ? <h2>Loading...</h2> : posts.map((post) => {<Post key={post.id}
          post = {post}/>} )}  */}
    </main>
  );
};

export default Main;
