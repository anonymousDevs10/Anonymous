import Logo from "../assets/logo.png";
import User from "../assets/User.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* {html goes} */}
      <div className="w-full h-full overflow-hidden flex items-center justify-between">
        <div className="logo-container w-[40%] h-full flex items-center - justify-center">
          <img src={Logo} alt="logo" className="w-[100%] h-[100%]" />
          <h1 className="text-white">Anonymous</h1>
        </div>
        <img
          src={User}
          alt="Userprofilepic"
          onClick={() => navigate("/Profilepage")}
          // This onClick function will navigate to the settings page, please rewrite this function or don't delete it when redesigning this header section
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default Header;
