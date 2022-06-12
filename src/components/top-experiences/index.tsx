import Container from "../container";
import TopRated from "../top-rated";
import beautifulLuxury from "../../assets/images/beautiful-luxury-outdoor-swimming-pool-hotel-resort 1.png";
import girlByTheSea from "../../assets/images/lady-ocean-summertime-woman-vacation 1.png";
import twoAthlete from "../../assets/images/two-athletic-man-floats-red-boat-river 1.png";
import hikersTop from "../../assets/images/hikers-top 1.png";

const TopExperiences = () => {
  return (
    <Container title='Top rated Experiences on Travel'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-4'>
        <TopRated
          heading='Beautiful luxury outdoor swimming pool hotel resort'
          place='Bangalore'
          rating={4}
          image={beautifulLuxury}
        />
        <TopRated
          heading='Patio balcony with chair around sea ocean view'
          place='Island'
          rating={4}
          image={girlByTheSea}
        />
        <TopRated
          heading='athletic man floats red boat river'
          place='South East Asia'
          rating={3}
          image={twoAthlete}
        />
        <TopRated
          heading='Beautiful hikers top mountain view '
          place='Himalayan'
          rating={3}
          image={hikersTop}
        />
      </div>
    </Container>
  );
};

export default TopExperiences;
