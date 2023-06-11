import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BannerCard from "../BannerCard/BannerCard";
import HomeVideo from "../HomeVideo/HomeVideo";
import MusicSchool from "../MusicSchool/MusicSchool";
import MusicalInstrument from "../MusicalInstrument/MusicalInstrument";
import PopularClass from "../PopularClasses/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Harmony Academy| Home</title>
            </Helmet>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <MusicSchool></MusicSchool>
            <MusicalInstrument></MusicalInstrument>
            <HomeVideo></HomeVideo>
        </div>
    );
};

export default Home;