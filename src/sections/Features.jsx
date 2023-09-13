import { features } from "../constants";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <section id='features' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Main <span className='text-main-green font-bold'>Features</span>
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-white text-justify'>
          Discover TravHelper and experience some cool features to make your trips easier than ever, with a simple and intuitive design app. world of comfort, design, and value
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {features.map((feature) => (
          <FeatureCard key={feature.name} {...feature} />
        ))}
      </div>
  </section>
  )
}

export default Features;