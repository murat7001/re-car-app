import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const ProtectedAdmin = () => {
    const router = useRouter()
    let { loggedIn, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user?.role !== 'admin') {
            router.push('/');
        }
    }, [user, router]);
    return (
        <Box sx={{ flexGrow: 1, width: '30%', margin: 'auto', position: 'sticky', top: 0, zIndex: 1000 }}>
            <AppBar position="static" sx={{ borderRadius: '0px 0px 10px 10px', background: 'white', color: 'black' }}>
                <Toolbar>
                    <Button onClick={() => { router.push('/Admin') }}>Home</Button>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button onClick={() => { router.push('/Admin/Cars') }}>Cars</Button>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button onClick={() => { router.push('/Admin/Reservations') }}>Reserv</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default ProtectedAdmin