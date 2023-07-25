import React from 'react';
import {auth} from '../firebase';
import Navbar from './Navbar';
import {useHistory} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Styles
import styles from "./Chats.module.css"

//context
import {AuthContext} from '../context/AuthContextProvider';
import { useContext } from 'react';

const Chats = () => {

    const history = useHistory();
    const [loading, setLoading]= useState(true);
    const user= useContext(AuthContext);


    const logOutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }
    useEffect(()=> {
        if(!user) {
            history.push('/');
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers : {
                "project-id" : "33934de2-e760-4f7e-9f24-c01c58a65e49",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then(()=> {
            setLoading(false);  
        })

        .catch(()=> {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email );
            formdata.append("secret", user.uid);

        })



    },[user, history])

    const getFile = async (url) => {
        const response = await fetch(url);



if (!user || loading) return "loading ...";

    return (
        <div className={styles.container}>
            <Navbar logOutHandler={logOutHandler} />
            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="33934de2-e760-4f7e-9f24-c01c58a65e49"
                userName="."
                userSecret="."
            
            />
        </div>
    );
};

export default Chats;