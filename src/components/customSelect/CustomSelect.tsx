import React, { useMemo } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';

import { CustomSelectType } from './types';

import { ReturnComponentType } from 'types';

export const CustomSelect: React.FC<CustomSelectType> = React.forwardRef(
    ({ items, name, ...field }, ref): ReturnComponentType => {
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
                    ref={ref}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    {...field}
                >
                    {mappedItems}
                </Select>
            </FormControl>
        );
    },
);

CustomSelect.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};
