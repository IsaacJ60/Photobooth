import React, { useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { Box, Button, Container } from "@mui/material";

const WebcamComponent: React.FC = () => {
    const camera = useRef<any>(null); // Updated type
    const [image, setImage] = useState<string | null>(null);
    const [images, setImages] = useState<string[] | null>(null);

    const capture = () => {
        if (image) {
            reset();
        }
        if (camera.current) {
            const imageSrc = camera.current.takePhoto();
            setImage(imageSrc);
        }
    };

    const reset = () => {
        setImage(null);
    };

    return (
        <div className="flex flex-col items-center justify-center p-20">
            {!image ? (
                <div>  
                    <Camera
                        ref={camera}
                        facingMode="user"
                        errorMessages={{
                            noCameraAccessible: "No camera found",
                            permissionDenied: "Permission denied",
                            switchCamera: "Cannot switch camera",
                            canvas: "Canvas error",
                        }}
                    />
                </div>

            ) : (
                <img className="rounded-xl" src={image} alt="Captured" width="100%" />
            )}
            <Button variant="contained" color="primary" onClick={capture} sx={{marginTop: "30px"}}>
                Capture Photo
            </Button>
        </div>
    );
};

export default WebcamComponent;