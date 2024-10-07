import Banner from "../Banner/Banner";
import CollageCard from "../CollageCard/CollageCard";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollageCard />
            <Gallery />
            <Research />
            <Review />
        </div>
    );
};

export default Home;