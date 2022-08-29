import KakaoShareButton from "../components/KakaoShareButton";
import styles from '../../styles/share.module.css'
import Fade from 'react-reveal/Fade';

export default function ShareContainer() {
    return (
        <div className={styles.container}>
            <Fade bottom>
                <div className={styles.text}>카카오톡으로 공유하기</div>

                <KakaoShareButton/>
            </Fade>
        </div>
    );
}