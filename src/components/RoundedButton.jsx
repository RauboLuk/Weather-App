const RoundedButton = ({ children, handleClick, active }) => {
  return (
    <button
      className={`${
        active ? "text-gray-dark bg-gray-light" : "bg-gray-dark text-gray-light"
      } w-10 h-10 rounded-full focus:ring-2 focus:ring-blue-400`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
