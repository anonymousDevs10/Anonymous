import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./HomePage";
import ProfilePage from "./Pages/ProfilePage";
import Settings from "./Pages/Settings";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Nopage from "./Pages/Nopage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/Profilepage" element={<ProfilePage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
