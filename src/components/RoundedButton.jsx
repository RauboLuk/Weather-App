const RoundedButton = ({ children }) => {
  return (
    <button className="bg-gray-dark text-gray-light w-10 h-10 rounded-full focus:ring-2 focus:ring-blue-400">
      {children}
    </button>
  );
};

export default RoundedButton;
