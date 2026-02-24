import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../component/common/Container";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaCloudUploadAlt, FaGraduationCap } from "react-icons/fa";

const image_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

const AdmissionForm = () => {
  const axiosPublic = useAxiosPublic();
  const { name } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Image Upload Logic
      const imageFile = { image: data.img[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        const formItem = {
          name: data.name,
          college_name: name,
          address: data.address,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          image: res.data.data.display_url,
          submissionDate: new Date().toISOString(),
        };

        // Backend Submission
        const formRes = await axiosPublic.post("/form", formItem);

        if (formRes.data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Application Submitted!",
            text: `You have successfully applied to ${name}`,
            confirmButtonColor: "#890c25",
          });
          navigate("/my-college"); // Successful hole user-ke redirect kora bhalo
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#890c25]/10 rounded-full mb-4">
              <FaGraduationCap className="text-3xl text-[#890c25]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter">
              Enrollment <span className="text-[#890c25]">Form</span>
            </h1>
            <p className="text-gray-500 mt-2 font-medium italic">
              Applying for: {name}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Candidate Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#890c25] outline-none transition-all font-medium"
                  />
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Preferred Subject
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    placeholder="Ex: Computer Science"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#890c25] outline-none transition-all font-medium"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#890c25] outline-none transition-all font-medium"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="number"
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#890c25] outline-none transition-all font-medium"
                  />
                </div>

                {/* Address Input - Full Width */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Permanent Address
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Street, City, Zip Code"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#890c25] outline-none transition-all font-medium"
                  />
                </div>

                {/* Photo Upload */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Candidate Photograph
                  </label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-[#890c25]/50 transition-colors bg-gray-50">
                    <input
                      {...register("img", { required: true })}
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <FaCloudUploadAlt className="mx-auto text-4xl text-gray-300 mb-2" />
                    <p className="text-sm font-bold text-gray-500">
                      Click or drag photo here
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase mt-1">
                      JPG, PNG up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full py-5 mt-6 rounded-2xl text-white font-black uppercase tracking-widest transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? "bg-gray-400"
                    : "bg-[#890c25] hover:bg-[#6e081d] hover:shadow-[#890c25]/20"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    Processing...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdmissionForm;
