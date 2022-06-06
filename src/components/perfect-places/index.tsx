import Place from "../place";
import SideLine from "../side-line";
import sunsetSea from "../../assets/images/sunset-sea 1.png";
import wideAngle from "../../assets/images/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass 1.png";
import groupParty from "../../assets/images/group-man-woman-enjoy-camping-picnic-barbecue-lake-with-tents-background-young-mixed-race-asian-woman-man-young-people-s-hands-toasting-cheering-bottles-beer 1.png";
import { ArrowRight } from "../../assets/svg";

const PerfectPlaces = () => {
  return (
    <div className='flex justify-between mb-16'>
      <div className='flex-[0.33]'>
        <SideLine
          title='Find The Perfect Place'
          body='A list of the top 75 Best Tourist Places to See in world  for a perfect holiday or a trip.'
          buttonTitle='View More'
        />
      </div>
      <div className='flex flex-[0.63] justify-between relative'>
        <Place rating={4} place='Bangalore' image={sunsetSea} />
        <Place rating={4} place='Coorg' image={wideAngle} />
        <Place rating={3} place='Island' image={groupParty} />
        <div className='absolute top-[45%] -right-2'>
          <button
            type='button'
            className='bg-primary w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center'>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfectPlaces;
