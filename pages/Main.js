import TopContainer from "./containers/TopContainer";
import ContentsContainer from "./containers/ContentsContainer";
import LocationContainer from "./containers/LocationContainer";
import GalleryContainer from "./containers/GalleryContainer";
import ContactContainer from "./containers/ContactContainer";
import CommentComponent from "./components/CommentComponent";

function Main() {
    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <GalleryContainer/>
            <ContactContainer/>
            <CommentComponent/>
        </div>
    );
}

export default Main;
