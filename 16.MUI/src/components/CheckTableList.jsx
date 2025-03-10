
const CheckTableList = (props) => {
  const { value, index, children } = props;
  return <div hidden={value !== index}>{children}</div>;
};

export default CheckTableList;
