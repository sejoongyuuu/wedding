import Fade from 'react-reveal/Fade';
import {ReactPhotoCollage} from "react-photo-collage";
import img_1 from '../../public/images/gallery/0001.jpg';


const setting = {
    width: "100%",
    height: ["150px", "150px", "150px"],
    layout: [3, 3, 3],
    photos: [
        {source: '/images/gallery/0001.jpg'},
        {source: '/images/gallery/0002.jpg'},
        {source: '/images/gallery/0003.jpg'},
        {source: '/images/gallery/0004.jpg'},
        {source: '/images/gallery/0005.jpg'},

    ],
    showNumOfRemainingPhotos: true
};
export default function GalleryContainer() {
    return (
        <div className="galleryContainer">
            <Fade>
                <div className="titleDiv">GALLERY</div>
                <div style={{paddingBottom: '2%'}}>슬라이드하여 다음 사진을 보실 수 있습니다.</div>
                <ReactPhotoCollage {...setting} />
            </Fade>
        </div>
    );
}