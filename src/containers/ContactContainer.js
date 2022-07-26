import AccountComponent from "../components/AccountComponent";
import tel_blue from "../../public/static/image/picture/tel_blue.PNG";
import tel_pink from "../../public/static/image/picture/tel_pink.PNG";
import heart from "../../public/static/image/picture/heart.PNG";
import bride from "../../public/static/image/picture/bride.PNG";
import groom from "../../public/static/image/picture/groom.PNG";
import Fade from 'react-reveal/Fade';
import Image from "next/image";

export default function ContactContainer() {
    return (
        <div>
            <Fade>
                <img src={heart} style={{width: '9%'}}/>
                <div>
                    참석이 어려우신 분들을 위해<br/>
                    축하의 마음을 전하실 곳을 안내드립니다.
                </div>
                <img src={groom} style={{width: '30%'}}/>
                <img src={bride} style={{width: '30%'}}/>
                <div className="contactSection">
                    <div style={{paddingLeft: '15%'}}>
                        <a href='tel:010-8875-8665'><img src={tel_blue} style={{width: '35%'}}/></a>
                        <div className="contactDiv">
                            <span className="fontRegular">신랑 김세중</span>에게<br/>
                            연락하기
                        </div>
                    </div>
                    <div style={{paddingRight: '15%'}}>
                        <a href='tel:010-8875-8665'><img src={tel_pink} style={{width: '35%'}}/></a>
                        <div className="contactDiv">
                            <span className="fontRegular">신부 최유정</span>에게<br/>
                            연락하기
                        </div>
                    </div>
                </div>
                <AccountComponent/>
            </Fade>
        </div>
    )
        ;
}