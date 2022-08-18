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
            <Confetti ref={confettiRef}/>
            <div className={styles.wedding}>
                <div className="mask">
                    <div className="reveal">The Wedding of</div>
                </div>
            </div>
            <div className={styles.name}>
                <div className="mask">
                    <div className="reveal_2" style={{paddingTop: '3%'}}>Sejoong</div>
                </div>
                <div className="mask">
                    <div className="reveal_3" style={{paddingTop: '3%'}}><span className={styles.and}>&</span> Yujeong
                    </div>
                </div>
            </div>
            <div className="appear">
                <div className={styles.image}>
                    <Image src={picture} alt="" width="867.2" height="788"/>
                </div>
                <div style={{width: '8%', margin: 'auto'}}>
                    <Image src={leaf} alt=''/>
                </div>
                <div className={styles.saveTheDate}>
                    <div className="reveal_4" style={{paddingTop: '3%'}}>Save the Date!</div>
                </div>
                <div className="reveal_4">
                    <div className={styles.date}>
                        2022.09.18 SUN 3:00 pm
                    </div>
                    <div className={styles.kor}>
                        소노펠리체 컨벤션
                    </div>
                </div>
            </div>
        </div>
    );
}