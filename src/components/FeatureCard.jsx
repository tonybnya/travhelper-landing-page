const FeatureCard = ({ imgURL, name }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[182px]' />
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
    </div>
  );
};

export default FeatureCard;