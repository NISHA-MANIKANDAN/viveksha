import  { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Doctor/Login';
import Dashboard from './pages/Admin/Dashboard';

import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import AddPatient from './pages/Admin/AddPatient';

const App = () => {
    const { aToken } = useContext(AdminContext);

    return aToken ? (
        <div className='bg-[#F8F9FD]'>
            <ToastContainer />
            <Navbar />
            <div className='flex items-start'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/admin-dashboard' element={<Dashboard />} />
                    <Route path='/add-patients' element={<AddPatient />} />
                    <Route path='/add-doctor' element={<AddDoctor />} />
                    <Route path='/doctor-list' element={<DoctorsList />} />
                </Routes>
            </div>
        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
