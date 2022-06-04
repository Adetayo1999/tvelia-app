import Logo from "../logo";
import Navigation from "../navbar";

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className=''>
        <Logo />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
