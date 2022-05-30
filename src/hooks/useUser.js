import { useEffect, useState } from "react"

const useUser = user => {
    const email = user?.email;
    const [users, setUsers] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        fetch(`https://cryptic-retreat-88156.herokuapp.com/user/${email}`, {
            method: 'GEt',
            headers: {
                'content-type': 'application.json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                setUsers(result.users);
                setUserLoading(false);
            })
    }, [user]);

    return [users, userLoading];
}
export default useUser;