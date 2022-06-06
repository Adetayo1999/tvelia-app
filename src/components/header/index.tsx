import Logo from "../logo";
import Navbar from "../navbar";

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className=''>
        <Logo />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
