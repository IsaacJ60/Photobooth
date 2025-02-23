import { Button, ButtonGroup } from '@mui/material';
import '../app/globals.css';
import Alert from '@mui/material/Alert';

interface ErrorProps {
    error_message: string;
}

export default function Error({ error_message }: ErrorProps) {
  // loading component with loading thing in the middle
    return (
        <div className='flex items-center justify-center h-screen'>
            <Alert severity="error">{error_message}</Alert>
        </div>
        );
}