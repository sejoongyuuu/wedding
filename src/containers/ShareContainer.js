import KakaoShareButton from "../components/KakaoShareButton";
import styles from '../../styles/share.module.css'

export default function ShareContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>카카오톡으로 공유하기</div>
            <KakaoShareButton/>
        </div>
    );
}