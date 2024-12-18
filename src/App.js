import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import AuthPage from "./pages/auth/authPage";
import ProductContextProvider from "./context/productContext";
import UserContextProvider from "./context/userContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./pages/error/errorPage";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement:<ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "orders",
          element: <Order/>,
        },
        {
          path: "signin",
          element: <AuthPage type={"signin"} />,
        },
        {
          path: "signup",
          element: <AuthPage type={"signup"} />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <ToastContainer autoClose={2000} pauseOnHover={false} closeOnClick/>
      <ProductContextProvider>
        <UserContextProvider>
          <RouterProvider router={browserRouter} />
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
