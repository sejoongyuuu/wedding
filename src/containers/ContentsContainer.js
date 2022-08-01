import styles from '../../styles/contents.module.css';
import Image from "next/image";
import flower from "../../public/images/picture/flower_line.PNG"
import {useEffect, useState} from "react";

export default function ContentsContainer(prop) {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        setScrollY(prop.scrollY);
    }, [prop]);

    return (
        <div className={styles.container}>
            <div style={{width: '20%', margin: 'auto'}}>
                <div className="mask">
                    <div className={scrollY > 250 ? "reveal" : "before"}>
                        <Image src={flower} alt="" width="100" height="40"/>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <div className="mask">
                    <div className={scrollY > 300 ? "reveal" : "before"}>초대합니다.</div>
                </div>
            </div>
            <div className={styles.body}>
                <div className="mask">
                    <div className={scrollY > 350 ? "reveal" : "before"}>함께 맞는 여섯 번째 가을</div>
                </div>
                <div className="mask">
                    <div className={scrollY > 400 ? "reveal" : "before"}>결혼합니다.</div>
                </div>
                <div className="mask">
                    <div className={scrollY > 450 ? "reveal" : "before"}>소중한 분들을 모십니다.</div>
                </div>
            </div>
            <div style={{width: '20%', margin: 'auto'}}>
                <div className="mask">
                    <div className={scrollY > 500 ? "reveal" : "before"}>
                        <Image src={flower} alt="" width="100" height="40"/>
                    </div>
                </div>
            </div>
        </div>
    );
}