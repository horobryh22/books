import React, { KeyboardEvent } from 'react';

import { Search } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { InputType } from './types';

import { ReturnComponentType } from 'types';

const INPUT_STYLES = { outline: 'none', boxShadow: '0', border: '2px solid red' };

export const Input: React.FC<InputType> = React.forwardRef(
    ({ error, onSubmit, ...field }, ref): ReturnComponentType => {
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
                    style={error ? INPUT_STYLES : {}}
                    onKeyPress={handleKeyPress}
                    endAdornment={
                        <InputAdornment position="end">
                            <NavLink to="/">
                                <IconButton
                                    color={`${error ? 'error' : 'primary'}`}
                                    onClick={handleClick}
                                >
                                    <Search />
                                </IconButton>
                            </NavLink>
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    },
);

Input.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
};
