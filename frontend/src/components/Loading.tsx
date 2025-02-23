import { Button, ButtonGroup } from '@mui/material';
import '../app/globals.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  // loading component with loading thing in the middle
    return (
        <div className='flex items-center justify-center h-screen'>
            <CircularProgress />
        </div>
        );
}