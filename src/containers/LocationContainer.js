import MapComponent from "../components/MapComponent";
import Fade from 'react-reveal/Fade';
import styles from '../../styles/location.module.css';
import location from '../../public/images/picture/location.PNG';
import drink from '../../public/images/picture/drink.PNG';
import Image from "next/image";

export default function LocationContainer() {
    return (
        <div className={styles.container}>
            <Fade bottom>
                <div className="titleDiv"> LOCATION</div>
                <div style={{paddingBottom: '5%'}}>
                    <div style={{width: '13%', margin: 'auto'}}>
                        <Image src={location} alt=""/>
                    </div>
                    <div className="medium" style={{fontSize: '110%'}}> 소노펠리체 컨벤션</div>
                    <div className="thin" style={{fontSize: '95%'}}> 서울특별시 강남구 테헤란로 87길 22 도심공항터미널 3층
                        <div className="numLight"> 02.2222.7401</div>
                    </div>
                </div>
                <div className={styles.mapDiv}>
                    <MapComponent/>
                </div>
            </Fade>
            <div className={styles.detailContainer}>
                <Fade bottom>
                    <table style={{textAlign: 'left'}}>
                        <tr>
                            <td className={styles.title}>자가용
                            </td>
                            <td>한국도심공항 터미널 주차장 이용</td>
                        </tr>
                        <tr>
                            <td className={styles.title}>지하철
                            </td>
                            <td><span className={styles.line2}>2</span>삼성역 5번 출구 도보 약 7분<br/>
                                <div className={styles.detail}>* 지하 코엑스몰 이동보다는 <span
                                    className="medium">지상으로</span> 찾아오시면
                                    편리합니다.<br/></div>
                                <span className={styles.line9}>9</span> 봉은사역 7번 출구 도보 약 10분
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.title}>버스</td>
                            <td>한국무역센터삼성역 정류장<br/>
                                (정류장 코드 23-201)<br/>
                                <span className="medium">간선</span> <span
                                    className="numLight">146, 333, 341, 360, 740</span><br/>
                                <span className="medium">지선</span><span
                                    className="numLight"> 3411</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                                    className="medium">광역</span> <span
                                    className="numLight">M6450</span><br/>
                                <span className="medium">직행</span> <span className="numLight">1100, 1700, 2000, 2000-1, 7007,
                                500-2, 9303</span>
                            </td>
                        </tr>
                    </table>
                </Fade>
                <Fade bottom>
                    <div className={styles.guideDiv}>
                        <div style={{width: '50%', margin: 'auto'}}>
                            <Image src={drink} alt=""/>
                        </div>
                        <div className={styles.guideBold}>
                            예식 1시간 전부터<br/>
                            웰컴드링크와 포토부스가 마련됩니다.
                        </div>
                        촬영은 무료 및 무제한이며, <br/>
                        좋은 날 추억을 기록으로 남길 수 있도록<br/>
                        많은 참여 부탁드립니다.
                    </div>
                </Fade>
            </div>
        </div>
    )
        ;
}