import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';
import {useCallback, useEffect, useRef, useState} from "react";

export default function TopContainer() {
    const targetImage = useRef(null);
    const targetText = useRef(null);
    const [scrollY, setScrollY] = useState(0);
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
        const y = window.scrollY;
        setScrollY(y);
        console.log(y);
        revealImage(y);

    });

    const transformImage = (scrollY) => {
        let value = (scrollY <= 200) ? 1 + scrollY / 1000 : 1.2;
        console.log('value: ' + value);
        targetImage.current.style.transform = `scale(${value}, ${value})`;
    }

    const revealImage = (scrollY) => {
        let value = (scrollY <= 200) ? scrollY / 200 + 0.3 : 1;
        if (value > 1) value = 1;
        targetImage.current.style({opacity: value});
    }


    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <div className={styles.TitleMask}>
                    <div className={styles.Title}>SEJOONG</div>
                </div>
                <div className={styles.TitleMask}>
                    <div className={styles.Title_2}>& YUJEONG</div>
                </div>
            </div>
            <div className={styles.appear}>
                <div className={styles.thin}>
                    SAVE THE DATE
                </div>
                <div ref={targetImage} className={styles.image}>
                    <Image src={picture} alt="" width="867.2" height="788"/>
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