import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBlob = () => {
    return (
        <motion.div
            className="blob"
            style={{
                width: 400,
                height: 400,
                position: "absolute",
                zIndex: -1,
                background: "linear-gradient(135deg, rgba(0,102,255,0.6), rgba(0,255,255,0.6))",
                filter: "blur(100px)",
                borderRadius: "50%",
            }}
            animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 45, 0],
                x: [-50, 50, -50],
                y: [-50, 50, -50],
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

export default AnimatedBlob;