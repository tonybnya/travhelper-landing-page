import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitterx from '../assets/icons/twitterx.svg';
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

        <div className='flex flex-1 justify-between lg:gap-4 gap-2 items-center flex-wrap'>
          {teamMembers.map((member) => (
            <div key={member.name} className="w-full max-w-[250px] bg-gray-700 border border-gray-200 rounded-lg shadow">
              <div className="flex flex-col items-center py-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={member.profile} alt="profile image" />
                <h5 className="mb-1 text-xl font-bold font-palanquin text-white">{member.name}</h5>
                <span className="text-sm text-white font-montserrat">{member.role}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">  
                  <div className="flex">
                    <a href={member.href1}>
                      <img
                        src={github}
                        alt="github icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                  <div className="flex">
                    <a href={member.href2}>
                      <img
                        src={linkedin}
                        alt="linkedin icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                  <div className="flex">
                    <a href={member.href3}>
                      <img
                        src={twitterx}
                        alt="twitter x icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                </div>
              </div>
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