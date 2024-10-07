import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {
    const { name } = useLoaderData()

    return (
        <div>
            <h1 className="text-3xl font-medium text-gray-500 text-center">Please Admission to {name}</h1>

            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Please Type Your Name" className="input input-bordered" required />
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;