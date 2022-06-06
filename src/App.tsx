import Banner from "./components/banner";
import BestPlaces from "./components/best-places";
import Destination from "./components/destination";
import Footer from "./components/footer";
import Header from "./components/header";
import Partners from "./components/partners";
import PerfectPlaces from "./components/perfect-places";
import TopExperiences from "./components/top-experiences";
import TravelTrends from "./components/travel-trends";

function App() {
  return (
    <div className=''>
      <div className='w-[90%] md:w-[88%] mx-auto py-3'>
        <Header />
        <Banner />
        <PerfectPlaces />
        <TopExperiences />
        <Destination />
        <BestPlaces />
        <TravelTrends />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}

export default App;
