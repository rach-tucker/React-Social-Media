import React from 'react';
import { Link } from 'react-router-dom'
//import SinglePost from './SinglePost';

export default function PostCard({ post }) {
    return (
        <div className="card p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>
                <p className="card-text">{ post.content }</p>
                <Link className ='btn btn-secondary' to='/singlepost'>More Options</Link>   
            </div>
        </div>
    )
}

