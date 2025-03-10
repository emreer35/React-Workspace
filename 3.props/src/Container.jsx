const Container = ({children}) => {
  console.log(children);

  return (
    <div>
      Burasi bir Container alainidri
      {children}
    </div>
  );
};

export default Container;
