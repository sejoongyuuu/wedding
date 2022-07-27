import Fade from 'react-reveal/Fade';
import styles from '../../styles/top.module.css';
import Image from 'next/image';
import picture from '../../public/images/picture/picture1.PNG';

export default function TopContainer() {
    return (
        <div className={styles.container}>
            <Fade left>
                <div className={styles.text}>
                    <div>THE</div>
                    <div>WEDDING</div>
                    <div>DAY</div>
                    <div className={styles.name}>
                        <div>SEJOONG &</div>
                        <div>YUJEONG</div>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div style={{margin: "auto"}}>
                    <Image src={picture} alt="" width={1084*0.8} height={985*0.8}/>
                </div>
            </Fade>
            <Fade right>
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
            </Fade>
        </div>)
}