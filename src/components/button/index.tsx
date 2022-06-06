type ButtonPropsWithText = {
  text: string;
  children?: never;
};

type ButtonPropsWithChildren = {
  text?: never;
  children: string;
};

type ButtonProps = ButtonPropsWithChildren | ButtonPropsWithText;

const Button = ({ text, children }: ButtonProps) => (
  <button
    type='button'
    className='bg-primary text-white  w-[10.625rem] flex justify-center items-center py-3'>
    {text || children}
  </button>
);

export default Button;
