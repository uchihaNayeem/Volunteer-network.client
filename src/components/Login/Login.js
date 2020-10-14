import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config'

const Login = () => {

 
  const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    
   

      const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }




  return (
    <div>
       <div>
                
            </div>

            <div className=" text-center">

                <h1>Login with</h1>
                <br />
                <button onClick={handleGoogleSignIn}>
                     Continue with Google</button>
                <br />
                <br />
                <p>Don't have an account? <a href="/">Create an account</a></p>
            </div>
    </div>
  );
};

export default Login;