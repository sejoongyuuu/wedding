import Fade from 'react-reveal/Fade';
import {ReactPhotoCollage} from "react-photo-collage";


const setting = {
    width: "100%",
    height: ["150px", "150px", "150px"],
    layout: [3, 3, 3],
    photos: [
        {source: '/static/image/gallery/0001.jpg'},

    ],
    showNumOfRemainingPhotos: true
};
export default function GalleryContainer() {
    return (
        <div className="galleryContainer">
            <Fade bottom>
                <div className="titleDiv">GALLERY</div>
                <div style={{paddingBottom: '2%'}}>슬라이드하여 다음 사진을 보실 수 있습니다.</div>
                <ReactPhotoCollage {...setting} />
            </Fade>
        </div>
    );
}