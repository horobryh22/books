import React from 'react';

import { Search } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';

import { ReturnComponentType } from 'types';

export const Input = (): ReturnComponentType => {
    return (
        <FormControl variant="standard">
            <OutlinedInput
                id="input-with-icon-textfield"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton color="primary">
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};
