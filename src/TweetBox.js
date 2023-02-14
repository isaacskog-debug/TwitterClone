import './TweetBox.css'
import {Avatar, Button} from '@mui/material';
import React, {useState} from 'react'
import db from './firebase'

export default function TweetBox() {
  //Skapa två state som spår vad en användare skriver
  const [tweetMessage, setTweetMessage]=useState('');
  // För att spåra bilden
  const [tweetImage, setTweetImage]=useState('');

  // Eftersom vi är inne i en form så kommer den refresha siden per auto.
  //e.preventDefualt-> för att förhindra refreshning av sidan, react gillar inte det
  const sendTweet= e=>{
    //Detta förhindra att sidan refresha 
    e.preventDefault();
    //Såhär postar vi till databasen 
    //vi adda ett objekt 
    //Här mappar vi in i objektet
    db.collection('posts').add({
      displayName: 'IsaacSkog',
      username: 'IsaacSkog',
      variefied: true,
      //Här skriver vi att meddelande ska bli det som vi skriver i tweeten o inte hårdkodning
      text: tweetMessage,
      image:tweetImage,
      avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
    });
    //Här resetar vi fältet för rensa dem 
    setTweetMessage('');
    setTweetImage('');
  };
  return (
    <div className='tweetBox'>
        <form>
            {/* Enter funktion */}
            <div className='tweetBox__input'>
                <Avatar src= "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
                {/* Mappar vi meddelanet */}
                <input 
                // Fixa en map -> e=> när ändras event när sätts meddelandet och ta värde när vi skriver
                onChange={e=>setTweetMessage(e.target.value)}
                value={tweetMessage} placeholder="Vad som händer nu"  type='text'/>
            </div>
                <input 
                value={tweetImage}
                onChange={e=>setTweetImage(e.target.value)}
                className='tweetBox__imageInput' placeholder="Altenativ: Lägg till bild"  type='text'/> 
                {/* Skapar en knapp då när vi klickar på den så kommer skickas en tweet */}
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}
