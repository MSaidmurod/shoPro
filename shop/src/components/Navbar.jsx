// react-icons
import { BiListUl } from "react-icons/bi";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
//react
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// logo
import Logo from "../assets/logo.png";
function Navbar() {
  const [like, setLike] = useState(true);
  const [scroll, setScroll] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  });

  return (
    <div
      className={
        scroll
          ? "bg-indigo-500 z-30 w-[100%] mx-auto fixed"
          : "bg-indigo-500 z-30"
      }
    >
      <div className="max-w-6xl  max-lg:mx-4 max-md:gap-2 flex items-center justify-between mx-auto py-3">
        <div className=" max-w-[150px] max-md:max-w-[150px]  overflow-hidden">
          <Link to="/" className="font-bold text-white select-none text-3xl">
            <img className=" " src={Logo} alt="" />
          </Link>
        </div>
        <div className="dropdown max-md:hidden dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center text-white text-xl m-1"
          >
            <BiListUl />
            Katalog
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/card">
              {" "}
              <li>
                <a>O'gil bolalar</a>
              </li>
            </Link>
            <Link to="/card">
              <li>
                <a>Qiz bolalar</a>
              </li>
            </Link>
            <Link to="/card">
              <li>
                <a>Chaqaloqlar</a>
              </li>
            </Link>
            <Link to="/card">
              <li>
                <a>O'yinchoqlar</a>
              </li>
            </Link>
          </ul>
        </div>
        <form className="w-[650px] ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full "
          />
        </form>
        <div className="">
          {like && (
            <button onClick={() => setLike(false)} className="text-2xl">
              <FcLikePlaceholder />
            </button>
          )}
          {!like && (
            <button onClick={() => setLike(true)} className="text-2xl">
              <FcLike />
            </button>
          )}
        </div>
        <div className="h-10 w-[1px] max-md:hidden border"></div>
        <div className="relative max-md:hidden">
          <NavLink to="/karzinka">
            <MdOutlineShoppingCart className="text-2xl text-white " />
          </NavLink>
          <div className="absolute -top-2 -right-3 badge badge-secondary badge-sm">
            0
          </div>
        </div>
        <div className="text-white max-md:text-xs max-md:hidden text-sm">
          <h1>+9989xxxxxxxx</h1>
          <h1>+9989xxxxxxxx</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
