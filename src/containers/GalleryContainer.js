import Fade from 'react-reveal/Fade';
import styles from '../../styles/gallery.module.css';
import PhotoGalleryComponent from "../components/PhotoGalleryComponent";


export default function GalleryContainer() {
    return (
        <div className={styles.container}>
            <Fade bottom>
                <div className="titleDiv">Gallery</div>
                <div style={{paddingBottom: '2%'}}>슬라이드하여 다음 사진을 보실 수 있습니다.</div>
                <PhotoGalleryComponent/>
            </Fade>
        </div>
    );
}