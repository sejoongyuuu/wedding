import Fade from 'react-reveal/Fade';

export default function ContentsContainer() {
    return (
        <div className="contentsContainer">
            <Fade bottom>
                <img src='/static/image/picture/flower_line.PNG' style={{width: '20%'}}/>
                <div className="contentsTitle">초대합니다.</div>
                <div className="contentsBody">
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