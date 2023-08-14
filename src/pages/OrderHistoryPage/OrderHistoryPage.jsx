import "./OrderHistoryPage.css";
import {checkToken} from "../../utilities/users-service"

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log('expDate', expDate);
  }
  return (
    <main className="OrderHistoryPage">
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}

