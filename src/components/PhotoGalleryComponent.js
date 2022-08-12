import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Thumbs, FreeMode} from 'swiper';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useRef, useState} from "react";
import photo_1 from '../../public/images/gallery/001.jpg';
import photo_2 from '../../public/images/gallery/002.jpg';
import photo_3 from '../../public/images/gallery/003.jpg';
import photo_4 from '../../public/images/gallery/004.jpg';
import photo_5 from '../../public/images/gallery/005.jpg';
import photo_6 from '../../public/images/gallery/006.jpg';
import photo_7 from '../../public/images/gallery/007.jpg';
import photo_8 from '../../public/images/gallery/008.jpg';
import photo_9 from '../../public/images/gallery/009.jpg';
import photo_10 from '../../public/images/gallery/010.jpg';
import photo_11 from '../../public/images/gallery/011.JPG';
import photo_12 from '../../public/images/gallery/012.JPG';
import photo_13 from '../../public/images/gallery/013.jpg';
import photo_14 from '../../public/images/gallery/014.jpg';
import photo_15 from '../../public/images/gallery/015.JPG';
import photo_16 from '../../public/images/gallery/016.png';
import photo_17 from '../../public/images/gallery/017.jpg';
import photo_18 from '../../public/images/gallery/018.JPG';
import photo_19 from '../../public/images/gallery/019.jpg';
import photo_20 from '../../public/images/gallery/020.JPG';
import photo_21 from '../../public/images/gallery/021.JPG';
import photo_22 from '../../public/images/gallery/022.jpg';
import photo_23 from '../../public/images/gallery/023.jpg';
import photo_24 from '../../public/images/gallery/024.jpg';
import photo_25 from '../../public/images/gallery/025.jpg';
import photo_26 from '../../public/images/gallery/026.JPG';
import photo_27 from '../../public/images/gallery/027.jpg';
import photo_28 from '../../public/images/gallery/028.jpg';
import photo_29 from '../../public/images/gallery/029.JPG';
import photo_30 from '../../public/images/gallery/030.jpg';
import photo_31 from '../../public/images/gallery/031.jpg';
import photo_32 from '../../public/images/gallery/032.jpg';
import photo_33 from '../../public/images/gallery/033.JPG';
import photo_34 from '../../public/images/gallery/034.jpg';
import photo_35 from '../../public/images/gallery/035.jpg';
import photo_36 from '../../public/images/gallery/036.jpg';
import photo_37 from '../../public/images/gallery/037.jpg';
import photo_38 from '../../public/images/gallery/038.jpg';
import photo_39 from '../../public/images/gallery/039.JPG';
import photo_40 from '../../public/images/gallery/040.jpg';
import photo_41 from '../../public/images/gallery/041.JPG';
import photo_42 from '../../public/images/gallery/042.JPG';
import photo_43 from '../../public/images/gallery/043.jpg';
import photo_44 from '../../public/images/gallery/044.jpg';
import photo_45 from '../../public/images/gallery/045.JPG';
import photo_46 from '../../public/images/gallery/046.jpg';
import photo_47 from '../../public/images/gallery/047.jpg';
import photo_48 from '../../public/images/gallery/048.JPG';
import photo_49 from '../../public/images/gallery/049.jpg';
import photo_50 from '../../public/images/gallery/050.JPG';
import photo_51 from '../../public/images/gallery/051.JPG';
import photo_52 from '../../public/images/gallery/052.JPG';
import photo_53 from '../../public/images/gallery/053.JPG';
import photo_54 from '../../public/images/gallery/054.JPG';


export default function PhotoGalleryComponent() {
    SwiperCore.use([Navigation, Thumbs, Pagination]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const images = [
        photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10,
        photo_11, photo_12, photo_13, photo_14, photo_15, photo_16, photo_17, photo_18, photo_19, photo_20,
        photo_21, photo_22, photo_23, photo_24, photo_25, photo_26, photo_27, photo_28, photo_29, photo_30,
        photo_31, photo_32, photo_33, photo_34, photo_35, photo_36, photo_37, photo_38, photo_39, photo_40,
        photo_41, photo_42, photo_43, photo_44, photo_45, photo_46, photo_47, photo_48, photo_49, photo_50,
        photo_51, photo_52, photo_53, photo_54
    ];
    const imageRender = images.map((item, index) => {
        return (
            <SwiperSlide key={`swiper-${index}`}>
                <Image src={item}/>
            </SwiperSlide>
        )
    })
    const imageRender_thumbs = images.map((item, index) => {
        return (
            <SwiperSlide key={`swiper-${index}`}>
                <Image src={item}/>
            </SwiperSlide>
        )
    })

    return (
        <div>
            <Swiper
                navigation
                slidesPerView={1}
                thumbs={{swiper: thumbsSwiper}}
                loop
                pagination={{
                    type: "progressbar",
                }}
            >
                {imageRender}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={5}
                watchSlidesProgress={true}
                freeMode
            >{imageRender_thumbs}</Swiper>
        </div>
    );
}
