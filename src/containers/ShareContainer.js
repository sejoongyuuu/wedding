import KakaoShareButton from "../components/KakaoShareButton";
import styles from '../../styles/share.module.css'

export default function ShareContainer() {
    return (
        <div className={styles.container}>
            <KakaoShareButton/>
        </div>
    );
}