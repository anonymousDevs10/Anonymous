import "./CSS files/HomePage.css";
import {
  Header,
  Home,
  Notification,
  Search,
  Messages,
  NewPostMenu,
} from "./Components/CompExport";
import { useState } from "react";

function HomePage() {
  const [page, setPage] = useState(0);

  const navigate = () => {
    if (page === 0) {
      return <Home />;
    } else if (page === 1) {
      return <Notification />;
    } else if (page === 2) {
      return <Search />;
    } else if (page === 3) {
      return <Messages />;
    }
  };

  return (
    <>
      {/*Parent container*/}
      <div className="mobile-view-container relative overflow-hidden">
        {/* {Header container} */}
        <div className="header w-full h-[8%] bg-black">
          <Header />
        </div>

        {/* {Container for each section} */}
        <div className="page-container w-full h-[92%] text-center">
          {navigate()}
        </div>

        {/* {Menu bar} */}
        <div className="menu-tab absolute translate-y-[300px] inset-0 m-auto bg-black rounded-xl  w-[80%] h-[5%] text-white flex items-center justify-around">
          <button onClick={() => setPage(0)}>1</button>
          <button onClick={() => setPage(1)}>2</button>
          <button>3</button>
          <button onClick={() => setPage(2)}>4</button>
          <button onClick={() => setPage(3)}>5</button>
        </div>
      </div>
    </>
  );
}
export default HomePage;
