import Rating from "../rating";

type ShowCaseType = {
  image: string;
  rating?: number;
  title: string;
};

const ShowCase = ({ image, rating, title }: ShowCaseType) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center mb-6 md:mb-0'>
      <div className=' mb-4 md:mb-0 mr-6'>
        <img src={image} alt={title} className='rounded-[0.313rem]' />
      </div>
      <div className=''>
        <h4 className=''>{title}</h4>
        {rating && <Rating rating={rating} />}
      </div>
    </div>
  );
};

ShowCase.defaultProps = {
  rating: null,
};

export default ShowCase;
