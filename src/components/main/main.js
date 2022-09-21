import "./main.css";
import React, { useEffect, useMemo, useState } from "react";
import { getSubredditPosts, subredditsList } from "../../api/reddit";
import 'react-loading-skeleton/dist/skeleton.css'
import Post from "../post/post";
import CommunitiyNavigator from "../community-nav/communityNavigator";
import PostLoading from "../post/postLoading";




const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setPostsIsLoading] = useState(false);
  const [selectedSubredditId, setSelectedSubredditId] = useState('EarthPorn');
  //variable that stores selected subreddit from subreddeits' list(list is imported from reddit.js in api folder)
  const selectedSubreddit = useMemo(() => subredditsList.find(subreddit => subreddit.id === selectedSubredditId),[selectedSubredditId]
  ) 

  useEffect(() => {
    alert("Requested data from server...");
    (async () => {
      setPostsIsLoading(true);
      const subredditPosts = await getSubredditPosts(selectedSubreddit.title);
      setPosts(subredditPosts);
      setPostsIsLoading(false);
    })();
    
    console.log("render");
  }, [selectedSubreddit]);

  console.log(posts)
  console.log(selectedSubreddit)

  const selectSubreddit = (id) => {
    setSelectedSubredditId(id)
  }

  

  if(isPostsLoading){
    return(
      <main>
      <CommunitiyNavigator subreddits={subredditsList} 
                           selectSubreddit={selectSubreddit} 
                           selectedSubreddit={selectedSubreddit}
                           />  
      <PostLoading />
      </main>
    )
  }

  
  return (
    <main>
      <CommunitiyNavigator subreddits={subredditsList} 
                           selectSubreddit={selectSubreddit} 
                           selectedSubreddit={selectedSubreddit}
                           />
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
