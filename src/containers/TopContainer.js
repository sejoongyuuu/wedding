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
            <div style={{
                margin: '3% 3%',
                border: '1px solid #cbcbcb'
            }} className="reveal_0">
                <Confetti ref={confettiRef}/>
                <div className="mask">
                    <div className="reveal">
                        <div className={styles.image}>
                            <Image src={picture} alt="" width="867.2" height="788"/>
                        </div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className="mask">
                        <div className="reveal_2">SEJOONG</div>
                        <div className="reveal_2"><span className={styles.and}>and</span> YUJEONG</div>
                    </div>
                </div>

                <div className="appear">
                    <div style={{paddingLeft: '20%', paddingRight: '20%', marginTop: '10%', marginBottom: '3%'}}>
                        <Divider><Image src={star} alt=""/></Divider>
                    </div>
                    <div className="reveal_4">
                        <div className={styles.date}>
                            2022.09.18 SUN 3:00 PM
                        </div>
                        <div className={styles.location} style={{paddingTop: '1%'}}>
                            일요일 오후 3시 소노펠리체 컨벤션
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}