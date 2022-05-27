import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import loginImage from '../../../images/login.png';
import Loading from '../../Shared/Loading/Loading';
import Social from '../../Shared/Social/Social';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.text, photoURL: data.photUrl });
    };

    if (loading) {
        <Loading></Loading>
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
                <h1 className='text-center'>Register</h1>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='my-2 p-2'
                    type='text'
                    placeholder='Your Name'
                    {...register("text", {
                        required: {
                            value: true,
                            message: 'Name is Required',
                        }
                    })} />
                {errors.text?.type === 'required' && <p className='text-danger'>{errors.text?.message}</p>}
                <input
                    className='my-2 p-2'
                    type='photUrl'
                    placeholder='Photo Url'
                    {...register("photUrl", {
                        required: {
                            value: true,
                            message: 'Phot Url is Required',
                        }
                    })} />
                {errors.photUrl?.type === 'required' && <p className='text-danger'>{errors.photUrl?.message}</p>}

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
                <input className='my-2 p-2 rounded border-0  submit-button fw-bold' value="Register" type="submit" />
                {errorElement}
                <Social></Social>
            </form>

            <p className='my-3 text-center'> Already Have an Account?? <Link to='/login' className='text-danger text-decoration-none h6'>Please Login</Link></p>
        </div>
    );
};

export default Register;