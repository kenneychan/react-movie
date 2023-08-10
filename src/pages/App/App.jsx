import "./App.css";
import { useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>  
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
