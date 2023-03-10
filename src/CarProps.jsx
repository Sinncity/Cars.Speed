const CarProps = (props) => {
  const { Make, Model, Color } = props;

  return (
    <div>
      <h3>{`
      ${Make}:
      ${Model}:
      ${Color}.`}</h3>
    </div>
  );
};

export default CarProps;
