import Stack from '@mui/material/Stack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logOutUser } from '@/store/AuthSlice/authSlice';
import { Box, Button, Typography } from '@mui/material';

const Profile = () => {
    const { user, loggedIn } = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOutUser());
        router.push('/');
    };

    useEffect(() => {
        if (!loggedIn) {
            router.push('/');
        }
    }, [loggedIn, router]);

    return (
        <Box mt={10} display="flex" justifyContent="center" alignItems="center">
            <Stack sx={{ background: '#F3F3F3', padding: '30px', borderRadius: '30px' }} width="400px" spacing={4}>
                <Typography variant="h4" textAlign="center">
                    Profile
                </Typography>

                <Stack mt={2} >
                    <Typography>
                        Email: {user && ' ' + user.email}
                    </Typography>
                    <br />
                    <Typography>
                        Username: {user && ' ' + user.id}
                    </Typography>
                    <br />
                    <Typography>
                        Name: {user && ' ' + user.name}
                    </Typography>
                    <br />
                    <Typography>
                        Surname: {user && ' ' + user.surname}
                    </Typography>
                </Stack>

                <Box display={'flex'} justifyContent={'space-around'}>
                    <Button variant={"contained"} onClick={handleLogout}>
                        Logout
                    </Button>
                    <Button variant={"contained"} onClick={() => {router.push(`/Profile/EditProfile/${user.id}`)}}>Edit info</Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default Profile;
