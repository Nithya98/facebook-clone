/* eslint-disable no-undef */
import React, { useState, useEffect }from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender";
import Post from './Post';
import db from "./firebase"

function Feed() {
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        db.collection('posts')
        .orderBy("timestamp","desc") //orderby descending (i.e) most recent posts comes to the feed first
        .onSnapshot((snapshot)=>
        setPosts(snapshot.docs.map((doc)=>({id: doc.id,data: doc.data()})))
        );  
       }, []) //by keeping this as empty, it only runs the code once when the feed component loads


    return (
        <div className="feed">
            {/*StoryReel*/}
            <StoryReel />
            {/*Message sender*/}
            <MessageSender />
            {
                posts.map((post)=>(
                    <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                    />

                ))
            }
            
            
            
        </div>
    )
}

export default Feed
