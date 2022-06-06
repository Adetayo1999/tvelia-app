type StatsType = {
  title: string;
  subTitle: string;
  Icon: React.ComponentType;
};

const Stats = ({ title, subTitle, Icon }: StatsType) => (
  <div className=' flex  items-center'>
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
