import Container from "../../../component/common/Container";
import banner1 from '../../../assets/banner/banner.jpg'
import banner2 from '../../../assets/banner/banner1.jpg'
import banner3 from '../../../assets/banner/banner2.jpg'


const Banner = () => {
    return (

        <div>

            <div className="carousel w-full h-[500px]">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={banner3}

                        className="w-full object-cover rounded" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={banner2}

                        className="w-full object-cover rounded" alt="bannerImg" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={banner1}

                        className="w-full object-cover rounded" alt="bannerImg" />
                </div>

            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>

        </div>
    );
};

export default Banner;