"use client";

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Button from "@mui/material/Button";
import { redirect } from "next/navigation";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function NavBar() {

    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: "var(--background)" }} className={`${dmSans.className} antialiased shadow-lg`}>
                <Toolbar className="flex justify-between items-center">
                    <div className="flex flex-row items-center gap-3">
                        <Link href="/" className="flex items-center no-underline">
                            <h1 className="flex items-center text-white gap-3">
                                <Image src="/window.svg" alt="logo" width={30} height={30} />
                                <span className="ml-2 font-bold">Photobooth v1.0</span>
                            </h1>
                        </Link>

                        <Link href="/create" className="flex items-center no-underline">
                            <p className="flex items-center text-white">
                                <span className="ml-2 text-sm">Create</span>
                            </p>
                        </Link>

                    </div>

                    <Box
                        className={`flex items-center gap-3 rounded-full px-4 py-1 transition-colors duration-300`}
                    >
                        <Button variant="outlined" color="primary" href="/auth/logout">
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>

    );
}
