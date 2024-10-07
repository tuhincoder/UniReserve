import Banner from "../Banner/Banner";
import CollageCard from "../CollageCard/CollageCard";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollageCard />
            <Gallery />
            <Research />
        </div>
    );
};

export default Home;