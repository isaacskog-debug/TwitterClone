import React from 'react'
import './Widgets.css';
import {TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed} from "react-twitter-embed";
import  SearchIcon  from '@mui/icons-material/Search';


export default function Widgets() {
  return (
    <div className='widgets'>
    <div className='widgets__input'>
      <SearchIcon className="widgets__searchIcon"/>
      <input placeholder='Search Twitter' type="text"/>
    </div>
    <div className='widgets__widgetContainer'>
      <h2>Vad som pågår i världen!</h2>

      <TwitterTweetEmbed tweetId={"1622971221938958337"} />

      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="SpaceX"
      options={{height:400}}
      />
      <TwitterShareButton
      url={"https://twitter.com/snafu_ftw/status/1623631969962676225"}
      options={{ text: "#StandWithUkraine!", via: "snafu_ftw"}}
      />
    </div>
    </div>
  )
}
