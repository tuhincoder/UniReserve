import { Link } from 'react-router-dom';
import errImg from '../../assets/login/error2.jpg'

const ErrorPage = () => {
    return (

        <div className='bg-[#890c25] h-screen'>
            <div>
                <img className='w-1/3 h-1/3 mx-auto' src={errImg} alt="" />
                <Link to='/' className='btn flex border mt-2 border-sky-400 text-xl text-stone-800 font-serif mx-auto w-1/4'>Back To Home</Link>
            </div>

        </div>

    );
};

export default ErrorPage;