import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Home-Cart-Checkout/HAF/Header.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
