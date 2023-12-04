import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from '@/components/Navbar/SearchBar';
import SelectMenu from './SelectMenu';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1, width: '60%', margin: 'auto', position: 'sticky', top: 0, zIndex: 1000 }}>
            <AppBar position="static" sx={{ borderRadius: '0px 0px 10px 10px', background: 'white', color: 'black' }}>
                <Toolbar>
                    <SelectMenu/>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <SearchBar />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
