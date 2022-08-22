import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture_line.PNG';
import leaf from '../../public/images/shape/leaf.png';
import {useEffect, useRef} from "react";
import Confetti from "../components/Confetti";

export default function TopContainer() {
    const confettiRef = useRef({});

    useEffect(() => {
        document.getElementById('html')?.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <div className="appear">
                <div className={styles.imageDiv}>
                    <div className={styles.image}>
                        <Image src={picture} alt="" width="867.2" height="788"/>
                    </div>
                </div>
                <Confetti ref={confettiRef}/>
                <div className={styles.wedding}>
                    <div className="mask">
                        <div className="reveal">The Wedding of</div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className="mask">
                        <div className="reveal_2">Sejoong · Yujeong
                        </div>
                    </div>
                </div>
                <div className="reveal_4">
                    <div className={styles.date}>
                        2022.09.18
                    </div>
                    <div className={styles.location} style={{letterSpacing: '1px'}}>
                        SUN 15:00 SONO FELICE CONVENTION
                    </div>
                    <div className={styles.location} style={{paddingTop: '1%'}}>
                        일요일 오후 3시 소노펠리체 컨벤션
                    </div>
                </div>
            </div>
        </div>
    );
}