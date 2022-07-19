import { InternalStandardProps as StandardProps } from '@mui/material';
import { InputBaseProps } from '@mui/material/InputBase';

import { Nullable } from 'types';

export type InputType = StandardProps<InputBaseProps> & {
    onSubmit: () => void;
    error: Nullable<boolean>;
};
