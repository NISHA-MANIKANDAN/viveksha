import  { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = () => {
        if (aToken) {
            setAToken(''); // Clear token in context
            localStorage.removeItem('aToken'); // Clear token from localStorage
        }
        navigate('/'); // Redirect to home or login page
    };

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                {/* <img
                    className='w-36 sm:w-40 cursor-pointer'
                    src={assets.admin_logo}
                    alt="Admin Logo"
                /> */}
                <p className='border px-2.5 py-0.5 rounded-full text-gray-600'>
                    Admin Panel
                </p>
            </div>
            <button
                onClick={logout}
                className='bg-primary text-white text-sm px-10 py-2 rounded border border-gray-500'
            >
                Logout
            </button>
        </div>
    );
};

export default Navbar;