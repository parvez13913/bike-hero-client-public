import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { photoURL, displayName, email } = user;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post(`https://cryptic-retreat-88156.herokuapp.com/userinfo`, data).then(res => {
            if (res.statusText) {
                toast.success('Update Your Profile');
                reset();
            }
        })
    }

    return (
        <div>
            <h1 className='text-center my-3 text-color'>My Profile</h1>
            <div className='mb-5 text-center'>
                <p>Profile Photo</p>
                <img src={photoURL} alt="" />
                <h4>{displayName}</h4>
                <h6>Email : {email}</h6>

                <div className='w-50 mx-auto container mx-auto bg-light my-5 p-3 rounded shadow-lg purchase-container bg-dark'>
                    <h4 className='text-color'>Update Your Profile Info</h4>
                    <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='my-2 py-2'
                            placeholder='Where was You reding'
                            type='text'
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Education is Required',
                                },

                            })} />
                        {errors.education?.type === 'required' && <p className='text-danger'>{errors.education?.message}</p>}
                        <input
                            className='my-2 py-2'
                            placeholder='Your Location'
                            type='text'
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is Required',
                                },

                            })} />
                        {errors.location?.type === 'required' && <p className='text-danger'>{errors.location?.message}</p>}

                        <input className='my-2 py-2' placeholder='Your Phone Number' type="number" {...register("phoneNumber", {
                            required: {
                                value: true,
                                message: 'Phon Number is Required',
                            }
                        })} />
                        <input className='my-2 py-2' placeholder='Your Linkedin' type="text" {...register("linkedIn", {
                            required: {
                                value: true,
                                message: 'LinkedIn is Required',
                            }
                        })} />
                        {errors.linkedIn?.type === 'required' && <p className='text-danger'>{errors.linkedIn?.message}</p>}

                        <input className='submit-Button h4 mt-3 rounded py-2' value='Update Info' type='submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;