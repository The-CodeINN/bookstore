import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-skin-base to-skin-muted text-skin-dark'>
      <div className='text-center'>
        <h1 className='mb-4 font-serif text-9xl font-bold'>404</h1>
        <h2 className='mb-8 font-serif text-4xl font-light'>Page Not Found</h2>
        <p className='mb-8 text-lg'>
          We're sorry, the page you requested could not be found.
        </p>
        <Link
          to='/'
          className='group inline-flex items-center rounded-full bg-skin-accent px-6 py-3 text-skin-base transition-colors hover:bg-skin-accent-dark'
        >
          <Home className='mr-2 h-5 w-5' />
          <span className='mr-2'>Return Home</span>
          <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
