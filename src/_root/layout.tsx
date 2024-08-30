import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/navbar';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
