import React from 'react';
import SinglePost from './SinglePost';

export default function PostCard({ post }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>
                <p className="card-text">{ post.content }</p>
                <form action={SinglePost}>
                    <button type="submit">More Options</button>
                </form>
                
            </div>
        </div>
    )
}