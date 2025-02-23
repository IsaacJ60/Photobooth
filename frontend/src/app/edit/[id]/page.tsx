"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Button from '@mui/material/Button';
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useParams } from "next/navigation";
import NavBar from "@/components/Navbar";

interface PhotoStripProps {
    id: number;
    title: string;
    date_created: string;
    photos: string[];
}

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

export default function StripEditor() {
    const params = useParams();
    const id = parseInt(params.id as string, 10);

    // REPLACE WITH API CALL TO GET STRIP DATA FROM ID
    const strip = strips.find((strip) => strip.id === id);

    if (!strip) {
        return <Error error_message="Strip not found" />;
    }

    const { user, error, isLoading } = useUser();

    if (isLoading) return <Loading />;
    if (error) return <Error error_message={error.message} />;

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <NavBar />
            <h1>Welcome to the Editor, {user?.email}!</h1>
        </main>
    );
}
