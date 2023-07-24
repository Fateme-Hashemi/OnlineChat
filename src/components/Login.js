import React from 'react';
import styles from "./Login.module.css";
import google from "../assets/google.svg";


const Login = () => {
    return (
        <div className={styles.loginPage}>
           <div className={styles.loginCard}>
                <h2> Welcome to BotoGram!</h2>
                <div className={styles.button}>
                 <img src={google} alt='google' /> sign in with google
            </div>
            </div>

          
        </div>
    );
};

export default Login;