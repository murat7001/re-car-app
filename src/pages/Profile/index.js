import { Button, Typography } from 'antd'
import Stack from '@mui/material/Stack';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logOutUser } from '@/store/AuthSlice/authSlice';

const Profile = () => {
    let {  user, loggedIn } = useSelector((state) => state.auth);
    const router = useRouter()
    const dispatch = useDispatch()
    console.log('user', user)

    const handleLogout = () => {
        dispatch(logOutUser());
        router.push('/')
    }


    useEffect(() => {
        if (!loggedIn) {
            router.push('/');
        }
    }, [user, router]);
    return (
        <Stack textAlign={'center'}>
            <Typography fontSize={'20px'}>Profile</Typography>

            <Stack mt={2}>
                Email:
                {user && ' ' + user.email}
            </Stack>

            <Button mt={4} onClick={handleLogout}>Logout</Button>
        </Stack>
    )
}

export default Profile