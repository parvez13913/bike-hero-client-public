import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data).then(res => {
            if (res.statusText) {
                toast.success('Thank For The Feedback');
                reset();
            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-color my-3'>Add Review</h1>
            <div className='w-50 mx-auto container mx-auto bg-light my-5 p-3 rounded shadow-lg purchase-container bg-dark'>
                <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='my-2 py-2'
                        defaultValue={user?.displayName}
                        readOnly
                        type='text'
                        {...register("name")} />
                    <input
                        className='my-2 py-2'
                        defaultValue={user?.photoURL}
                        readOnly
                        type='text'
                        {...register("photoUrl")} />
                    <input
                        className='my-2 py-2'
                        defaultValue={user?.email}
                        readOnly
                        type='text'
                        {...register("email")} />

                    <textarea className='my-2 py-2' placeholder='write a Feedback' type="text"
                        {...register("fidback", {
                            required: {
                                value: true,
                                message: 'Feedback is Required',
                            },
                        })}
                    ></textarea>
                    {errors.fidback?.type === 'required' && <p className='text-danger'>{errors.fidback?.message}</p>}
                    <input
                        className='my-2 py-2'
                        type='number'
                        placeholder='Rattings'
                        {...register("ratting", {
                            required: {
                                value: true,
                                message: 'Ratting is Required',
                            },
                            min: {
                                value: 1,
                                message: "Rattings cannot be less than 1"
                            },
                            max: {
                                value: 5,
                                message: "Ratings cannot be larger than 5"
                            }
                        })} />
                    {errors.ratting?.type === 'required' && <p className='text-danger'>{errors.ratting?.message}</p>}
                    {errors.ratting?.type === 'min' && <p className='text-danger'>{errors.ratting?.message}</p>}
                    {errors.ratting?.type === 'max' && <p className='text-danger'>{errors.ratting?.message}</p>}
                    <input className='submit-Button h4 mt-3 rounded py-2' value='Give Feedback' type='submit' />
                </form>
            </div>
        </div >
    );
};

export default AddReview;