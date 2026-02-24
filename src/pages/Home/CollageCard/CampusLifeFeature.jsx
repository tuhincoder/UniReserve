import { FaImages } from "react-icons/fa"; // Icon import korte hobe
import { Link } from "react-router-dom"; // Link import korte hobe

const CampusLifeFeature = () => {
  const gallery = [
    {
      id: 1,
      title: "Modern Library",
      img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Tech Lab",
      img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Sports Complex",
      img: "https://images.pexels.com/photos/159515/football-footballer-stadium-ball-159515.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Student Cafe",
      img: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#890c25]">
            <FaImages />
            <span className="font-black text-[10px] uppercase tracking-widest">
              Visual Experience
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">
            Campus <span className="text-[#890c25]">Life</span>
          </h2>
        </div>
        <Link
          to="/gallery"
          className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#890c25] pb-1 hover:text-[#890c25] transition-all"
        >
          View Full Gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-black uppercase text-xs tracking-widest italic">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusLifeFeature;
