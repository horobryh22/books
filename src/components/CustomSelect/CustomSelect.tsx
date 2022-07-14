import React, { memo, useMemo } from 'react';

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';

import { CustomSelectType } from './types';

import { ReturnComponentType } from 'types';

export const CustomSelect = memo(
    ({ name, items }: CustomSelectType): ReturnComponentType => {
        const [age, setAge] = React.useState('10');

        const handleChange = (event: SelectChangeEvent): void => {
            setAge(event.target.value);
        };

        const mappedItems = useMemo(() => {
            return items.map(item => {
                return (
                    <MenuItem key={item.id} value={item.value}>
                        {item.title}
                    </MenuItem>
                );
            });
        }, [items]);

        return (
            <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-filled-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                >
                    {mappedItems}
                </Select>
            </FormControl>
        );
    },
);
