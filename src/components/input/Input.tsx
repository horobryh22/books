import React, { KeyboardEvent, useCallback } from 'react';

import { Search } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { InputType } from './types';

import { ReturnComponentType } from 'types';

const INPUT_STYLES = { outline: 'none', boxShadow: '0', border: '2px solid red' };

export const Input = React.forwardRef(
    ({ error, onSubmit, ...field }: InputType, ref): ReturnComponentType => {
        const handleKeyPress = useCallback((e: KeyboardEvent<HTMLDivElement>): void => {
            if (e.key !== 'Enter') {
                return;
            }
            onSubmit();
        }, []);

        const handleClick = useCallback((): void => onSubmit(), []);

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
