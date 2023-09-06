import { useState, useEffect, useRef } from "react";
import "../CSS files/ProfilePage.css";
import { useNavigate } from "react-router-dom";
import { ProfileMenu } from "../Components/CompExport";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { setFollow } from "../Features/Actions";

function ProfilePage() {
  return <FirstPerson />;
}

// This component represents the main user profile page.
function FirstPerson() {
  const navigateHome = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to handle menu toggling
  const handleToggleMenu = (event) => {
    event.stopPropagation();
    setToggleMenu((prevState) => !prevState);
  };

  useEffect(() => {
    // Function to close the menu when the user clicks outside of it
    const handleClickOutside = (event) => {
      if (toggleMenu && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    if (toggleMenu) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);

  const menuRef = useRef(null);

  return (
    // JSX code for the user's profile page
    <>
      <section className="profile-page-container w-[100%] h-[100vh] relative ">
        {/* return back button and menu bar button section */}
        <div className="sticky top-1 left-0 w-[100%] h-[5%] flex items-center justify-between pr-3 pl-3 ">
          <button onClick={() => navigateHome("/Homepage")}>
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.23485L12.7249 0L0 12.5L12.7249 25L15 22.7652L4.55013 12.5L15 2.23485Z"
                fill="black"
              />
            </svg>
          </button>

          <button onClick={handleToggleMenu}>
            <svg
              width="29"
              height="24"
              viewBox="0 0 29 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24H29V20H0V24ZM0 14H29V10H0V14ZM0 0V4H29V0H0Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {/* Header content section */}
        <header className="w-[100%] h-[25%]  flex items-center pr-3 pl-3 border-b border-b-black ">
          <div className="w-[30%] h-[70%] flex flex-col items-center justify-center gap-2 ">
            <img
              src=""
              alt="profile pic"
              className="img h-[65px] w-[65px] border border-red-600 rounded-full "
            />
            <button className="bg-red-500 text-[12px] p-[4.5px] rounded-xl">
              Edit profile
            </button>
          </div>

          <div className="w-[70%] h-[70%] flex flex-col justify-center gap-2 ">
            <p className="text-xl md:text-[26px] font-bold">Anonymous</p>
            <p className="text-[12px] md:text-[18px]">
              Write something about yourself
            </p>
            <div className="text-[12px] md:text-[18px]">
              <span>{/* Return number of posts */} Posts</span>&nbsp;&nbsp;
              <span>{/*Return number of followers*/} Followers</span>
              &nbsp;&nbsp;
              <span>{/*Return number of following*/} Following</span>
              &nbsp;&nbsp;
            </div>
          </div>
        </header>

        <main>
          <div className="w-full h-[20%] flex items-center justify-around ">
            <p>Posts</p>
          </div>

          <section>{/*this section is to return the users posts*/}</section>
        </main>

        <div
          className="absolute top-0 left-0 w-full h-[100vh] bg-black/50 "
          style={toggleMenu ? { display: "block" } : { display: "none" }}
        ></div>
        <div ref={menuRef}>
          <CSSTransition
            in={toggleMenu}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <ProfileMenu />
          </CSSTransition>
        </div>
      </section>
    </>
  );
}

// This component represents what the user sees when viewing someone else's profile page.
function SecondPerson() {
  const follow = useSelector((state) => state.actions.followToggle.value);
  const followDispatch = useDispatch();

  const navigateHome = useNavigate();

  // Styles for the follow/unfollow button
  const followStyles = {
    backgroundColor: "grey",
  };

  const [menu, setMenu] = useState(false);

  // Function to handle the menu toggle
  const handMenuToggle = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <section className="profile-page-container w-[100%] h-[100vh] ">
        <div className="sticky top-1 left-0 w-[100%] h-[5%] flex items-center justify-between pr-3 pl-3 ">
          <button onClick={() => navigateHome("/Homepage")}>
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.23485L12.7249 0L0 12.5L12.7249 25L15 22.7652L4.55013 12.5L15 2.23485Z"
                fill="black"
              />
            </svg>
          </button>

          <button onClick={handMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dots-vertical"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
        </div>

        <header className="w-[100%] h-[25%]  flex items-center pr-3 pl-3 border-b border-b-black ">
          <div className="w-[30%] h-[70%] flex flex-col items-center justify-center gap-2 ">
            <img
              src=""
              alt="profile pic"
              className="img h-[65px] w-[65px] border border-red-600 rounded-full "
            />
            <button
              className="bg-red-500 text-[13px] p-[5px] rounded-xl"
              onClick={() => followDispatch(setFollow())}
              style={follow ? followStyles : null}
            >
              {follow ? "Unfollow" : "Follow"}
            </button>
          </div>

          <div className="w-[70%] h-[70%] flex flex-col justify-center gap-2 ">
            <p className="text-xl md:text-[26px] font-bold">Unknown_User</p>
            <p className="text-[12px] md:text-[18px]">Just here to have fun</p>
            <div className="text-[12px] md:text-[18px]">
              <span>{/* Return number of posts */} Posts</span>&nbsp;&nbsp;
              <span>{/*Return number of followers*/} Followers</span>
              &nbsp;&nbsp;
              <span>{/*Return number of following*/} Following</span>
              &nbsp;&nbsp;
            </div>
          </div>
        </header>

        <main>
          <div className="w-full h-[20%] flex items-center justify-around ">
            <p>Posts</p>
          </div>

          <section>{/*this section is to return the users posts*/}</section>
        </main>
      </section>
      <div
        className="absolute top-9 left-[64%] w-[30%] bg-black text-white text-[12px] flex flex-col gap-3 p-2 shadow-xl "
        style={menu ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <button>Mute</button>
        <button>Block</button>
        <button>Report</button>
      </div>
    </>
  );
}

export default ProfilePage;
