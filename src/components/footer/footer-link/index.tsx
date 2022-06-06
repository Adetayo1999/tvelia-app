type FooterLinkType = {
  text: string;
};

const FooterLink = ({ text }: FooterLinkType) => {
  return (
    <a href='/' className='text-[#C6C6C6] text-sm mb-3'>
      {text}
    </a>
  );
};

export default FooterLink;
