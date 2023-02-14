import React, { useState, useEffect } from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'
import db from './firebase';
import FlipMove from 'react-flip-move';

export default function Feed() {
  // använder oss av state så skriver en variavel i react
  //variabelnam -> sen setpost o inilasera det som nåt heter hook
  const [posts, setPosts] = useState([]);
  //fungerar när vi ge vilkor 
  //kör när feed komponent laddas vad som finns i koden o kör inte efter
  useEffect(()=>{
    //våran kollektion 
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => doc.data()))
  );
}, []);
  return (
    <div className='feed'>
        <div className='feed__header'>
        <h2>Home</h2>
        </div>
        <TweetBox/>
        {/* här slår vi in mappen i flip */}
        {/* för att flip ska fungerar vi behöver en key */}
        <FlipMove>
        {posts.map((post)=>(
        <Post 
        // slänger vi key,idf pulling the dokument id från db
        key={post.text}
        displayName={post.displayName}
        username={post.username}
        varified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
        ))}
        </FlipMove>
    </div>
  )
}
