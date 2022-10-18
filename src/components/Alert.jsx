const Alert = ({ children }) => {
  return (
    <div
      className="bg-rose-100 border-rose-600 text-rose-600 border-l-4 p-3"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>{children}</p>
    </div>
  );
};

export default Alert;
