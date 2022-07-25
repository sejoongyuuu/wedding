import Fade from 'react-reveal/Fade';
import {ReactPhotoCollage} from "react-photo-collage";

import Img1 from "../../public/image/gallery/0001.jpg";
import Img2 from "../../public/image/gallery/0002.jpg";
import Img3 from "../../public/image/gallery/0003.jpg";
import Img4 from "../../public/image/gallery/0004.jpg";
import Img5 from "../../public/image/gallery/0005.jpg";
import Img6 from "../../public/image/gallery/0006.jpg";
import Img7 from "../../public/image/gallery/0007.JPG";
import Img8 from "../../public/image/gallery/0008.jpg";
import Img9 from "../../public/image/gallery/0009.jpg";



const setting = {
    width: "100%",
    height: ["150px", "150px", "150px"],
    layout: [3, 3, 3],
    photos: [
        {source: Img1},
        {source: Img2},
        {source: Img3},
        {source: Img4},
        {source: Img5},
        {source: Img6},
        {source: Img7},
        {source: Img8},
        {source: Img9},
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