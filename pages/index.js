import dynamic from "next/dynamic";
import TopContainer from "../src/containers/TopContainer";
import {useEffect} from "react";

const ContentsContainer = dynamic(() => import("../src/containers/ContentsContainer"), )
const LocationContainer = dynamic(() => import("../src/containers/LocationContainer"), )
const ContactContainer = dynamic(() => import("../src/containers/ContactContainer"),)
const CarouselComponent = dynamic(() => import("../src/containers/CarouselComponent"), )
const CommentContainer = dynamic(() => import("../src/containers/CommentContainer"), )

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <CarouselComponent/>
            <ContactContainer/>
            <CommentContainer/>
        </div>
    )
}
