"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import React, { useState } from "react";
import NavBar from "@/components/Navbar";
import { Button } from "@mui/material";
import Camera from "@/components/WebcamComponent";
import CreateOptions from "@/components/CreateOptions";

export default function Create() {
    const { user, error, isLoading } = useUser();

    const [camera, setCamera] = useState(false);

    const [photoOptions, setPhotoOptions] = useState({
        title: "Untitled",
        cut: 4,
        layout: "Vertical",
        timer: "3s"
    });

    const updatePhotoOptions = (key: keyof typeof photoOptions, value: string | number) => {
        setPhotoOptions(prev => ({ ...prev, [key]: value }));
    };

    if (isLoading) return <Loading />;
    if (error) return <Error error_message={error.message} />;

    return (
        <main className="flex flex-col items-center justify-center text-center h-screen">
            <NavBar />
            {!camera && <CreateOptions
                setCamera={setCamera}
                photoOptions={photoOptions}
                updatePhotoOptions={updatePhotoOptions}
            />}
            {camera && <Camera />}
        </main>
    );
}
