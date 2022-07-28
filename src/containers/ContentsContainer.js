import Fade from 'react-reveal/Fade';
import styles from '../../styles/contents.module.css';
import Image from "next/image";
import flower from "../../public/images/picture/flower_line.PNG"

export default function ContentsContainer() {
    return (
        <div className={styles.container}>
            <div style={{width: '20%', margin: 'auto'}}>
                <Image src={flower} alt="" width="100" height="40"/>
            </div>
            <div className={styles.title}>초대합니다.</div>
            <div className={styles.body}>
                함께 맞는 여섯 번째 가을<br/>
                결혼합니다.<br/>
                소중한 분들을<br/>
                모십니다.
            </div>
            <div style={{width: '20%', margin: 'auto'}}>
                <Image src={flower} alt="" width="100" height="40"/>
            </div>
        </div>
    );
}