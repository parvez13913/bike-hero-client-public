import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';
// import useUser from '../../hooks/UseUser';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [users] = useUser(user);
    return (
        <div>
            <div className='row w-100'>
                <div className='col-lg-4 shadow-lg'>
                    <ul>

                        <li className='dashboard-li'>
                            <Link className='text-decoration-none text-black' to='/dashboard'>My Profile</Link>
                        </li>

                        {
                            users && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/myOrder'>My Order</Link>
                            </li>
                        }
                        {
                            users && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/review'>Add Review</Link>
                            </li>
                        }
                        {
                            admin && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/makeadmin'>Make Admin</Link>
                            </li>
                        }
                        {
                            admin && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/addproduct'>Add Product</Link>
                            </li>
                        }
                        {
                            admin && <li className='dashboard-li'>
                                <Link className='text-decoration-none text-black' to='/dashboard/manageproduct'>Manage Products</Link>
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