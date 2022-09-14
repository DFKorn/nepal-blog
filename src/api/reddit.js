const API_Root = 'https://www.reddit.com'

// https://www.reddit.com/r/EarthPorn/search.json?q=nepal&restrict_sr=1&sr_nsfw=

export const getSubredditPosts = async (subreddit = 'EarthPorn') => {
    try {
      const response = await fetch(`${API_Root}/r/${subreddit}/search.json?q=nepal&restrict_sr=1&sr_nsfw=`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const jsonResponse = await response.json();
      return jsonResponse.data.children.map((post) => post.data)
    }
    catch(error){
      console.log(error)
    }
  }