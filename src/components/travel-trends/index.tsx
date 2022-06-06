import SideLine from "../side-line";
import manHiking from "../../assets/images/man-hike-with-large-backpack-travels-forest 1.png";
import rockMountain from "../../assets/images/rock-mountains-with-desert-background-nature-landscape 2.png";
import hikersTop from "../../assets/images/hikers-top 1.png";

const TravelTrends = () => {
  return (
    <div className='flex justify-between my-32 items-center'>
      <div className='flex flex-[0.63]'>
        <img
          src={manHiking}
          alt=''
          className='w-[13rem] h-[18rem] rounded-md'
        />
        <img
          src={rockMountain}
          alt=''
          className='w-[13rem] h-[18rem] scale-125 rounded-md'
        />
        <img
          src={hikersTop}
          alt=''
          className='w-[13rem] h-[18rem] rounded-md'
        />
      </div>
      <div className='flex-[0.35]'>
        <SideLine
          title='Latest Travel Trends'
          body='there are real opportunities for companies that keep pace with the latest travel trends and embrace new ways of doing business.'
          buttonTitle='View More'
        />
      </div>
    </div>
  );
};

export default TravelTrends;
