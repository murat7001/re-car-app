import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

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

const categories = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(category, categoryName, theme) {
    return {
        fontWeight:
        categoryName.indexOf(category) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SelectMenu() {
    const theme = useTheme();
    const [categoryName, setCategoryName] = useState([]);

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
                    multiple
                    value={categoryName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Categories" />}
                    MenuProps={MenuProps}
                >
                    {categories.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                            style={getStyles(category, categoryName, theme)}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}