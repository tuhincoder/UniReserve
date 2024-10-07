import { useLoaderData } from "react-router-dom";
import Container from "../../../component/common/Container";

const ResearchMore = () => {
    const getData = useLoaderData()
    console.log(getData.research);
    return (
        <Container>
            <div className="">
                <h2 className="text-4xl font-serif text-[#890c25] text-center my-10 ">The Research Enterprise</h2>
                {
                    getData?.research?.map(item => (

                        <div className="flex flex-col items-center lg:flex-row gap-5 mb-5 px-5 py-5">
                            <div className="flex-1    ">
                                <img
                                    src={item.img}
                                    className="h-full w-full rounded" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-5xl font-bold">{item.title}</h1>
                                <p className="py-6">
                                    {item.summary}
                                    Social networks significantly impact society by enhancing communication and fostering community connections. They allow individuals to maintain relationships over long distances and facilitate the sharing of information and resources. These platforms serve as powerful tools for raising awareness about social issues and promoting civic engagement. Businesses leverage social media for marketing, enabling broader reach and innovation. While challenges such as privacy concerns and misinformation exist, the responsible use of social networks can lead to empowered communities and positive societal outcomes.
                                </p>

                            </div>
                        </div>

                    ))
                }
            </div>
        </Container>
    );
};

export default ResearchMore;