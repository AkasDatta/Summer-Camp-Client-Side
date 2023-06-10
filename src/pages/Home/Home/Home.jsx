import Banner from "../Banner/Banner";
import BannerCard from "../BannerCard/BannerCard";
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
        </div>
    );
};

export default Home;