import '../app/globals.css';
import { useUser } from "@auth0/nextjs-auth0";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import React, { useState } from "react";
import NavBar from "@/components/Navbar";
import { Button } from "@mui/material";
import Camera from "@/components/WebcamComponent";

interface CreateOptionsProps {
    setCamera: React.Dispatch<React.SetStateAction<boolean>>;
    photoOptions: { title: string; cut: number; layout: string; timer: string };
    updatePhotoOptions: (key: keyof CreateOptionsProps["photoOptions"], value: string | number) => void;
}

const CreateOptions: React.FC<CreateOptionsProps> = ({ setCamera, photoOptions, updatePhotoOptions }) => {
    const { user, error, isLoading } = useUser();

    const handleCreateStrip = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCamera(true);
    }
    // loading component with loading thing in the middle
    return (
        <div>
            <span className="text-5xl font-thin text-blue-500 sm:pl-0 sm:pr-0 pl-20 pr-20 sm:mt-0 mt-36">Welcome to <span className="font-extrabold text-blue-400">Create</span>, {user?.given_name}!</span>

            {/* Custom Tailwind Dropdown */}
            <div className="flex flex-row gap-5 items-center justify-center flex-wrap pl-10 pr-10 mt-10">
                <div>
                    { /* INPUT FOR TITLE */}
                    <label htmlFor="title" className="block text-md font-thin text-blue-700">
                        Enter a name!
                    </label>
                    <input
                        value={photoOptions.title}
                        onChange={(e) => updatePhotoOptions("title", e.target.value)}
                        type="text"
                        id="title"
                        className="mt-2 block w-72 rounded-xl border border-blue-500 bg-white py-2 px-4 text-gray-900 shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="cut-select" className="block text-md font-thin text-blue-700">
                        Select Cut (Photo Count)
                    </label>
                    <select
                        id="cut-select"
                        value={photoOptions.cut}
                        onChange={(e) => updatePhotoOptions("cut", e.target.value)}
                        className="mt-2 block w-72 rounded-xl border font-semibold border-blue-500 bg-white py-2 px-4 text-gray-900 shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="layout-select" className="block text-md font-thin text-blue-700">
                        Layout Type
                    </label>
                    <select
                        id="layout-select"
                        value={photoOptions.layout}
                        onChange={(e) => updatePhotoOptions("layout", e.target.value)}
                        className="mt-2 block w-72 rounded-xl font-semibold border border-blue-500 bg-white py-2 px-4 text-gray-900 shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        <option value={"Horizontal"}>Horizontal</option>
                        <option value={"Vertical"}>Vertical</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="timer-select" className="block text-md font-thin text-blue-700">
                        Timer Mode
                    </label>
                    <select
                        id="timer-select"
                        value={photoOptions.timer}
                        onChange={(e) => updatePhotoOptions("timer", e.target.value)}
                        className="mt-2 block w-72 rounded-xl font-semibold border border-blue-500 bg-white py-2 px-4 text-gray-900 shadow-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        <option value={"2s"}>2s</option>
                        <option value={"3s"}>3s</option>
                        <option value={"5s"}>5s</option>
                        <option value={"10s"}>10s</option>
                        <option value={"MANUAL"}>Manual</option>
                    </select>
                </div>
            </div>

            <Button sx={{ mt: 6 }} variant="outlined" color="primary" onClick={handleCreateStrip}>
                Create Strip
            </Button>
        </div>
    );
}

export default CreateOptions;