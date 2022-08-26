import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
    position: "absolute",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

const Confetti = () => {

    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
        refAnimationInstance.current({
            ...opts,
            origin: {y: 0.7},
            particleCount: Math.floor(200 * particleRatio),
            colors: ['#ff69a2', '#fff561']
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
        setTimeout(() => {
            fire();
        }, 1500)
    }, []);

    /*    useImperativeHandle(ref, () => ({
            fire
        }));*/
    return (
        <>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
        </>
    );
}
Confetti.displayName = 'Confetti';
export default Confetti;