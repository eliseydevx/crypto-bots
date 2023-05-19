import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import Authorization from "./pages/Authorization";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/crypto-bots" element={<Authorization />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>

      <NavBar />
    </div>
  );
}

export default App;
