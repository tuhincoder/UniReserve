import { useLoaderData } from "react-router-dom";
import Container from "../../component/common/Container";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from 'sweetalert2'


const image_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`

const AdmissionForm = () => {
    const axiosPublic = useAxiosPublic()
    const { name } = useLoaderData()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.img[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if (res.data.success) {
            const formItem = {
                name: data.name,
                address: data.address,
                email: data.email,
                subject: data.subject,
                image: res.data.data.display_url
            }
            const formRes = await axiosPublic.post('/form', formItem)
            console.log(formRes.data);
            if (formRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your information has been submitted",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }

    }


    // const handleFormSubmit = (e) => {
    //     e.preventDefault()
    //     const form = e.target;
    //     console.log(form);
    //     const name = form.name.value;
    //     const subject = form.subject.value;
    //     const email = form.email.value;
    //     const phone = form.phone.value;
    //     const address = form.address.value;
    //     const image = form.img.value;

    //     console.log(name, subject, email, phone, address, image);
    //     const formDetails = {
    //         name,
    //         subject,
    //         email,
    //         phone,
    //         address,
    //         image
    //     }
    //     console.log(formDetails);

    // }

    return (
        <Container>
            <div className="my-20">
                <h1 className="text-3xl font-medium text-gray-500 text-center"> Admission to {name}</h1>
                <h1 className="text-xl font-medium text-gray-500 text-center">Submit This Form</h1>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder="Please Type Your Name" className="input input-bordered" required />
                        </div>
                        {/* subject */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input
                                {...register("subject", { required: true })}
                                type="text" placeholder="Please Type Your Subject" className="input input-bordered" required />
                        </div>
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="Email" placeholder="Please Type Your Email" className="input input-bordered" required />
                        </div>
                        {/* Phone */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                {...register("phone", { required: true })}
                                type="number" placeholder="Please Type Your Number" className="input input-bordered" required />
                        </div>
                        {/* Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                {...register("address", { required: true })}
                                type="text" placeholder="Please Type Your address" className="input input-bordered" required />
                        </div>
                        {/* file input photo*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                {...register("img", { required: true })}
                                type="file" className="input input-bordered file-input file-input-bordered" required />
                        </div>
                    </div>
                    <input className="btn w-full mt-5 bg-slate-500 duration-500" type="submit" value="Submit Form" />
                </form>
            </div>
        </Container>
    );
};

export default AdmissionForm;