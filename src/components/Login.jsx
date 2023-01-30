import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {

    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        let stringToEncode = `${username}:${password}`

        var myHeaders = new Headers();
        myHeaders.append('Authorization', `Basic ${btoa(stringToEncode)}`);

        let response = await fetch("https://responsible-knowledgeable-restaurant.glitch.me/auth/token", {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        })

        if (response.ok){
            console.log("SUCCESS");
            let data = await response.json();
            let token = data.token;
            let expiration = data.token_expiration;

            localStorage.setItem('token', token);
            localStorage.setItem('tokenExp', expiration);

            props.flashMessage('You have successfully logged in', 'success');
            props.logUserIn();
            navigate('/');
        } else {
            props.flashMessage('Your username and/or password are incorrect', 'danger');
        }

    }

    return (
        <>
            <h3 className="text-center mt-4">Login</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                    <input type="text" className="form-control my-3 mt-" placeholder='Enter Username' name='username' />
                    <input type="password" className="form-control my-3" placeholder='Enter Password' name='password' />

                    <input type="submit" value="Log In" className="btn btn-secondary w-100" />
                </div>
            </form>
        </>
    )
}
