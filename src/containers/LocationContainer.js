import MapComponent from "../components/MapComponent";
import Fade from 'react-reveal/Fade';
import styles from '../../styles/location.module.css';
import location from '../../public/images/picture/location.PNG';
import drink from '../../public/images/picture/drink.PNG';
import Image from "next/image";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {Divider} from "semantic-ui-react";
import {Box} from "@mui/material";

export default function LocationContainer() {
    return (
        <div className={styles.container}>
            <Fade>
                <div className="titleDiv"> Location</div>
                <div style={{paddingBottom: '5%'}}>
                    <div className="medium" style={{fontSize: '110%'}}> 소노펠리체 컨벤션</div>
                    <div className="thin"> 서울특별시 강남구 테헤란로 87길 22 도심공항터미널 3층
                        <div className="numLight"> 02.2222.7401</div>
                    </div>
                </div>
                <div className={styles.mapDiv}>
                    <MapComponent/>
                </div>
            </Fade>
            <Box className={styles.detailContainer}>
                <Fade>
                    <table style={{textAlign: 'left'}}>
                        <tr>
                            <td className={styles.title}>
                                <DirectionsCarIcon/><br/>
                                자가용
                            </td>
                            <td style={{borderBottom: '0.5px solid #D0D0D0', verticalAlign: ' top'}}>한국도심공항 터미널 주차장
                                이용
                            </td>
                            <Divider/>
                        </tr>
                        <tr>
                            <td className={styles.title}>
                                <DirectionsSubwayIcon/><br/>
                                지하철
                            </td>
                            <td style={{borderBottom: '0.5px solid #D0D0D0'}}>
                                <span className={styles.line2}>2</span>삼성역 5번 출구 도보 약 7분<br/>
                                <div className={styles.detail}>* 지하 코엑스몰 이동보다는 <span
                                    className="medium">지상으로</span> 찾아오시면
                                    편리합니다.<br/></div>
                                <span className={styles.line9}>9</span> 봉은사역 7번 출구 도보 약 10분
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.title}>
                                <DirectionsBusIcon/>
                                <br/>
                                버스
                            </td>
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
            </Box>
            <Fade>
                <div className={styles.guideDiv}>
                    <div style={{width: '60%', margin: 'auto'}}>
                        <Image src={drink} alt=""/>
                    </div>
                    <div className={styles.guideBold}>
                        예식 1시간 전부터<br/>
                        웰컴드링크와 포토부스가 마련됩니다.
                    </div>
                    <div className={styles.guideBody}>
                        촬영은 무료 및 무제한이며, <br/>
                        좋은 날 추억을 기록으로 남길 수 있도록<br/>
                        많은 참여 부탁드립니다.
                    </div>
                </div>
            </Fade>
        </div>
    );
}