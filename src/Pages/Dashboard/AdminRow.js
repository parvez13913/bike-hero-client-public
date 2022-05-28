import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast('Successfully Add Admin');
                }
                console.log(data);
            })
    }
    return (
        <tr>
            <th scope="row">1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className='border-0 rounded py-2 bg-dark text-white' onClick={makeAdmin}>Make Admin</button>}</td>
            <td>@mdo</td>
        </tr>
    );
};

export default AdminRow;