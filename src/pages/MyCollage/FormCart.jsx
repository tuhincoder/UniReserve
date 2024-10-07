/* eslint-disable react/prop-types */

import Container from "../../component/common/Container";
// import useColleges from "../../hook/useColleges";
// import useColleges from "../../hook/useColleges";


const FormCart = ({ item }) => {
    // const [colleges] = useColleges()
    // console.log(colleges[0].admission_dates);



    const { name, subject, address, email, image } = item || {};
    return (
        <div>
            <Container>
                <div className=" my-5">
                    <div className="flex flex-col lg:flex-row-reverse border px-5 py-5">
                        <div className="flex-1">
                            <img

                                src={image}
                                className="w-full object-cover rounded-lg shadow-2xl" />
                        </div>
                        <div className="flex-1 px-8 text-lg text-gray-500">
                            <h1 className="text-5xl font-bold capitalize">Name:{name}</h1>
                            <div className="flex justify-between items-center space-y-8">
                                <p className="">
                                    Email: {email}
                                </p>
                                <p className="">
                                    Subject: {subject}
                                </p>
                            </div>
                            <p className="">
                                Address: {address}
                            </p>
                            <div>
                                <div className="flex items-center justify-between space-y-4">
                                    {/* <p>{colleges[0].name}</p> */}
                                    {/* <h1>{colleges[0].admission_dates}</h1> */}

                                </div>
                                {/* <p>Location: {colleges[0].location}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};


export default FormCart;