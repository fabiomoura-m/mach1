import { useEffect, useState } from 'react';
import getUsers from '../../services/user.service';
import UserDetails from './UserDetails';
import UserStatistics from './userStatistics';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const userResp = await getUsers(userId);
            setUser(userResp);
        };
        fetchUser();
    }, [userId]);

    return (
        <div>
            <h1>User Profile</h1>
            <UserDetails user={user} />
            <UserStatistics user={user} />
        </div>
    );
};

export default UserProfile;
