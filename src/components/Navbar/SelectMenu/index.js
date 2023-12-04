import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setSelectedCategory } from '../../../store/CategoriesSlice/categoriesSlice';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(category, selectedCategory, theme) {
    return {
        fontWeight:
            selectedCategory === category
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
    };
}

export default function SelectMenu() {
    const dispatch = useDispatch();
    const { categories, selectedCategory, loadingCategories, error } = useSelector((state) => state.categories);
    const theme = useTheme();

    useEffect(() => {
            dispatch(fetchCategories());
    }, [ dispatch ]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        dispatch(setSelectedCategory(value));
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-categories-label">Categories</InputLabel>
                <Select
                    labelId="demo-multiple-categories-label"
                    id="demo-multiple-categories"
                    multiple={false}
                    value={selectedCategory}
                    onChange={handleChange}
                    input={<OutlinedInput label="Categories" />}
                    MenuProps={MenuProps}
                >
                    {categories.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                            style={getStyles(category, selectedCategory, theme)}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
