import dynamic from "next/dynamic";
import TopContainer from "../src/containers/TopContainer";
import {useEffect} from "react";

const ContentsContainer = dynamic(() => import("../src/containers/ContentsContainer"), {
    ssr: false,
    loading: () => null,
})
const LocationContainer = dynamic(() => import("../src/containers/LocationContainer"), {
    ssr: false,
    loading: () => null,
})

const GalleryContainer = dynamic(() => import("../src/containers/GalleryContainer"), {
    ssr: false,
    loading: () => null,
})

const ContactContainer = dynamic(() => import("../src/containers/ContactContainer"), {
    ssr: false,
    loading: () => null,
})

const CarouselComponent = dynamic(() => import("../src/containers/CarouselComponent"), {
    ssr: false,
    loading: () => null,
})
const CommentContainer = dynamic(() => import("../src/containers/CommentContainer"), {
    loading: () => null,
})

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <TopContainer/>
            <ContentsContainer
                loading="lazy"
            />
            <LocationContainer/>
            <GalleryContainer
                loading="lazy"
            />
            <CarouselComponent
                loading="lazy"
            />
            <ContactContainer/>
            <CommentContainer
                loading="lazy"
            />
        </div>
    )
}
