type StatsType = {
  title: string;
  subTitle: string;
  Icon: React.ComponentType;
};

const Stats = ({ title, subTitle, Icon }: StatsType) => (
  <div className=' flex  items-center mb-8 md:mb-0 p-5 rounded-md md:rounded-none md:p-0 bg-primary md:bg-transparent bg-opacity-10'>
    <div className='mr-6'>
      <Icon />
    </div>
    <div className=''>
      <h3 className='text-primary font-black'>{title}</h3>
      <p className='text-[#000000] text-opacity-50'>{subTitle}</p>
    </div>
  </div>
);

export default Stats;
