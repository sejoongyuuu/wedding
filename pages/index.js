import Head from 'next/head'
import Image from 'next/image'
import Main from './Main'
import TopContainer from "./containers/TopContainer";
import ContentsContainer from "./containers/ContentsContainer";
import LocationContainer from "./containers/LocationContainer";

export default function Home() {
    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
        </div>
    )
}
