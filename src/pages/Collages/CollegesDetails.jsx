import { useLoaderData } from "react-router-dom";
import Container from "../../component/common/Container";
import { BsArrow90DegRight } from "react-icons/bs";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoWalletOutline,
} from "react-icons/io5";
import bgImg from "../../assets/graduate/graduate3.jpg";

const CollegesDetails = () => {
  const { image, events, event_details, coast } = useLoaderData();

  // Auto update year logic for 2026-27
  const currentYear = new Date().getFullYear();
  const nextYear = (currentYear + 1).toString().slice(-2);
  const dynamicSession = `${currentYear}-${nextYear}`;

  return (
    <section className="bg-gray-50/50 py-10">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="text-[#890c25] font-black tracking-widest text-xs uppercase bg-[#890c25]/5 px-4 py-2 rounded-full">
            Campus Events
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-4 tracking-tighter uppercase">
            College Details & <span className="text-[#890c25]">Events</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative group overflow-hidden rounded-[2rem] shadow-xl border-8 border-white">
              <img
                className="h-[400px] md:h-[500px] object-cover w-full group-hover:scale-105 transition-transform duration-1000"
                src={image}
                alt="Event Header"
              />
              <div className="absolute top-6 left-6 bg-[#890c25] text-white px-6 py-2 rounded-full font-bold shadow-lg">
                Academic Year {dynamicSession}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 tracking-tight uppercase border-l-8 border-[#890c25] pl-6">
                About The Event
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
                {event_details} Join us for our Annual Cultural Festival,
                celebrating diversity through art, music, and dance. Experience
                the vibrant college community.
              </p>

              <div className="space-y-12">
                {/* Event 1 */}
                <div className="flex flex-col md:flex-row gap-6 group">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#890c25] transition-colors duration-300">
                    <BsArrow90DegRight className="text-2xl text-[#890c25] group-hover:text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">
                      {events[0]?.event1 || "Orientation Week"}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      <b className="text-gray-800">Description:</b> Designed to
                      help new students acclimate to college life through
                      informative sessions and campus tours.
                      <br />
                      <b className="text-gray-800 pt-2 block">
                        Activities:
                      </b>{" "}
                      Welcome speeches, informational booths, and social mixers.
                    </p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex flex-col md:flex-row gap-6 group">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#890c25] transition-colors duration-300">
                    <BsArrow90DegRight className="text-2xl text-[#890c25] group-hover:text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">
                      {events[0]?.event2 || "Cultural Festival"}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      <b className="text-gray-800">Purpose:</b> To promote
                      cultural awareness, unity, and appreciation among students
                      through music and food.
                      <br />
                      <b className="text-gray-800 pt-2 block">
                        Activities:
                      </b>{" "}
                      International cuisines, dance performances, and art
                      exhibitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-6">
            {/* Info Card */}
            <div className="bg-[#890c25] p-8 rounded-[2rem] text-white shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-6 opacity-60">
                General Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <IoTimeOutline className="text-3xl opacity-70" />
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-60">
                      Admission Session
                    </p>
                    <p className="text-lg font-bold">{dynamicSession}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <IoWalletOutline className="text-3xl opacity-70" />
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-60">
                      Admission Cost
                    </p>
                    <p className="text-2xl font-black">${coast}</p>
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Education
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Campus Life
                  </span>
                </div>
              </div>
            </div>

            {/* Promo/New Event Card */}
            <div
              className="relative h-[450px] rounded-[2rem] overflow-hidden group shadow-xl flex items-center p-8 text-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(137, 12, 37, 0.9), rgba(0,0,0,0.2)), url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-white space-y-4">
                <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tighter">
                  Bangladesh Studies Event
                </h2>
                <p className="text-sm opacity-80 font-medium">
                  Join us to learn about the glorious history and culture of
                  Bangladesh.
                </p>
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <p className="flex items-center justify-center gap-2 font-bold mb-1">
                    <IoTimeOutline /> 10:30 AM
                  </p>
                  <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80">
                    <IoLocationOutline /> Main Auditorium
                  </p>
                </div>
                <button className="w-full bg-white text-[#890c25] py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CollegesDetails;
