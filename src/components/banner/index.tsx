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
      <div className='flex flex-col md:flex-row relative justify-end mb-14'>
        <div className='static md:absolute md:left-0 md:top-[15%] mb-8 md:mb-0'>
          <h1 className='text-2xl md:text-[3.75rem] leading-[2rem] md:leading-[4.375rem] font-black'>
            Its Time For New <br /> Adventures,Escapes thrills & <br />
            experiences
          </h1>
          <p className='flex  items-center mt-5'>
            <span className='w-[1.5rem] md:w-[2.5rem] mr-4 h-[1.5rem] md:h-[2.5rem] flex justify-center items-center rounded-full bg-primary cursor-pointer'>
              <span className='hidden md:block'>
                <PlayIcon />
              </span>
              <span className='block md:hidden'>
                <PlayIcon scale={0.6} />
              </span>
            </span>
            <span className='text-xs md:text-base'>Play Video</span>
          </p>
        </div>

        <div className=''>
          <img
            src={youngwomanImage}
            className='w-full md:w-[40rem] h-[15rem] md:h-[25rem]'
            alt='young woman'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between md:items-center'>
        <Stats title='24,000' subTitle='Travel Experiences' Icon={CarIcon} />
        <Stats title='55+' subTitle='Countries' Icon={WebIcon} />
        <Stats title='Best Price' subTitle='Guaranteed' Icon={MoneyIcon} />
        <Stats title='84 Million+' subTitle='User per year' Icon={UserIcon} />
      </div>
    </div>
  );
};

export default Banner;
