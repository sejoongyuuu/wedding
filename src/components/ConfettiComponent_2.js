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

export default function Realistic(prop) {
    const [action, setAction] = useState(true);
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
        refAnimationInstance.current({
            ...opts,
            origin: {y: 0.7},
            particleCount: Math.floor(200 * particleRatio)
        });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
            scalar: 0.6
        });

        makeShot(0.2, {
            spread: 60,
            scalar: 0.6
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.5
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 0.5
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
            scalar: 0.7
        });
    }, [makeShot]);

    useEffect(() => {
        if (action) {
            setAction(false);
            for (let i = 1; i < 3; i++) {
                setTimeout(() => {
                    fire();
                }, i * 1500)
            }
        }
    }, [prop]);
    return (
        <>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
        </>
    );
}
