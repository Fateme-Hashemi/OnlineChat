import React from 'react';
import styles from "./Login.module.css";
import google from "../assets/google.svg";
import firebase from 'firebase';
import {auth} from "./firebase";

const Login = () => {
    return (
        <div className={styles.loginPage}>
           <div className={styles.loginCard}>
                <h2> Welcome to BotoGram!</h2>


            <div className={styles.button}
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                 <img src={google} alt='google' /> sign in with google
            </div>
            </div>

          
        </div>
    );
};

export default Login;