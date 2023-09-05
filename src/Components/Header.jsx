import Logo from "../assets/logo.png";
import User from "../assets/User.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full overflow-hidden flex items-center justify-between px-3">
        <div className="logo-container w-[40%] h-full flex items-center gap-3">
          <img
            src={Logo}
            alt="logo"
            className="w-[34px] h[34px] md:w-[60px] md:h-[60px]"
          />
          <h1 className="text-white">Anonymous</h1>
        </div>

        <img
          src={User}
          alt="Userprofilepic"
          onClick={() => navigate("/Profilepage")}
          className="cursor-pointer md:w-[50px] md:h-[50px] "
        />
      </div>
    </>
  );
};

export default Header;
