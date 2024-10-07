import { useLoaderData } from "react-router-dom";


const CollegeCardDetails = () => {
    const { image, name, admission_process, event_details, research_works, sports_categories } = useLoaderData()
    // console.log(sports_categories);
    return (
        <div className="my-20">
            <h1 className="text-center text-4xl font-serif">College Details</h1>
            <div className="hero bg-base-100 min-h-screen">
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
                        <button className="ml-10 rounded border px-10 py-3 bg-slate-300 text-xl">More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCardDetails;