import "./main.css";
import React, { useEffect, useState } from "react";
import { getSubredditPosts } from "../../api/reddit";
import Post from "../post/post";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    alert("Requested data from server...");
    (async () => {
      const subredditPosts = await getSubredditPosts();
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
