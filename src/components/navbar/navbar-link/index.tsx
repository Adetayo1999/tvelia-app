type NavbarLinkType = {
  text: string;
  path: string;
  active: string;
};

const NavbarLink = ({ text, path, active }: NavbarLinkType) => {
  return (
    <a
      href={path}
      className={` font-black text-[1rem] leading-[1.438rem] ${
        active === text
          ? "text-[#1D1B19] after:mx-auto after:w-[75%] after:mt-1 after:block after:h-[0.125rem] after:bg-primary"
          : "text-[#1D1B19] text-opacity-50"
      }`}>
      {text}
    </a>
  );
};

export default NavbarLink;
