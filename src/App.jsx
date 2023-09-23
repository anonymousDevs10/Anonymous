import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./Components/Loading";

const LandingPage = lazy(() => import("./Pages/LandingPage"));
const HomePage = lazy(() => import("./HomePage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));
const Settings = lazy(() => import("./Pages/Settings"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Login = lazy(() => import("./Pages/Login"));
const Nopage = lazy(() => import("./Pages/Nopage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
};

export default App;
