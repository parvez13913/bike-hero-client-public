import React, { useState } from 'react';
import './LogIn.css';
import loginImage from '../../../images/login.png';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../../Shared/Social/Social';
import { toast } from 'react-toastify';

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/');
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-center text-danger fw-bold my-3'>{error.massage}</p>
    }

    return (
        <div className='container login-container my-5 p-3 shadow-lg rounded'>
            <div>
                <div className='text-center'>
                    <img className='rounded-circle login-photo bg-dark' src={loginImage} alt="LogInImage" />
                </div>
                <h1 className='text-center'>LogIn</h1>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='my-2 p-2'
                    type='email'
                    placeholder='Your Email'
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required',
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Please Provide A Valid Email'
                        }

                    })} />
                {errors.email?.type === 'required' && <p className='text-danger'>{errors.email?.message}</p>}
                {errors.email?.type === 'pattern' && <p className='text-danger'>{errors.email?.message}</p>}

                <input
                    className='my-2 p-2'
                    placeholder='Password'
                    type='password'
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required',
                        },
                        minLength: {
                            value: 6,
                            message: 'Of course, you have to give a password greater than 6 digits'
                        }

                    }
                    )} />
                {errors.password?.type === 'required' && <p className='text-danger'>{errors.password?.message}</p>}

                {errors.password?.type === 'minLength' && <p className='text-danger'>{errors.password?.message}</p>}

                <input className='my-2 p-2 rounded border-0  submit-button fw-bold' value="LogIn" type="submit" />
                {errorElement}
            </form>
            <Social></Social>
            <p className='my-3 text-center'>New to Bick Hero?? <Link to='/register' className='text-danger text-decoration-none h6'>Please Register</Link></p>
        </div>
    );
};

export default LogIn;