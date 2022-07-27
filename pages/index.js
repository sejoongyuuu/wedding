import TopContainer from "../src/containers/TopContainer";
import ContentsContainer from "../src/containers/ContentsContainer";
import LocationContainer from "../src/containers/LocationContainer";
import GalleryContainer from "../src/containers/GalleryContainer";
import CommentContainer from "../src/containers/CommentContainer";
import ContactContainer from "../src/containers/ContactContainer";
import CarouselComponent from "../src/containers/CarouselComponent";

export default function Home() {
    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <GalleryContainer/>
            <CarouselComponent/>
            <ContactContainer/>
            <CommentContainer/>
        </div>
    )
}
