import AccountComponent from "../components/AccountComponent";
import Fade from 'react-reveal/Fade';
import styles from '../../styles/contact.module.css'

export default function ContactContainer() {
    return (
        <div className={styles.container}>
            <Fade>
                <img src="/static/image/picture/heart.PNG" style={{width: '9%'}}/>
                <div>
                    참석이 어려우신 분들을 위해<br/>
                    축하의 마음을 전하실 곳을 안내드립니다.
                </div>
                <img src="/static/image/picture/groom.PNG" style={{width: '30%'}}/>
                <img src="/static/image/picture/bride.PNG" style={{width: '30%'}}/>
                <div className="contactSection">
                    <div style={{paddingLeft: '15%'}}>
                        <a href='tel:010-8875-8665'><img src="/static/image/picture/tel_blue.PNG"
                                                         style={{width: '35%'}}/></a>
                        <div className="contactDiv">
                            <span className="regular">신랑 김세중</span>에게<br/>
                            연락하기
                        </div>
                    </div>
                    <div style={{paddingRight: '15%'}}>
                        <a href='tel:010-8875-8665'><img src="/static/image/picture/tel_pink.PNG"
                                                         style={{width: '35%'}}/></a>
                        <div className="contactDiv">
                            <span className="regular">신부 최유정</span>에게<br/>
                            연락하기
                        </div>
                    </div>
                </div>
                <AccountComponent/>
            </Fade>
        </div>
    );
}