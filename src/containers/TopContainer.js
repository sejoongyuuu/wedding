import Fade from 'react-reveal/Fade';

export default function TopContainer() {
    return (
        <div className="topContainer">
            <Fade left>
                <div className="topText">
                    <div>THE</div>
                    <div>WEDDING</div>
                    <div>DAY</div>
                    <div className="topName">
                        <div>SEJOONG &</div>
                        <div>YUJEONG</div>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <img src="/static/image/picture/picture_1.PNG" style={{width: '80%'}}/>
            </Fade>
            <Fade right>
                <div className="textContainer">
                    <div className="textDate">
                        <div className="first">2022</div>
                        09/18
                    </div>
                    <div>
                        <div>
                            <div className="textEng">
                                SUN 15:00 SONO FELICE CONVENTION
                            </div>
                            <div className="textKor">
                                일요일 오후 3시 소노펠리체 컨벤션
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}