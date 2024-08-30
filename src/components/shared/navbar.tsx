import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Contact, Home, LibraryBig, Menu, Search, X } from "lucide-react";
import useScroll from "../../libs/useScroll";
import SocialGroup from "./socialGroup";

const NavBar = () => {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScroll();
  const [openNav, setOpenNav] = useState(false);

  const closeNav = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    document.body.style.overflowY = openNav ? "hidden" : "scroll";
  }, [openNav]);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 25) _classList.push("!shadow");
    setNavClassList(_classList);
  }, [scroll.y]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home /> },
    { name: "About Us", href: "/about-us", icon: <Box /> },
    { name: "Contact Us", href: "/contact-us", icon: <Contact /> },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-20 bg-skin-base ${navClassList.join(" ")}`}
      >
        <nav className='relative m-auto flex max-w-6xl items-center justify-between px-4 py-5'>
          <div className='flex md:hidden'>
            <button
              type='button'
              title='menu'
              className='p-1'
              onClick={() => setOpenNav(true)}
            >
              <Menu />
            </button>
          </div>

          <div className='flex justify-center md:justify-start'>
            <Link
              to='/'
              className='font-serif text-2xl font-semibold md:text-3xl flex items-center gap-2'
            >
              <span>Stoc</span>
              <LibraryBig size={30} />
            </Link>
          </div>

          <div className='flex items-center gap-x-2 text-lg md:gap-x-4'>
            <button type='button' title='search' className='p-1'>
              <Search />
            </button>

            {navLinks.map((nav) => (
              <Link
                key={nav.name}
                to={nav.href}
                className='hidden items-center gap-x-2 py-1 pl-1 pr-2 md:flex'
              >
                {nav.icon}
                <span className='hidden md:inline'>{nav.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {openNav && (
        <div
          className='fixed inset-0 z-30 bg-skin-dark opacity-50 md:hidden'
          onClick={closeNav}
        />
      )}
      <div
        className={`fixed top-0 z-30 flex h-screen w-10/12 flex-col items-center overflow-y-scroll bg-skin-base p-4 transition-transform duration-300 md:hidden ${
          openNav ? "translate-x-0" : "-translate-x-full"
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
          <div className='font-serif text-2xl font-medium'>Stoc Book Store</div>
          <p className='text-center'>
            One of the best book stores <br />
            in Town
          </p>
        </div>

        <nav className='mt-4 mb-6 w-full'>
          <ul className='flex flex-col items-start divide-y text-xl'>
            {navLinks.map((nav) => (
              <li key={nav.name} className='w-full' onClick={closeNav}>
                <Link
                  to={nav.href}
                  className='flex items-center gap-x-2 py-3 px-2 text-xl'
                >
                  {nav.icon}
                  <span>{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialGroup placeBottom />
      </div>
    </>
  );
};

export { NavBar };
