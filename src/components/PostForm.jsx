import React from 'react'

export default function PostForm(props) {

    const handleFindPost = e => {
        e.preventDefault();
        let postid = e.target.postid.value;
        props.updateSinglePost(postid);
        e.target.postid.value = '';
    }

    return (
        <form action="" className="row my-3" onSubmit={handleFindPost}>
            <div className="col-12 col-md-5">
                <input type="text" name="post" placeholder="Enter Post ID" className='form-control'/>
            </div>
            <div className="col">
                <input type="submit" className="btn btn-success w-100" value="Search" />
            </div>
        </form>
    );
}