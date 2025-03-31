const Icon = ({
  iconName,
  iconClass,
}: {
  iconName: string;
  iconClass?: string;
}) => {
  return (
    <div>
      <span className={`material-symbols-outlined  ${iconClass}`}>
        {iconName}
      </span>
    </div>
  );
};

export default Icon;
