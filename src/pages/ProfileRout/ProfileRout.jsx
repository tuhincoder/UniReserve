import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useColleges from "../../hook/useColleges";

const ProfileRout = () => {
    const axiosPublic = useAxiosPublic()
    const [colleges,] = useColleges()
    const { user } = useAuth()
    const { data: profile = [] } = useQuery({
        queryKey: ['admission', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/form?email=${user?.email}`)
            // console.log(profile.length);
            return res.data;
        }
    })


    return (
        <div>
            <div className="flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl mx-auto my-10 bg-white p-8 shadow-lg dark:bg-[#18181B]">
                <div className="group relative">
                    <img width={110} height={110} className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover" src={user?.photoURL && user?.photoURL} alt="card navigate ui" />
                    <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                    <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-2xl text-gray-700 dark:text-white/90">{user?.displayName && user?.displayName}</h1>
                    <p className="text-sm text-gray-400">{user?.email}</p>
                </div>
                <div className="flex w-full justify-between py-2">
                    <div className="space-y-1 text-center">
                        <p className="text-gray-500 dark:text-white/70">Admission </p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">{profile.length}</p>
                    </div>
                    <div className="space-y-1 text-center">
                        <p className="text-gray-500 dark:text-white/70">Colleges</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">{colleges.length}</p>
                    </div>
                    <div className="space-y-1 text-center ">
                        <p className="text-gray-500 dark:text-white/70">Selected</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">0</p>
                    </div>
                </div>
                {/* bio  */}
                <p className="pb-2 text-center text-sm text-gray-500">I am a motivated student with a strong academic background, eager to pursue my HSC and further develop my skills for a successful future</p>
                {/* social icons  */}
                {/* <div className="flex justify-between gap-4 py-2">
                    {svgArr?.map((svg, idx) => (
                        <div key={idx} className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">
                            {svg?.svg}
                        </div>
                    ))}
                </div> */}
                <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">View Profile</button>
            </div>
        </div>
    );
};

export default ProfileRout;