import Rating from "../rating";

type TopRatedProps = {
  image: string;
  rating: number;
  heading: string;
  place: string;
};

const TopRated = ({ image, rating, heading, place }: TopRatedProps) => {
  return (
    <div className='w-[14rem] overflow-hidden'>
      <div className='rounded-[.625rem] overflow-hidden cursor-pointer'>
        <img src={image} alt={place} className=' transition hover:scale-105' />
      </div>
      <div className='py-2 px-1'>
        <h3 className='mt-1 mb-2 text-[#000000] text-opacity-50'>{heading}</h3>
        <p className='mb-2 text-[#FFD4BF]'>{place}</p>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default TopRated;
