import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';
import {useCallback, useEffect, useRef, useState} from "react";
import ConfettiComponent, {fire} from "../components/ConfettiComponent";
import star from '../../public/images/shape/star.png';

export default function TopContainer() {
    const targetImage = useRef(null);
    const confettiRef = useRef({});

    useEffect(() => {
        document.getElementById('html')?.scrollTo(0, 0);
    }, []);
    /*
        useEffect(() => {
            window.addEventListener('scroll', handleScroll, {capture: true});
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);*/
    const handleTouch = () => {
        console.log("touched");
        confettiRef.current.fire();
    }

    return (
        <div className={styles.container} onClick={handleTouch}>
            <ConfettiComponent ref={confettiRef}/>
            {/*            <div className="mask">
                <div className="reveal_0" style={{width: '80%', margin: 'auto', paddingTop: '5%'}}>
                    <Image src={star}/>
                </div>
            </div>*/}
            <div className={styles.wedding}>
                <div className="mask">
                    <div className="reveal">The Wedding of</div>
                </div>
            </div>
            <div className={styles.name}>
                <div className="mask">
                    <div className="reveal" style={{paddingTop: '2%'}}>Sejoong</div>
                </div>
                <div className="mask">
                    <div className="reveal_2" style={{paddingTop: '2%'}}>& Yujeong</div>
                </div>
            </div>

            <div className="appear">
                <div ref={targetImage} className={styles.image}>
                    <Image src={picture} alt="" width="867.2" height="788"/>
                </div>
                <div className="reveal_3">
                    <div className={styles.date}>
                        2022.09.18 SUN 3:00 pm
                    </div>
                    <div className={styles.kor}>
                        소노펠리체 컨벤션 (도심공항터미널 3층)
                    </div>
                </div>
            </div>
        </div>
    );
}