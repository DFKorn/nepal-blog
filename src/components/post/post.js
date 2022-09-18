import React from "react";
import './post.css'
// import Skeleton from 'react-loading-skeleton';
import { FaUserCircle } from "react-icons/fa"
import moment from 'moment';




const Post = (props) => {

    const {post} = props;
    // console.log(post)

    if(!post){
        return (
            <h2>Rendering...</h2>
        )
    }

    const postURL = 'https://www.reddit.com'
    const userURL = 'https://www.reddit.com/user/'

    return (
        <article key={post.id}>
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <a href={`${postURL}${post.permalink}`} className="post-title-link">
                                {post.title}
                            </a>
                        </h3>
                        <div className="post-image-container">
                            <a href={`${postURL}${post.permalink}`} className="post-image-link">
                                <img src={post.url} alt='nepal' className="post-image"></img>
                            </a>
                        </div>
                        <div className="post-details">
                            <span className="post-by">Posted by</span>
                            <div className="author-details">
                                <a href={`${userURL}${post.author}`} className="autor-link">
                                    <FaUserCircle className="user-icon"/>
                                    <span className="author-username">{post.author}</span>
                                </a>
                            </div>
                            <span className="post-time">{moment.unix(post.created_utc).fromNow()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Post