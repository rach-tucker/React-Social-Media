import React, { useState, useEffect } from 'react'
import PostCard from './PostCard';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])

    return (
        <>
            <h1 className="text-center mt-4 mb-4">Welcome to the Social Network</h1>
            {posts.map( post => <PostCard key={post.id} post={post} />)}
        </>
    )
}