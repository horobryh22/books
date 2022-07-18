import React, { KeyboardEvent } from 'react';

import { Search } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';

import { InputType } from './types';

import { ReturnComponentType } from 'types';

export const Input: React.FC<InputType> = React.forwardRef(
    ({ onSubmit, ...field }, ref): ReturnComponentType => {
        const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>): void => {
            if (e.key !== 'Enter') {
                return;
            }
            onSubmit();
        };

        const handleClick = (): void => onSubmit();

        return (
            <FormControl variant="standard">
                <OutlinedInput
                    id="input-with-icon-textfield"
                    ref={ref}
                    {...field}
                    onKeyPress={handleKeyPress}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton color="primary" onClick={handleClick}>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    },
);

Input.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
