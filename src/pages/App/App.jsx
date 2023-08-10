import "./App.css";
import Counter from "../../components/Counter.js";
import { useSelector } from "react-redux";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <main className="App">
      <h1>App</h1>
      <Counter />
      { user ?
        <NewOrderPage />
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
