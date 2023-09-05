import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../Features/Actions";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const mode = useSelector((state) => state.actions.mode.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const btnStyle = {
    backgroundColor: "rgba(0,0,0,0.15)",
    width: "100%",
    height: "15%",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 10px 0 10px",
    fontSize: "14px",
  };

  return (
    <div className="absolute bottom-[0] bg-white left-0 h-[40%] w-full bg rounded-tr-xl rounded-tl-xl flex flex-col items-center gap-4 p-2 ">
      <button style={btnStyle} className="mt-5">
        <svg
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 26.5659H18.6667V22.2326H0V26.5659ZM0 0.565918V4.89925H28V0.565918H0ZM0 15.7326H28V11.3993H0V15.7326Z"
            fill="black"
          />
        </svg>
        Likes and bookmarks
      </button>
      <button style={btnStyle} onClick={() => navigate("/Settings")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-settings"
          width="28"
          height="27"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        </svg>
        Settings and privacy
      </button>

      <button style={btnStyle} onClick={() => dispatch(setMode())}>
        <span className="w-[35px] h-[50%] rounded-xl bg-white flex items items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-filled"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={mode ? { translate: "77%" } : null}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </span>
        {mode ? "Light mode" : "Dark mode"}
      </button>

      <button className="flex items-center gap-[10px] pr-[10px] pl-[10px] self-start">
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 7.23258L21.744 9.58258L25.872 13.8993H9.6V17.2326H25.872L21.744 21.5326L24 23.8993L32 15.5659L24 7.23258ZM3.2 3.89925H16V0.565918H3.2C1.44 0.565918 0 2.06592 0 3.89925V27.2326C0 29.0659 1.44 30.5659 3.2 30.5659H16V27.2326H3.2V3.89925Z"
            fill="black"
          />
        </svg>
        Log out
      </button>
    </div>
  );
};

export default ProfileMenu;
