import Container from "../../component/common/Container";

const Faq = () => {

    return (
        <div className="my-10 ">
            <Container>

                <div className="collapse collapse-plus bg-base-200 ">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> What are the basic requirements for college admission?</div>
                    <div className="collapse-content">
                        <p><b>Answer:</b> Admission requirements vary depending on the college, but most require a high school diploma or equivalent, transcripts, standardized test scores (like SAT or ACT), and letters of recommendation. Some colleges may also require a personal statement or interview.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">When should I apply for college admission?</div>
                    <div className="collapse-content">
                        <p><b>Answer:</b> It&apos;s best to start applying during your senior year of high school. Many colleges have application deadlines in the fall or early winter, typically between November and January. Be sure to check the specific deadlines for each college you&apos;re interested in.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium"> How do I apply for financial aid for college?</div>
                    <div className="collapse-content">
                        <p><b>Answer: </b>To apply for financial aid, you&apos;ll need to complete the Free Application for Federal Student Aid (FAFSA) form. This will help determine your eligibility for grants, loans, and work-study programs. Some colleges may also have additional financial aid applications, so check with each institution fo</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faq;