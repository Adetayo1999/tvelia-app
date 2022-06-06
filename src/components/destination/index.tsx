import Container from "../container";
import ShowCase from "../show-case";
import { destinations } from "../../data/destination.data";

const Destination = () => {
  return (
    <Container title='Destinations near you'>
      <div className='flex justify-between flex-wrap gap-y-8'>
        {destinations.map(({ title, rating, image }) => (
          <ShowCase key={title} title={title} rating={rating} image={image} />
        ))}
      </div>
    </Container>
  );
};

export default Destination;
