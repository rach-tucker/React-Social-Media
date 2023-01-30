import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to view this page', 'danger');
            navigate('/login');
        }
    })

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(event);

        let title = event.target.title.value;
        let content = event.target.content.value;

        let token = localStorage.getItem('token');

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Authorization', `Bearer ${token}`);

        let requestBody = JSON.stringify({title, content})

        let response = await fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts", {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        })

        if (response.ok){
            let data = await response.json();
            props.flashMessage(`${data.title} has been created`, 'primary');
            navigate('/')
        } else {
            props.flashMessage("There was an issue, please try again", 'warning');
        }
    }

    return (
        <>
            <h3 className="text-center mt-4">Create A New Post</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                    <input type="text" className="form-control my-3" placeholder='Enter Title of Post' name='title'/>
                    <input type="text" className="form-control my-3" placeholder='Enter Content of Post' name='content'/>

                    <input type="submit" value="Create Post" className="btn btn-secondary w-100" />
                </div>
            </form>
        </>
    )
}