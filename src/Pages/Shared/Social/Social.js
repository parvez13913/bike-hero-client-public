import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import googleLogo from '../../../images/social/google-logo.png';
import Loading from '../Loading/Loading';
import './Social.css';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [token] = useToken(user);

    if (token) {
        navigate('/');
    }

    if (loading) {
        <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-center text-danger fw-bold my-3'>{error?.massage}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 mx-3'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100 my-3 google-btn'>
                    <img src={googleLogo} alt="Google-logo" />
                    <span>Google Login</span>
                </Button>
            </div>
            {errorElement}
        </div>
    );
};

export default Social;