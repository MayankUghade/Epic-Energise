import "./global.css";
import { Home } from "./Pages/Home";
import { ExerciseDetails } from "./Pages/ExerciseDetails";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
