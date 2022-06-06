import {
  FBIcon,
  GoogleIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../../assets/svg";
import Logo from "../logo";
import FooterLink from "./footer-link";

const usefulLinks = ["Home", "About", "Contact", "Blog", "Adventure"];
const supportLinks = ["FAQ", "Help", "Terms & Conditions"];
const subDetails = [
  {
    text: "569 bangalore Auroville Beach, 560001",
    Icon: LocationIcon,
  },
  {
    text: "Redliodesigns@gmail.com",
    Icon: MailIcon,
  },
  {
    text: "5659875689",
    Icon: PhoneIcon,
  },
];

type LinkWrapperType = {
  title: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ title, children }: LinkWrapperType) => {
  return (
    <div className=''>
      <h3 className='text-[#1D1B19] mb-3 font-black'>{title}</h3>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className='border-b border-primary border-opacity-20 flex justify-between mt-40 pb-7'>
      <div className='md:w-[23rem]'>
        <Logo />
        <p className='text-sm my-3 text-[#C6C6C6]'>
          An adventure is an exciting experience that is typically bold,
          sometimes risky or undertaking. Adventures may be activities with some
          potential for physical danger such as traveling, exploring, skydiving,
          mountain climbing, scuba diving, river rafting or participating in
          extreme sports.
        </p>
        <div className='flex justify-between items-center flex-wrap w-[50%]'>
          <FBIcon />
          <GoogleIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      <LinkWrapper title='Useful Links'>
        <ul>
          {usefulLinks.map((link) => (
            <li key={link}>
              <FooterLink text={link} />
            </li>
          ))}
        </ul>
      </LinkWrapper>
      <LinkWrapper title='Support Links'>
        <ul>
          {supportLinks.map((link) => (
            <li key={link}>
              <FooterLink text={link} />
            </li>
          ))}
        </ul>
      </LinkWrapper>
      <LinkWrapper title='Newsletter Subscription'>
        <ul>
          {subDetails.map(({ Icon, text }) => (
            <li
              key={text}
              className='flex  items-center mb-3 text-[#C6C6C6] text-sm'>
              <span className='mr-3'>
                <Icon />
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </LinkWrapper>
    </div>
  );
};

export default Footer;
