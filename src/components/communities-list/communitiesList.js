import React from "react";
import './communitiesList.css';



const CommunitiesList = (props) => {
    const {subreddits, selectSubreddit, changeVisibility} = props;

  

    

    return(
        <ul className="communities-list">
            {subreddits.map(subreddit => (
                <li className="community" key={subreddit.id}>
                <button type='button' className="community-button" onClick={()=>{selectSubreddit(subreddit.id); changeVisibility()}}>
                    <span className="community-avatar">
                        <div className="community-icon-wrapper" style={{backgroundColor: subreddit.color}}>
                            {subreddit.iconURL && <img className="community-icon" alt="" src={subreddit.iconURL}></img>}
                        </div>
                    </span>
                    {subreddit.softName}
                </button>
            </li>
            ))}
            {/* <li className="community">
                <button type='button' className="community-button">
                    <span className="community-avatar">
                        <div className="community-icon-wrapper">
                            <img className="community-icon" alt="" src="https://styles.redditmedia.com/t5_2sbq3/styles/communityIcon_pf6xg83rv3981.png?width=256&s=2294e78c41cca8a026b027c60c1aea5877b71edd"></img>
                        </div>
                    </span>
                    Earth
                </button>
            </li>
            <li className="comunity">
                <button type='button' className="community-button">
                    <span className="community-avatar">
                        <div className="community-icon-wrapper">
                            <img className="community-icon" alt="" src="https://styles.redditmedia.com/t5_2sbq3/styles/communityIcon_pf6xg83rv3981.png?width=256&s=2294e78c41cca8a026b027c60c1aea5877b71edd"></img>
                        </div>
                    </span>
                    Title
                </button>
            </li>
            <li className="comunity">
                <button type='button' className="community-button">
                    <img></img>
                    Title
                </button>
            </li>
            <li className="comunity">
                <button type='button' className="community-button">
                    <img></img>
                    Title
                </button>
            </li>
            <li className="comunity">
                <button type='button' className="community-button">
                    <img></img>
                    Title
                </button>
            </li> */}
        </ul>
    )
};

export default CommunitiesList;