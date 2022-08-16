import dynamic from "next/dynamic";
import TopContainer from "../src/containers/TopContainer";
import GalleryContainer from "./containers/GalleryContainer";
import ShareContainer from "./containers/ShareContainer";
import ContentsContainer from "./containers/ContentsContainer";
import Footer from "./components/footer";

export default function MainContainer() {
    const GalleryContainer = dynamic(() => import("../src/containers/GalleryContainer"),)
    const LocationContainer = dynamic(() => import("../src/containers/LocationContainer"),)
    const ContactContainer = dynamic(() => import("../src/containers/ContactContainer"),)
    const CommentContainer = dynamic(() => import("../src/containers/CommentContainer"),)

    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <GalleryContainer/>
            <ContactContainer/>
            <CommentContainer/>
            <ShareContainer/>
            <Footer/>
        </div>
    )
}