import { InternalStandardProps as StandardProps } from '@mui/material';
import { InputBaseProps } from '@mui/material/InputBase';

export type InputType = StandardProps<InputBaseProps> & {
    onSubmit: () => void;
};
