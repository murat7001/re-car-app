import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import Link from 'next/link';




export default function DashBoard({ children }) {

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
                        <Button sx={{ fontSize: '16px', marginRight: '8px' }} variant="outlined" color="success">
                            Login
                        </Button>
                        <Button sx={{ fontSize: '16px' }} variant="contained" color="secondary">
                            Signin
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
            <Box component="main">
                {children}
            </Box>
        </Box>
    );
}
