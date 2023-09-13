import hamburger from "../assets/icons/hamburger.svg";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-around items-center max-container xl:justify-center'>
        <a href="/">
          <img
            src={headerLogo}
            alt="TravHelper logo"
            width={90}
            height={90}
            className='cursor-pointer hover:scale-110'
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-palanquin leading-normal text-lg font-bold text-white capitalize'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
            className="text-white"
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;