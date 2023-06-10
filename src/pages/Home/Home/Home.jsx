import Banner from "../Banner/Banner";
import BannerCard from "../BannerCard/BannerCard";
import HomeVideo from "../HomeVideo/HomeVideo";
import MusicSchool from "../MusicSchool/MusicSchool";
import PopularClass from "../PopularClasses/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <MusicSchool></MusicSchool>
            <HomeVideo></HomeVideo>
        </div>
    );
};

export default Home;