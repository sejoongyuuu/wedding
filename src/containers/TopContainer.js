import Fade from 'react-reveal/Fade';
import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';

export default function TopContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div>THE</div>
                <div>WEDDING</div>
                <div>DAY</div>
                <div className={styles.name}>
                    <div>SEJOONG &</div>
                    <div>YUJEONG</div>
                </div>
            </div>
            <div style={{width: '80%', margin: "auto" , transition: '0.3s'}}>
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
        </div>)
}