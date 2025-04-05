const Button = ({
  btnName,
  btnClass,
  ...props
}: {
  btnName: string;
  btnClass: string;
}) => {
  return (
    <button className={`${btnClass}`} {...props}>
      {btnName}
    </button>
  );
};

export default Button;
