import Rating from "../rating";

type PlaceProps = {
  rating: number;
  place: string;
  image: string;
};

const Place = ({ rating, place, image }: PlaceProps) => (
  <div className='bg-place mr-4 w-full  mb-6 md:mb-0 md:w-[14.8rem] h-[21.059rem] rounded-[.625rem] overflow-hidden relative '>
    <img src={image} alt={place} className='w-full h-full object-cover' />
    <div className='absolute bottom-[10%] left-5 '>
      <p className='mb-1 text-white'>{place}</p>
      <Rating rating={rating} />
    </div>
  </div>
);

export default Place;
