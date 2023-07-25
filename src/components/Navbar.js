import React from 'react';

// Styles
import styles from "./Navbar.module.css";

const Navbar = ({logOutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Botogram
            </div>
            <div className={styles.logout} onClick={logOutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;