import img1 from "../../../assets/graduate/graduate1.jpg";
import img2 from "../../../assets/graduate/graduate2.jpg";
import img3 from "../../../assets/graduate/graduate3.jpg";
import img4 from "../../../assets/graduate/graduate4.jpg";
import img5 from "../../../assets/graduate/graduate5.jpg";
import img6 from "../../../assets/graduate/graduate6.jpg";
import img7 from "../../../assets/graduate/graduate7.jpg";
import Container from "../../../component/common/Container";

const Gallery = () => {
  const images = [
    { id: 1, src: img1, colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
    { id: 2, src: img2, colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
    { id: 3, src: img3, colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
    { id: 4, src: img4, colSpan: "lg:col-span-1", rowSpan: "lg:row-span-2" },
    { id: 5, src: img5, colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
    { id: 6, src: img6, colSpan: "lg:col-span-2", rowSpan: "lg:row-span-1" },
    { id: 7, src: img7, colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#890c25] font-black tracking-[0.3em] text-xs uppercase bg-[#890c25]/5 px-4 py-2 rounded-full">
            Memories
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-4 capitalize">
            Our Graduate&apos;s <span className="text-[#890c25]">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base font-medium">
            Celebrating the success and joy of our students across different
            colleges.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {images.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-[2rem] group border-4 border-white shadow-sm hover:shadow-2xl transition-all duration-500 ${img.colSpan} ${img.rowSpan}`}
            >
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-sm tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase">
                  Convocation {2024 + (img.id % 2)}
                </p>
              </div>

              {/* Image */}
              <img
                src={img.src}
                alt={`Graduate ${img.id}`}
                className="w-full h-full object-cover transform group-hover:scale-110 duration-1000 ease-in-out"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
