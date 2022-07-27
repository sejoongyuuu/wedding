import Fade from 'react-reveal/Fade';
import styles from '../../styles/contents.module.css';

export default function ContentsContainer() {
    return (
        <div className={styles.container}>
            <Fade bottom>
                <img src='/static/image/picture/flower_line.PNG' style={{width: '20%'}}/>
                <div className={styles.title}>초대합니다.</div>
                <div className={styles.body}>
                    함께 맞는 여섯 번째 가을<br/>
                    결혼합니다.<br/>
                    소중한 분들을<br/>
                    모십니다.
                </div>
                <img src='/static/image/picture/flower_line.PNG' style={{width: '20%'}}/>
            </Fade>
        </div>
    );
}