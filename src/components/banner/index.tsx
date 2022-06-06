import youngwomanImage from "../../assets/images/young-woman-vacation-by-pool 1.png";
import {
  CarIcon,
  MoneyIcon,
  PlayIcon,
  UserIcon,
  WebIcon,
} from "../../assets/svg";
import Stats from "../stats";

const Banner = () => {
  return (
    <div className='my-8 mb-20'>
      <div className='flex relative justify-end mb-14'>
        <div className=''>
          <img
            src={youngwomanImage}
            className='w-[40rem] h-[25rem]'
            alt='young woman'
          />
        </div>
        <div className='absolute left-0 top-[15%]'>
          <h1 className='text-[3.75rem] leading-[4.375rem] font-black'>
            Its Time For New <br /> Adventures,Escapes thrills & <br />
            experiences
          </h1>
          <p className='flex  items-center mt-5'>
            <span className='w-[2.5rem] mr-4 h-[2.5rem] flex justify-center items-center rounded-full bg-primary cursor-pointer'>
              <PlayIcon />
            </span>
            <span>Play Video</span>
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <Stats title='24,000' subTitle='Travel Experiences' Icon={CarIcon} />
        <Stats title='55+' subTitle='Countries' Icon={WebIcon} />
        <Stats title='Best Price' subTitle='Guaranteed' Icon={MoneyIcon} />
        <Stats title='84 Million+' subTitle='User per year' Icon={UserIcon} />
      </div>
    </div>
  );
};

export default Banner;
