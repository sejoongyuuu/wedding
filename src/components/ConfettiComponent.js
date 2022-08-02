import React, {useCallback, useEffect, useRef, useState} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
    position: "absolute",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function getAnimationSettings() {
    return {
        particleCount: 1,
        startVelocity: 1,
        spread: 50,
        ticks: 250,
        drift: 0.2,
        gravity: 0.2,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.999 - 0.2
        },
        colors: ["#ffde58", "#FFFCFC"],
        scalar: randomInRange(0.6, 0.8)
    };
}

export default function ConfettiComponent() {
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(60, 0));
            refAnimationInstance.current(getAnimationSettings(120, 1));
        }
    }, []);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 16));
        }
    }, [nextTickAnimation, intervalId]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <div>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
            {startAnimation()}
        </div>
    );
}
