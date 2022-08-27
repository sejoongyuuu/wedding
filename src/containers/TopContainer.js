import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture_line.PNG';
import star from '../../public/images/shape/star.png';
import {useEffect, useRef} from "react";
import Confetti from "../components/Confetti";
import {Divider} from "@mui/material";

export default function TopContainer() {
    const confettiRef = useRef({});

    useEffect(() => {
        document.getElementById('html')?.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <Confetti ref={confettiRef}/>
                <div className="appear">
                    <div className={styles.image}>
                        <Image src={picture} alt="" width="867.2" height="788"/>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className="mask">
                        <div className="reveal_2">SEJOONG</div>
                    </div>
                    <div className="mask">
                        <div className="reveal_3"><span className={styles.and}>and</span> YUJEONG</div>
                    </div>
                </div>
                <div className="appear">
                    <div style={{paddingLeft: '20%', paddingRight: '20%', marginTop: '10%', marginBottom: '3%'}}>
                        <Divider><Image src={star} alt="" width="19" height="19"/></Divider>
                    </div>
                </div>
                <div className={styles.date}>
                    <div className="mask">
                        <div className="reveal_4">
                            2022.09.18 SUN 3:00 PM
                        </div>
                    </div>
                </div>
                <div className={styles.location} style={{paddingTop: '1%'}}>
                    <div className="mask">
                        <div className="reveal_4">
                            일요일 오후 3시 소노펠리체 컨벤션
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}