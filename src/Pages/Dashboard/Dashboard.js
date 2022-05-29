import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className='row w-100'>
                <div className='col-lg-4 shadow-lg'>
                    <ul>
                        <li className='dashboard-li'>
                            <Link className='text-decoration-none text-black' to='/dashboard'>My Order</Link>
                        </li>
                        <li className='dashboard-li'>
                            <Link className='text-decoration-none text-black' to='/dashboard/myprofile'>My Profile</Link>
                        </li>
                        <li className='dashboard-li'>
                            <Link className='text-decoration-none text-black' to='/dashboard/review'>Add A Review</Link>
                        </li>
                        {
                            admin && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/makeadmin'>Make Admin</Link>
                            </li>
                        }
                        {
                            admin && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/addproduct'>Add A Product</Link>
                            </li>
                        }
                    </ul>
                </div>
                <div className='col-lg-8'>
                    <h1 className='mt-5 text-color'>Dashboard</h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;