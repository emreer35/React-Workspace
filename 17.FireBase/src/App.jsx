import Navbar from "./components/Navbar";
import RouterConfig from "./routers/RouterConfig";
import { Slide, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <RouterConfig />
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={3000}
      />
    </>
  );
};

export default App;
