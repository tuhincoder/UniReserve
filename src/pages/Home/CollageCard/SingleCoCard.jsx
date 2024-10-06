

const SingleCoCard = ({ singleData }) => {
    const { image, name, admission_dates, events, research_history, sports } = singleData || {};
    return (
        <div>
            <div className="card glass">
                <figure>
                    <img
                        className="w-full h-[320px] object-cover"

                        src={image}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoCard;