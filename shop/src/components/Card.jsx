import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Card() {
  const [like, setLike] = useState(true);
  return (
    <div className="w-[200px] max-sm:w-full  flex mt-4  rounded-lg shadow-xl hover:shadow-2xl cursor-pointer flex-col  border">
      <div className="mx-auto relative overflow-hidden max-sm:px-2 max-sm:pt-2 rounded-lg  mb-2">
        <NavLink to="/readmore">
          <img
            className="max-sm:w-full w-[180px]"
            src="https://frankfurt.apollo.olxcdn.com/v1/files/k5i2iesd5avp3-UZ/image;s=1080x1049"
            alt=""
          />
        </NavLink>
        <div className="absolute hover:scale-110 top-1 right-1">
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
        <div className="bg-indigo-500 bg-opacity-80 text-white rounded-md absolute bottom-0 px-2">
          <h1>Aksiy</h1>
        </div>
      </div>
      <h1 className="font-bold ml-2">Troyka bolar uchun</h1>
      <div
        className="flex mx-2 my-4 justify-between items-end  
      "
      >
        <div>
          <h1 className="text-slate-400 line-through">400 000 som</h1>
          <h1>300 000 som</h1>
        </div>
        <button className="border hover:scale-110 w-[30px] h-[30px] rounded-[50%]">
          <MdOutlineAddShoppingCart className="mx-auto" />
        </button>
      </div>
    </div>
  );
}

export default Card;
