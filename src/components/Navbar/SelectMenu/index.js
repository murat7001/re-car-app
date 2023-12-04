import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState(categories.length > 0 ? categories[0].name : '');
    const theme = useTheme();


    useEffect(() => {
        const uniqueBrands = [...new Set(cars.map(car => car.brand))];
        const brandObjects = uniqueBrands.map(brand => ({ name: brand }));
        setCategories(brandObjects);
    }, [cars, dispatch]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategoryName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-categories-label">Categories</InputLabel>
                <Select
                    labelId="demo-multiple-categories-label"
                    id="demo-multiple-categories"
                    multiple={false}
                    value={categoryName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Categories" />}
                    MenuProps={MenuProps}
                >
                    {categories.map((category) => (
                        <MenuItem
                            key={category.name}
                            value={category.name}
                            style={getStyles(category.name, categoryName, theme)}
                        >
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
