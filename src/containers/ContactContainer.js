import AccountComponent from "../components/AccountComponent";
import Fade from 'react-reveal/Fade';
import styles from '../../styles/contact.module.css'
import Image from "next/image";
import heart from '../../public/images/picture/heart.PNG'
import telPink from '../../public/images/picture/tel_pink.PNG';
import telBlue from '../../public/images/picture/tel_blue.PNG';

export default function ContactContainer() {
    return (
        <div className={styles.container}>
            <Fade>
                <div style={{width: '9%', margin: 'auto'}}>
                    <Image src={heart} alt=""/>
                </div>
                <div>
                    참석이 어려우신 분들을 위해<br/>
                    축하의 마음을 전하실 곳을 안내드립니다.
                </div>
                <AccountComponent/>
                <div className={styles.contactSection}>
                    <div style={{paddingLeft: '15%'}}>
                        <a href='tel:010-8875-8665'>
                            <div style={{width: '35%', margin:'auto'}}>
                                <Image src={telBlue} alt=""/>
                            </div>
                        </a>
                        <div className="contactDiv">
                            <span className="regular">신랑 김세중</span>에게<br/>
                            연락하기
                        </div>
                    </div>
                    <div style={{paddingRight: '15%'}}>
                        <a href='tel:010-8875-8665'>
                            <div style={{width: '35%', margin:'auto'}}>
                                <Image src={telPink} alt=""/>
                            </div>
                        </a>
                        <div className="contactDiv">
                            <span className="regular">신부 최유정</span>에게<br/>
                            연락하기
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}