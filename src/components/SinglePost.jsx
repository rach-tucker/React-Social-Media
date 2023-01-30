import { useState, useEffect } from 'react';
import PostCard from './PostCard';

export default function SinglePost(props){

    const [post, setPost] = useState([]);
    const [postid, setPostid] = useState('');

    console.log(props.Apostid);
    function updateSinglePost(postid){
        setPostid(postid);
    };

    useEffect(() => {
        fetch(`https://responsible-knowledgeable-restaurant.glitch.me/blog/posts/${postid}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                console.log(data)
                }
            );
    }, [postid]);

    console.log(post);

    return(
        <>
        <h1>Here is the post:</h1>
        <PostCard key={post.id} post={post} />
        </>
    );
}