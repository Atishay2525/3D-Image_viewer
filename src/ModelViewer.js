import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelUrl }) => {
    const { scene } = useGLTF(modelUrl);
    return (
        <Canvas 
            camera={{ position: [0, 5, 15], fov: 40 }} // Zoom out for larger model
            style={{ width: "900px", height: "500px" }} // Increase canvas size
        >
            <ambientLight intensity={1} />  {/* Increased lighting */}
            <directionalLight position={[10, 10, 10]} />
            <primitive object={scene} scale={[30, 30, 30]} />  {/* Increase model size */}
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;
