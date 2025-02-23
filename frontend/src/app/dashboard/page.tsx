"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { BottomNavigation } from "@mui/material";
import Button from '@mui/material/Button';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import ArchiveIcon from '@mui/icons-material/Archive';
import { blue, grey } from "@mui/material/colors";
import NavBar from "@/components/Navbar";
import { link } from "fs";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PhotoStrip from "@/components/PhotoStrip";
import PhotoStripGrid from "@/components/PhotoStripGrid";

interface PhotoStripProps {
    id: number;
    title: string;
    date_created: string;
    photos: string[];
}

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

    // list of photobooth strips
    const strips = [
        {
            id: 1,
            title: "Strip 1",
            date_created: "2021-10-01",
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
        },
        {
            id: 2,
            title: "Strip 2",
            date_created: "2021-10-01",
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
        },
        {
            id: 3,
            title: "Strip 3",
            date_created: "2021-10-01",
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
        },
        {
            id: 4,
            title: "Strip 4",
            date_created: "2021-10-01",
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
        },
    ];

    if (isLoading) return <Loading />;
    if (error) return <Error error_message={error.message} />;
    if (strips.length === 0) return (
        <main className="flex flex-col items-center justify-center h-screen">
            <NavBar />

            <Error error_message="No strips found" />
        </main>
    );

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <NavBar />

            <h1 className="pb-20 text-3xl font-semibold">{user?.given_name}'s PhotoStrips</h1>

            <PhotoStripGrid strips={strips} />                

        </main>
    );
}
