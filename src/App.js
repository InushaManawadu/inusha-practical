import "./App.css";
import Products from "./Components/CartItem/Products";
import Checkout from "./Components/Checkout/Checkout";
import Sidebar from "./Components/Sidebar/Sidebar";

import './index.css'

function App() {
  return (
    <div className="grid-container">
        <div className="content">
          <div className="sidebar"><Sidebar/></div>
          <div className="main">
            <Products />
          </div>
        </div>
        {/* <Checkout /> */}
    </div>
  );
}

export default App;
