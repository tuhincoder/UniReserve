import { useLoaderData, useParams } from "react-router-dom";


const CollegeCardDetails = () => {
    const { image, name, admission_process, event_details, research_works, sports_categories } = useLoaderData()
    // console.log(sports_categories);
    return (
        <div className="my-20">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-xl rounded-lg shadow-2xl" />
                    <div className="space-y-5">
                        <h1 className="text-2xl font-medium capitalize">{name}</h1>
                        <p className="">
                            <span className="font-medium">Admission Process:</span>  {admission_process}
                        </p>
                        <p className="">
                            <span className="font-medium">Event Details:</span>  {event_details}
                        </p>
                        <p className="">
                            <span className="font-medium">Research Works:</span>  {research_works}
                        </p>
                        <p className="">
                            <span className="font-medium">Sports Categories:</span>  {sports_categories}
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCardDetails;