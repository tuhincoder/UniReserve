import img1 from '../../../assets/graduate/graduate1.jpg'
import img2 from '../../../assets/graduate/graduate2.jpg'
import img3 from '../../../assets/graduate/graduate3.jpg'
import img4 from '../../../assets/graduate/graduate4.jpg'
import img5 from '../../../assets/graduate/graduate5.jpg'
import img6 from '../../../assets/graduate/graduate6.jpg'
import img7 from '../../../assets/graduate/graduate7.jpg'
import Container from '../../../component/common/Container'

const Gallery = () => {
    return (
        <div className='my-10'>
            <Container>
                <div>
                    <h2 className="text-2xl capitalize text-center mb-3"> different college graduate&apos;s group pictures.
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='border p-3 rounded '>
                            <img src={img1} alt="" className="rounded object-cover w-full md:w-[300px] h-[250px] hover:scale-105 duration-700 " />
                        </div>
                        <div className='border p-3 rounded'>
                            <img src={img2} alt="" className="rounded object-cover w-full md:w-[300px] h-[250px] hover:scale-105 duration-700" />
                        </div>
                        <div className='border p-3 rounded'>
                            <img src={img3} alt="" className="rounded object-cover w-full md:w-[300px] h-[250px] hover:scale-105 duration-700" />
                        </div>
                        <div className='border p-3 rounded'>
                            <img src={img4} alt="" className="rounded object-cover w-full md:w-[300px] h-[250px] hover:scale-105 duration-700" />
                        </div>
                        <div className='border p-3 rounded'>
                            <img src={img5} alt="" className="rounded object-cover w-full md:w-[300px]h-[250px] hover:scale-105 duration-700" />
                        </div>
                        <div className='border p-3 rounded'>
                            <img src={img6} alt="" className="rounded object-cover w-full md:w-[300px] h-[250px] hover:scale-105 duration-700" />
                        </div>
                        <div className='border p-3 rounded'>
                            <img src={img7} alt="" className="rounded object-cover w-full md:w-[300px] h-[250px] hover:scale-105 duration-700" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Gallery;