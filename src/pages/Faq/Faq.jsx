import Container from "../../component/common/Container";
import faqImg from '../../assets/graduate/graduate1.jpg'
import { useState } from "react";

const Faq = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const data = [
        { title: ' What are the basic requirements for college admission?', color: 'green', description: 'Admission requirements vary depending on the college, but most require a high school diploma or equivalent, transcripts, standardized test scores (like SAT or ACT), and letters of recommendation. Some colleges may also require a personal statement or interview.' },

        { title: 'When should I apply for college admission?', color: 'sky', description: 'It is best to start applying during your senior year of high school. Many colleges have application deadlines in the fall or early winter, typically between November and January. Be sure to check the specific deadlines for each college you&apos;re interested in.' },
        { title: ' How do I apply for financial aid for college?', color: 'purple', description: 'To apply for financial aid, you&apos;ll need to complete the Free Application for Federal Student Aid (FAFSA) form. This will help determine your eligibility for grants, loans, and work-study programs. Some colleges may also have additional financial aid applications, so check with each institution fo' },


    ];

    return (
        <div className="my-10 ">
            <Container>

                <div className="flex flex-col md:flex-row h-[400px] ">
                    {/* image */}
                    <div className="flex-1 ">
                        <img className=" rounded-xl px-5 py- w-full object-cover h-[350px]" src={faqImg} alt="" />
                    </div>
                    {/* faq */}
                    <div className="flex-1   ">

                        <div>
                            <h5 className="text-[#890c25] font-bold ">Some Question Answer</h5>
                            <p className="font-medium font-serif md:text-5xl text-lg">Frequently asked
                                questions</p>
                            <div className="space-y-4 p-2 ">
                                {data?.map((data, idx) => (
                                    <div key={idx}>
                                        {/* header / Title */}
                                        <div onClick={() => handleToggle(idx)} className={`px- md:px-8 py-3 ${idx === 0 ? 'bg-green-200 border-green-500' : idx === 1 ? 'bg-sky-200 border-sky-500' : idx === 2 ? 'bg-purple-200 border-purple-500' : idx === 3 ? 'bg-amber-200 border-amber-500' : idx === 4 ? 'bg-red-200 border-red-500' : 'bg-orange-200 border-orange-500'} border-l-[3px] cursor-pointer`}>
                                            <div className="flex items-center">
                                                <span>
                                                    <svg className={`mr-4 ${idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900' : 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                                                </span>
                                                <h4
                                                    className={`${idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl`}>
                                                    {data.title}
                                                </h4>
                                            </div>
                                        </div>
                                        {/* body / content  */}
                                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden">
                                                <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${idx === 0 ? 'text-green-900 bg-green-200 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-200 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-200 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-200 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-200 border-red-500' : 'text-orange-900 bg-orange-200 border-orange-500'} `}>
                                                    {data?.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faq;