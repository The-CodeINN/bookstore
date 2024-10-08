import { Link } from 'react-router-dom';
import SocialGroup from './socialGroup';
import HeartIcon from '../../assets/icons/heartIcon';

const Footer = () => {
  return (
    <footer className='mt-auto shadow-inner'>
      <div className='footer-container mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:grid-rows-4 md:gap-x-6 md:gap-y-0 md:px-8 lg:gap-x-8 lg:gap-y-2'>
        <div className='bookstore-desc col-span-2 md:row-span-3'>
          <h2 className='my-2 font-serif text-xl font-semibold'>
            Stoc Bookstore
          </h2>
          <div className='text-sm'>
            <p className='my-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a voluptate quos voluptates, quia, quidem, cumque quod nemo
              dolorum
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a voluptate quos voluptates, quia, quidem, cumque quod nemo
              dolorum
            </p>
          </div>
        </div>

        <div className='about-us md:row-span-4'>
          <h2 className='my-1 font-serif text-xl font-semibold'>Quick Links</h2>
          {quickLinks.map(({ id, href, title }) => (
            <div key={id}>
              <Link to={href} className='text-link inline-block py-1 font-sans'>
                {title}
              </Link>
            </div>
          ))}
        </div>

        <div className='services md:row-span-4'>
          <h2 className='my-1 font-serif text-xl font-semibold'>Contact</h2>
          <p className='mb-3 text-sm'>
            Email:{' '}
            <a
              href='mailto:emijere.richard@gmail.com'
              className='text-link mt-1 block text-wrap'
            >
              info@stoc.app
            </a>
          </p>
          <p className='mb-3 text-sm'>
            Phone:{' '}
            <a href='tel:+9-59-50-960-70' className='text-link mt-1 block'>
              +234 809 123 4567
            </a>
          </p>
          <p className='mb-3 text-sm'>
            Address: <span className='mt-1 block'>Lagos, Nigeria</span>
          </p>
        </div>

        <div className='social-group col-span-2 md:row-span-1 md:self-center'>
          <SocialGroup className='md:!justify-start' />
        </div>
      </div>
      <div className='copyright-notice-container bg-skin-dark'>
        <div className='copyright-notice mx-auto flex max-w-6xl flex-col items-center py-1 px-4 text-skin-base md:flex-row  md:justify-between md:px-8'>
          <span>© Copyright {new Date().getFullYear()} - Stoc Bookstore</span>
          <span>
            Crafted with{' '}
            <HeartIcon className='scale-75 fill-skin-base stroke-skin-base' />{' '}
            by{' '}
            <Link
              to='https://thecodeinn.vercel.app/about'
              className='underline decoration-dashed underline-offset-2 hover:decoration-solid'
            >
              Richard Emijere
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  );
};

const quickLinks = [
  { id: 1, title: 'About Us', href: '/about-us' },
  { id: 2, title: 'Contact Us', href: '/contact-us' },
];

export { Footer };
