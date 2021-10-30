import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { googleSignIn, setIsLoading } = UseFirebase()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            }).finally(() => setIsLoading())
    }
    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='p-5 shadow w-25 mx-auto text-center mt-5'>
                <h2 className='fw-bold'>
                    Login or Register</h2>
                <button onClick={() => handleGoogleSign()} className='primary-bg-color shadow btn my-5'>Login/Register With Google</button>
            </div>
        </div>
    );
};

export default Login;