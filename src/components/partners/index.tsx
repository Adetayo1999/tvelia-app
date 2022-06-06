import Container from "../container";
import allIsFine from "../../assets/images/all-is-fine-positive-cute-african-american-woman-makes-okay-gesture-gives-approval-agrees-with-something-wears-casual-sweater-says-yes-new-opportunities-being-pleased-with-new-concept 1.png";
import wellBeing from "../../assets/images/wellbeing-lifestyle-people-concept-attractive-friendly-looking-smiling-redhead-young-girl-straight-long-natural-ginger-hair-wearing-glasses-laughing-happily-enjoy-nice-relaxing-cafe-atmosphere 1.png";
import maskedWoman from "../../assets/images/woman-taking-off-mask-new-normal 1.png";
import portraitHandsome from "../../assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing 1.png";
import ShowCase from "../show-case";

const partners = [
  {
    name: "Lara Nosworthy",
    image: allIsFine,
  },
  {
    name: "Alana Baldessin",
    image: wellBeing,
  },
  {
    name: "Emma Fritzsche",
    image: maskedWoman,
  },
  {
    name: "Joel Lynas",
    image: portraitHandsome,
  },
];

const Partners = () => {
  return (
    <Container title='Our Partners'>
      <div className='flex  md:flex-row justify-center flex-wrap md:justify-between items-center mt-10'>
        {partners.map(({ name, image }) => (
          <ShowCase key={name} image={image} title={name} />
        ))}
      </div>
    </Container>
  );
};

export default Partners;
