import styles from '../../styles/contents.module.css';
import Image from "next/image";
import flower from "../../public/images/picture/flower_line.PNG"
import {useEffect, useState} from "react";
import Fade from 'react-reveal/Fade';
import leaf from "../../public/images/shape/leaf.png";

export default function ContentsContainer(prop) {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        setScrollY(prop.scrollY);
    }, [prop]);

    return (
        <div className={styles.container}>
            <Fade bottom>
                <div className="titleDiv">
                    <div>Invitation</div>
                </div>
                <div className={styles.body}>
                    <div>함께 맞는 여섯 번째 가을,</div>
                    <div>결혼합니다.</div>
                    <br/>
                    <br/>
                    <div>소중한 분들을</div>
                    <div>모시고자 합니다.</div>
                    <br/>
                    <br/>
                    <div>참석하여 축복해주시면</div>
                    <div>감사하겠습니다.</div>
                </div>
                <div style={{width: '20%', margin: 'auto'}}>
                    <div>
                        <Image src={flower} alt="" width="100" height="40"/>
                    </div>
                </div>
                <div className={styles.name}>
                    <div>김용석 · 김난주의 장남 <span className="bold">김세중</span></div>
                    <div style={{paddingTop: '3%'}}>최성대 · 백순조의 장녀 <span className="bold">최유정</span></div>
                </div>
            </Fade>
        </div>
    );
}