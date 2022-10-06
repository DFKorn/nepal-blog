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
  const [error, setError] = useState(false);
  const [selectedSubredditId, setSelectedSubredditId] = useState('EarthPorn');
  //variable that stores selected subreddit from subreddeits' list(list is imported from reddit.js in api folder)
  const selectedSubreddit = useMemo(() => subredditsList.find(subreddit => subreddit.id === selectedSubredditId),[selectedSubredditId]
  ) 

  // useEffect(() => {
  //   alert("Requested data from server...");
  //   (async () => {
  //     setPostsIsLoading(true);
  //     const subredditPosts = await getSubredditPosts(selectedSubreddit.title);
  //     setPosts(subredditPosts);
  //     setPostsIsLoading(false);
  //   })();
    
  //   console.log("render");
  // }, [selectedSubreddit]);


  useEffect(() => {
    alert("Requested data from server...");
    let unsubscribed = false;
    (async () => {
      try{
        setPostsIsLoading(true);
        const subredditPosts = await getSubredditPosts(selectedSubreddit.title);
        if (!subredditPosts) {
          setError(true)
          throw new Error(`The data is empty`);
        }
        if (!unsubscribed){
          setPosts(subredditPosts);
        }
      }
      catch(error){
        console.log(error)
        setError(true)
      }
      setPostsIsLoading(false);
    })();

    console.log("render");

    return () => {
      console.log('cancelled');
      unsubscribed = true;
    }
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
  if(error){
    return(
      <main>
      <CommunitiyNavigator subreddits={subredditsList} 
                           selectSubreddit={selectSubreddit} 
                           selectedSubreddit={selectedSubreddit}
                           />  
      <div style={{textAlign:'center'}}>
        <h3>404: Whoops</h3>
        <p>Sorry, something went wrong with our blog. Check back later!</p>
      </div>
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
      <div className="more-wrapper">
        <a className="more-link" href={`https://www.reddit.com/r/${selectedSubreddit.title}/search?q=nepal&restrict_sr=1&sr_nsfw=&sort=new`}>View More</a>
      </div>
    </main>
  );
};

export default Main;
