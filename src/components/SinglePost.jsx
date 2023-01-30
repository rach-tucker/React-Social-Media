import { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostCard from './PostCard';

export default function SinglePost(props){

    const [post, setPost] = useState([]);
    const [postid, setPostid] = useState('');

    function updateSinglePost(postid){
        setPostid(postid);
    };

    console.log(postid);
    console.log(props);

    useEffect(() => {
        fetch(`https://responsible-knowledgeable-restaurant.glitch.me/blog/posts/${postid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const postinfo = data;
                setPost(postinfo);
                }
            );
    }, [postid]);

    console.log(post);

    return(
        <>
        <h1>Find a post:</h1>
        <PostForm updateSinglePost={updateSinglePost} key={postid} post={post} />
        <PostCard post={ post }/>
        </>
    );
}