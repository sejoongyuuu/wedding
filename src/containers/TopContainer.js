import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';
import {useCallback, useEffect, useRef, useState} from "react";

export default function TopContainer() {
    const target = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        document.getElementById('html')?.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {capture: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = useCallback(() => {
        console.log(window.scrollY);
        if (window.scrollY >= 50) {
            setAnimate(true);
        }
    });


    return (
        <div className={styles.container}>
            <div className={animate ? styles.moveDiv : styles.name}>
                <div>SEJOONG</div>
                <div>& YUJEONG</div>
            </div>
            <div className={animate? styles.appearDiv : styles.transparent}>
                <div className={styles.thin}>
                    SAVE THE DATE
                </div>
                <div style={{width: '80%', margin: "auto", transition: '0.3s', paddingTop: '5%'}}>
                    <Image priority src={picture} alt="" width="867.2" height="788"/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.date}>
                        <div className={styles.first}>2022</div>
                        09/18
                    </div>
                    <div>
                        <div>
                            <div className={styles.eng}>
                                SUN 15:00 SONO FELICE CONVENTION
                            </div>
                            <div className={styles.kor}>
                                일요일 오후 3시 소노펠리체 컨벤션
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}