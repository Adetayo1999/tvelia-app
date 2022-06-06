type ContainerType = {
  title: string;
  children: React.ReactNode;
};

const Container = ({ title, children }: ContainerType) => {
  return (
    <div className='mb-20'>
      <div className='text-center mb-8'>
        <h2 className='text-[2rem] font-black'>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Container;
