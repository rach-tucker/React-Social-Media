import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AlertMessage from "./components/AlertMessage";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import SinglePost from "./components/SinglePost"


function App(props){  
    const [myName, setMyName] = useState('');

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const now = new Date();
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now));

    console.log(localStorage.getItem('token'));   
    console.log(new Date(localStorage.getItem('tokenExp')));

    function updateUserInfo(username){
        setMyName(username);
    };

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    }

    function logUserIn(){
        setLoggedIn(true);
    }

    function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage("You have logged out", "primary");
    }

    return (
        <>
            <Navbar name={myName} updateUser={updateUserInfo} loggedIn={loggedIn} logUserOut={logUserOut} />
            <div className="container">
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<Signup flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
                    <Route path='/create' element={<CreatePost loggedIn={loggedIn} flashMessage={flashMessage} />} />
                    <Route path='/singlepost' element={<SinglePost loggedIn={loggedIn} flashMessage={flashMessage} />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
