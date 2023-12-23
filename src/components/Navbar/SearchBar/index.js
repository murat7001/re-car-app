import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import { searchCars } from '@/store/CarSlice/carSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';





export default function SearchBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(searchCars(search));
    }, [search]);

    return (
        <Search sx={{display:{xs:'none', md:'flex'}}}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Search>

    );
}