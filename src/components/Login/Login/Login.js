import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleLogo from '../../../images/google-logo.png';
import { UserContext } from '../../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setLoggedInUser(signedInUser);
                history.replace(from);
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <section className='container-fluid row'>
            <div className="col-md-5">
            <Link class="nav-link ms-3" to='/'><span><h2 className="text-secondary">Dev Trix</h2></span></Link>

            </div>
            <div className="col-md-6 justify-content-center my-5 py-5">
                <h2 className="text-secondary align-items-center mx-5 mb-4">Login With</h2>
                <a class="btn btn-lg btn-google btn-block btn-outline-secondary"  onClick={handleGoogleSignIn}>
                    <img src={googleLogo}/> Continue With Google</a>
            </div>
            <div class="row">
                <div class="col-md-12"> 
                 </div>
            </div>
            
        </section>
            );
};

export default Login;