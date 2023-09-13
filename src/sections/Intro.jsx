import Button from "../components/Button";
import worldwide from "../assets/images/worldwide.png";

const Intro = () => {
  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:whitespace-nowrap relative z-10 pr-10'>
            TravHelper
          </span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg text-justify leading-8 mt-6 mb-14 sm:max-w-sm'>
        TravHelper is your travel companion and it will make your trips easy and safe, without efforts to find the information that fits your needs. Give it a try!
        </p>

        <a href="/">
          <Button label='Get Started' />
        </a>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-black bg-hero bg-cover bg-center'>
        <img
          src={worldwide}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
      </div>
    </section>
  )
}

export default Intro;