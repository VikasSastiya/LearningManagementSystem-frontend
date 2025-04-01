import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "../src/Components/Footer";
import HomeLayout from "../src/Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      {/* <HomeLayout /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
