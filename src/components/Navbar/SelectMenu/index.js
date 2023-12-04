import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setSelectedCategory } from '../../../store/CategoriesSlice/categoriesSlice';

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

function getStyles(category, categoryName, theme) {
    return {
        fontWeight:
            categoryName.indexOf(category) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SelectMenu() {
    const { cars } = useSelector((state) => state.cars);
    const dispatch = useDispatch()
    const { list: categories, selectedCategory } = useSelector((state) => state.categories);
    const theme = useTheme();

    useEffect(() => {
        const uniqueBrands = [...new Set(cars.map(car => car.brand))];
        const brandObjects = uniqueBrands.map(brand => ({ name: brand }));
        dispatch(setCategories(brandObjects));
    }, [cars, dispatch]);

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
                            key={category.name}
                            value={category.name}
                            style={getStyles(category.name, selectedCategory, theme)}
                        >
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
