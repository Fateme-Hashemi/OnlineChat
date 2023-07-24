import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { Children } from 'react';


const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

   const [loading, setLoading] = useState(true); 
   const [user, setUser] = useState(false);
   const history = useHistory();

   useEffect(()=> {
    auth.onAuthStateChanged(user => {
        setUser(user);
        setLoading(false);
      if(user) history.push('/chat');
    })
   }, [user, history] )

    return (
       <AuthContextProvider value={user}>
        {!loading && children}
       </AuthContextProvider>
    );
};

export default AuthContextProvider;