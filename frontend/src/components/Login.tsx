import { Button, ButtonGroup } from '@mui/material';
import '../app/globals.css';

export default async function Login() {
  // If no session, show sign-up and login buttons
    return (
      <main className='flex flex-col items-center justify-center h-screen gap-10'>

        <h1 className='text-5xl font-bold'>Photobooth v1.0</h1>

        <ButtonGroup size='large' orientation='vertical' variant="outlined" aria-label="Basic button group">
        <Button color="primary" href="/auth/login?screen_hint=signup?returnTo=/dashboard">
            Sign up
        </Button>
        <Button color="primary" href="/auth/login?returnTo=/dashboard">
            Log in
        </Button>
        </ButtonGroup>
      </main>
    );
}