import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import '../app/globals.css';
import { redirect } from 'next/navigation';

interface PhotoStripProps {
    id: number;
    title: string;
    date_created: string;
    photos: string[];
}

const Item = styled(Paper)(({ theme }) => ({
    ":hover": {
        scale: 1.05,
    },
    transition: "all 0.2s",
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const PhotoStrip = (props: PhotoStripProps) => {
    // loading component with loading thing in the middle
    return (
        <Item>
            <div>
                <h2>{props.title}</h2>
                <p>Date Created: {props.date_created}</p>
            </div>
        </Item>

    );
}

export default PhotoStrip;