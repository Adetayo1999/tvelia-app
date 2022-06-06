import Container from "../container";
import landScape from "../../assets/images/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise.png";
import beautifulLandScape from "../../assets/images/beautiful-landscape-beach-sea-ocean-with-empty-chair-deck-umbrella-nearly-coconut-palm-tree-with-white-cloud-blue-sky 1.png";
import courtYard from "../../assets/images/courtyard-rural-house-building-with-grass-trees 1.png";
import woodenBench from "../../assets/images/wooden-bench-deck-lake-surrounded-by-greens 1.png";
import campingTravel from "../../assets/images/camping-travel-tourism-hike-concept-young-man-setting-up-tent-outdoors 1.png";
import beautifulGirl from "../../assets/images/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand 1.png";
import rockMountain from "../../assets/images/rock-mountains-with-desert-background-nature-landscape 1.png";
import "./styles.css";
import Rating from "../rating";

type BestPlaceImageType = {
  image: string;
  styles: string;
};

const BestPlaceImage = ({ image, styles }: BestPlaceImageType) => (
  <div className={`${styles} rounded-[.625rem] overflow-hidden`}>
    <img src={image} alt='' className=' w-full h-full ' />
  </div>
);

const BestPlaces = () => {
  return (
    <Container title='Best Places on Earth'>
      <div className='grid-container'>
        <div className='box-1 rounded-[.625rem] overflow-hidden relative'>
          <img src={landScape} alt='' className='w-full h-full' />
          <div className='absolute  text-white bottom-[5%] left-6'>
            <h3>Oceania / Africa / US </h3>
            <p>The collection of the Department of Africa.</p>
            <Rating rating={4} />
          </div>
        </div>
        <BestPlaceImage image={beautifulLandScape} styles='box-2' />
        <BestPlaceImage image={courtYard} styles='box-7' />
        <BestPlaceImage image={woodenBench} styles='box-3' />
        <BestPlaceImage image={campingTravel} styles='box-6' />
        <BestPlaceImage image={beautifulGirl} styles='box-4' />
        <BestPlaceImage image={rockMountain} styles='box-5' />
      </div>
    </Container>
  );
};

export default BestPlaces;
