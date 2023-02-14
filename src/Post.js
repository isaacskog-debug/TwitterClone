import React, {forwardRef} from 'react'
import './Post.css'
import {Avatar} from '@mui/material';
import VarifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import  RepeatIcon  from '@mui/icons-material/Repeat';
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  PublishIcon  from '@mui/icons-material/Publish';

//här slänger vi in flip react move ->forwardRef för att ge smothie animation
const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) =>{
  return (
    // displayName
    // username
    // verified
    // text
    // image/gif
    // avatar
    //lägger vi här med ref
    <div className='post' ref={ref}>
        <div className='post__avatar'>
            {/* Läggs in avatar */}
            <Avatar src={avatar}/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {/* displayname */}
                        {displayName}{" "}
                        <span className='post__headerSpecial'>
                            {/* slänger vi en vilkor som säger om det är verfied så visa annars inte ->{verified && */}
                            {verified && <VarifiedUserIcon className="post__badge"/>}@{username}
                        </span>
                    </h3>
                </div>
            <div className='post__headerDescription'>
                {/* texten */}
                <p>{text}</p>
            </div>
            </div>
            {/* slänger vi här image */}
        <img src={image} alt=''/>
        <div className='post__footer'>
            {/* Används material Icon */}
            <ChatBubbleOutlineIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>
        </div>
    </div>
    </div>
  )
});

export default Post;

