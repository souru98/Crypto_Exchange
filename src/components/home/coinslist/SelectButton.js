const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span onClick={onClick} className="FirstDayNight">
      {children}
    </span>
  );
};

export default SelectButton;
