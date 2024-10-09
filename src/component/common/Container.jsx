/* eslint-disable react/prop-types */


const Container = ({ children }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 md:px-0">
            {children}
        </div>
    );
};

export default Container;