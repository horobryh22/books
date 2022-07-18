import { SelectProps } from '@mui/material/Select/Select';

import { SelectItem } from 'components/header/types';

export type CustomSelectType = SelectProps & {
    name: string;
    items: SelectItem[];
};
