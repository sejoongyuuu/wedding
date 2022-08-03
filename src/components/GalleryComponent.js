import {ReactPhotoCollage} from "react-photo-collage";
import photo1 from '../../public/images/gallery/001.jpg';

const setting = {
    width: "90%",
    height: ["150px", "150px", "150px"],
    layout: [3, 3, 3],
    photos: [
        {source: '/images/gallery/001.jpg'},
    ],
    showNumOfRemainingPhotos: true
};
export default function GalleryComponent() {
    return (
        <div>
            <ReactPhotoCollage {...setting}
            />
        </div>
    )
}