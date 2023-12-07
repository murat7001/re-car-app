import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';





export default function DashBoard({ children }) {
    let { loggedIn } = useSelector((state) => state.auth);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ padding: '0 30px', background: 'white', color: 'black' }} position="static">
                <Toolbar >
                    <Link href={'/'}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ display: { sm: 'block' }, color: 'black' }}
                        >
                            M
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'flex' } }}>
                        {!loggedIn ? (
                            <>
                                <Link href={'/Auth/Signin'}>
                                    <Button sx={{ fontSize: '16px', marginRight: '8px', textTransform: 'none' }} variant="outlined" color="success">
                                        Login
                                    </Button>
                                </Link>
                                <Link href={'/Auth/Signup'}>
                                    <Button sx={{ fontSize: '16px', marginRight: '8px', textTransform: 'none' }} variant="contained" color="secondary">
                                        Register
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href={"/Profile"}>
                                    <Button sx={{ fontSize: '16px', marginRight: '8px', textTransform: 'none' }} variant="contained" color="secondary">Profile</Button>
                                </Link>
                            </>
                        )}
                    </Box>

                </Toolbar>
            </AppBar>
            <Box component="main">
                {children}
            </Box>
        </Box>
    );
}
