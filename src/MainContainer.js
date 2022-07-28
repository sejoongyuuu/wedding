import dynamic from "next/dynamic";
import TopContainer from "../src/containers/TopContainer";

export default function MainContainer() {
    const ContentsContainer = dynamic(() => import("../src/containers/ContentsContainer"),)
    const LocationContainer = dynamic(() => import("../src/containers/LocationContainer"),)
    const ContactContainer = dynamic(() => import("../src/containers/ContactContainer"),)
    const GalleryContainer = dynamic(() => import("../src/containers/GalleryContainer"),)
    const CommentContainer = dynamic(() => import("../src/containers/CommentContainer"),)

    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <GalleryContainer/>
            <ContactContainer/>
            <CommentContainer/>
        </div>
    )
}