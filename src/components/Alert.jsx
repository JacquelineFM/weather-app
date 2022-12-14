const Alert = ({ children }) => {
  return (
    <div className="py-4 px-6 shadow shadow-rose-700 rounded-lg bg-rose-600">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h3 className="text-lg text-white font-semibold">Error</h3>
        </div>
        <p className="text-white text-md">{children}</p>
      </div>
    </div>
  );
};

export default Alert;
