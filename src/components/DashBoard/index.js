import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';



export default function PrimarySearchAppBar({ children }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ padding: '0 30px', background: 'white', color: 'black' }} position="static">
                <Toolbar >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>

                        <Button color={'inherit'}>Login</Button>
                        <Button color={'inherit'}>Signin</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box  component="main">
                {children}
            </Box>
        </Box>
    );
}
