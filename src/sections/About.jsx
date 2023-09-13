import copyrightSign from "../assets/icons/copyright-sign.svg";
import logo from "../assets/images/logo.png"
import { teamMembers } from "../constants";

const About = () => {
  return (
    <footer id="about" className="max-container">
      <div className='flex justify-between gap-20 flex-wrap items-center max-lg:flex-col max-lg:items-center'>
        <div className='flex flex-col items-center'>
          <a href='/'>
            <img
              src={logo}
              alt='logo'
              width={150}
              height={46}
              className='m-0 cursor-pointer hover:scale-110'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-justify text-white-400 sm:max-w-sm'>
          One of our team members has a relative who has asked him to research a trip to South Africa for his work. As he browsed numerous websites and other sources, he realized how difficult it was to get information on hotels, restaurants and flights all in one place. Not to mention the fact that most sites automatically require you to create an account to access certain information: this is where the idea behind <span className="text-main-green font-bold">TravHelper</span> came from.
          </p>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {teamMembers.map((member) => (
            <div key={member.name}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {member.name}
              </h4>
              <ul>
                {member.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default About;