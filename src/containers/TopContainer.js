import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';
import {useEffect, useRef} from "react";
import ConfettiComponent from "../components/ConfettiComponent";

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
            <div className={styles.wedding}>
                <div className="mask">
                    <div className="reveal">The Wedding of</div>
                </div>
            </div>
            <div className={styles.name}>
                <div className="mask">
                    <div className="reveal" style={{paddingTop: '3%'}}>Sejoong</div>
                </div>
                <div className="mask">
                    <div className="reveal_2" style={{paddingTop: '3%'}}>& Yujeong</div>
                </div>
            </div>
            <div className="appear">
                <div className={styles.bar} />
                <div className={styles.image}>
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