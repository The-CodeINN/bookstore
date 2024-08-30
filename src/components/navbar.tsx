import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
// import SearchDialog from 'app/components/SearchDialog';
// import Menu from '@/icons/Menu';
// import X from '@/icons/X';
import { Menu, Search, X } from 'lucide-react';
// import navLinks from '@/lib/utils/navLinks';
import useScroll from '../libs/useScroll';

const NavBar = () => {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScroll();

  const [openNav, setOpenNav] = useState(false);

  const closeNav = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    document.body.style.overflowY = openNav ? 'hidden' : 'scroll';
  }, [openNav]);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 25) _classList.push('!shadow');
    setNavClassList(_classList);
  }, [scroll.y]);

  const navLinks = [
    {
      name: 'Home',
      href: '/',
      position: 'main',
      icon: null,
    },
    {
      name: 'About Us',
      href: '/about-us',
      position: 'main',
      icon: null,
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
      position: 'main',
      icon: null,
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-20 bg-skin-base ${navClassList.join(' ')}`}
      >
        <NavigationMenu.Root
          aria-label='primary'
          className='main-navigation padding-x max-width relative m-auto flex max-w-6xl items-center justify-between py-4'
        >
          <div className='flex basis-1/3 justify-start md:hidden'>
            <button
              type='button'
              title='menu'
              className='p-1'
              onClick={() => setOpenNav(true)}
            >
              <Menu />
            </button>
          </div>

          <div className='flex basis-1/3 justify-center md:justify-start'>
            <Link
              to='/'
              className='font-serif text-2xl font-semibold md:text-3xl'
            >
              Next
            </Link>
          </div>

          <NavigationMenu.List className='flex basis-1/3 gap-x-2 text-lg md:gap-x-4'>
            <NavigationMenu.Item className='nav-menu'>
              {/* <SearchDialog /> */}
              <Search />
            </NavigationMenu.Item>

            {navLinks
              .filter((nav) => nav.position === 'main')
              .map((nav) => (
                <NavigationMenu.Item
                  key={nav.name}
                  className='hidden nav-menu md:list-item'
                >
                  <Link
                    to={nav.href}
                    className='flex h-full items-center gap-x-2 py-1 pl-1 pr-2'
                  >
                    {nav.icon}{' '}
                    <span className='hidden md:inline'>{nav.name}</span>
                  </Link>
                </NavigationMenu.Item>
              ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-skin-dark transition-all delay-300 duration-500 md:hidden ${
          openNav ? 'opacity-50' : 'hidden opacity-0'
        }`}
        onClick={closeNav}
      />
      <div
        className={`fixed top-0 z-30 flex h-screen max-h-screen w-10/12 flex-col items-center overflow-y-scroll bg-skin-base p-4 transition-transform duration-300 md:hidden ${
          openNav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type='button'
          title='Close Menu'
          className='self-end p-1'
          onClick={closeNav}
        >
          <X className='scale-125' />
        </button>
        <div className='flex flex-col items-center gap-2'>
          <div className='font-serif text-2xl font-medium'>Next Book Store</div>
          <p className='text-center'>
            One of the best book stores <br />
            in Myanmar
          </p>
        </div>

        <NavigationMenu.Root
          orientation='vertical'
          className='mt-4 mb-6 self-stretch'
        >
          <NavigationMenu.List className='flex flex-col items-start gap-x-2 divide-y text-xl md:gap-x-4'>
            <NavigationMenu.Item className='flex w-full flex-col'>
              <Link
                to='/'
                className='flex items-center gap-x-2 py-1 px-2 text-xl'
                onClick={closeNav}
              >
                <span>Home</span>
              </Link>
            </NavigationMenu.Item>

            {navLinks
              .filter((nav) => nav.position === 'main')
              .map((nav) => (
                <NavigationMenu.Item
                  key={nav.name}
                  className='flex w-full flex-col'
                  onClick={closeNav}
                >
                  <Link
                    to={nav.href}
                    className='flex items-center gap-x-2 py-1 px-2 text-xl'
                  >
                    <span>{nav.name}</span> {nav.icon}
                  </Link>
                </NavigationMenu.Item>
              ))}

            <NavigationMenu.Item className='flex w-full flex-col'>
              <Link
                to='/about-us'
                className='flex items-center gap-x-2 py-1 px-2 text-xl'
                onClick={closeNav}
              >
                <span>About Us</span>
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className='flex w-full flex-col'>
              <Link
                to='/contact-us'
                className='flex items-center gap-x-2 py-1 px-2 text-xl'
                onClick={closeNav}
              >
                <span>Contact Us</span>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </>
  );
};

export { NavBar };
