import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';
import {useCallback, useEffect, useRef, useState} from "react";
import ContentsContainer from "./ContentsContainer";
import Realistic from "../components/ConfettiComponent_2";

export default function TopContainer() {
    const targetImage = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [show, setShow] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [confetti, setConfetti] = useState(false);

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
        if (y > 40) setShow(true);
        if (y > 200) setShowContent(true);
        if (y > 10) setConfetti(true);
    });

    return (
        <div className={styles.container}>
            <Realistic
                scrollY={scrollY}
            />
            <div className={styles.name}>
                <div className="mask">
                    <div className="reveal">SEJOONG</div>
                </div>
                <div className="mask">
                    <div className="reveal_2">& YUJEONG</div>
                </div>
            </div>

            <div className={styles.thin}>
                <div className="mask">
                    <div className="reveal_3">SAVE THE DATE</div>
                </div>
            </div>
            <div className="appear">
                <div ref={targetImage} className={styles.image}>
                    <Image src={picture} alt="" width="867.2" height="788"/>
                </div>
                <div className="mask">
                    <div className="reveal_3">
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
                </div>
            </div>
        </div>
    );
}