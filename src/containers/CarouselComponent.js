import Image from "next/image";
import img_1 from '../../public/images/gallery/0001.jpg';
import SwiperCore, {Navigation , Thumbs} from "swiper";
import {useState} from "react";
import {SwiperSlide, Swiper} from "swiper/react";

function CarouselComponent() {

    SwiperCore.use([Navigation, Thumbs]);
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const images = [img_1];
    const imageRender = images.map((item, index) => {
        return (
            <SwiperSlide key={`swiper-${index}`}>
                <Image src={item} alt=""/>
            </SwiperSlide>
        )
    })
    return (
        <div>
            <Swiper
                slidesPerView={1}
                navigation
                thumbs={{swiper: thumbsSwiper}}
                loop
            >
                {imageRender}
            </Swiper>
        </div>

    );
}

export default CarouselComponent;