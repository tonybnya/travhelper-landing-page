const MemberCard = ({ name, github, linkedin, twitterx, href, role, profile }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={profile} alt="profile image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">  
          <a href={href}>
            <img src={github} alt="social media icon" />
          </a>
          <a href={href}>
            <img src={linkedin} alt="social media icon" />
          </a>
          <a href={href}>
            <img src={twitterx} alt="social media icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;