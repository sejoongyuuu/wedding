import TopContainer from "../src/containers/TopContainer";
import ContentsContainer from "../src/containers/ContentsContainer";
import LocationContainer from "../src/containers/LocationContainer";
import GalleryContainer from "../src/containers/GalleryContainer";

export default function Home() {
    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <GalleryContainer/>
        </div>
    )
}
