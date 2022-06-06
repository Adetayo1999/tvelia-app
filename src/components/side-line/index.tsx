import Button from "../button";

type SideLineProps = {
  title: string;
  body: string;
  buttonTitle: string;
};

const SideLine = ({ title, body, buttonTitle }: SideLineProps) => {
  return (
    <div className=''>
      <h1 className='font-black text-[2.7rem] leading-[3.5rem] mb-7'>
        {title}
      </h1>
      <p className='text-[#000000] text-opacity-50 mb-5'>{body}</p>
      <Button>{buttonTitle}</Button>
    </div>
  );
};

export default SideLine;
