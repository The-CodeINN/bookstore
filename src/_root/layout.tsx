import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
