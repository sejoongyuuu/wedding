import dynamic from "next/dynamic";
import TopContainer from "../src/containers/TopContainer";
import ContentsContainer from "./containers/ContentsContainer";
import CalendarContainer from "./containers/CalendarContainer";

export default function MainContainer() {
    /*const CalendarContainer = dynamic(() => import("../src/containers/CalendarContainer"),)*/
    const GalleryContainer = dynamic(() => import("../src/containers/GalleryContainer"),)
    const LocationContainer = dynamic(() => import("../src/containers/LocationContainer"),)
    const ContactContainer = dynamic(() => import("../src/containers/ContactContainer"),)
    const CommentContainer = dynamic(() => import("../src/containers/CommentContainer"),)
    const ShareContainer = dynamic(() => import("../src/containers/ShareContainer"),)
    const Footer = dynamic(() => import("../src/components/footer"),)

    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <CalendarContainer/>
            <GalleryContainer/>
            <LocationContainer/>
            <ContactContainer/>
            <CommentContainer/>
            <ShareContainer/>
            <Footer/>
        </div>
    )
}