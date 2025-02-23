import '../app/globals.css';
import Grid from '@mui/material/Grid2';
import PhotoStrip from './PhotoStrip';
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';
import { redirect } from 'next/navigation';

interface PhotoStripGridProps {
    strips: {
        id: number;
        title: string;
        date_created: string;
        photos: string[];
    }[];
}

export default function PhotoStripGrid({strips}: PhotoStripGridProps) {

    function handlePhotoStripClick(id: number) {
        redirect(`/edit/${id}`);
    }
    // loading component with loading thing in the middle
    return (
        <div className="justify-center">
            <Grid sx={{ justifyContent: "center" }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                {strips.map((strip) => (
                    <Grid onClick={() => handlePhotoStripClick(strip.id)} key={strip.id} size={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
                        <PhotoStrip id={strip.id} title={strip.title} date_created={strip.date_created} photos={strip.photos} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}