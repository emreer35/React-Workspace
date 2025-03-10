import logo from "../assets/images/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 bg-opacity-80">
      <div className="w-30 h-30 border-2 border-t-2 border-gray-500 dark:border-blue-300 border-solid rounded-full animate-spin">
        <img
          src={logo} // Buraya logonuzun yolunu ekleyin
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
