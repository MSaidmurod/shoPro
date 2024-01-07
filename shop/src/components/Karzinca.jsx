// icon
import { RiDeleteBin6Line } from "react-icons/ri";

// react
import { useState } from "react";

function Karzinca() {
  const [miqdor, setMidor] = useState(0);
  return (
    <div className="max-w-6xl mx-auto max-lg:mx-4">
      <div className="mt-10 ">
        <h1 className="font-bold">
          Savatingiz, <span className="text-slate-500">1 maxsulot</span>
        </h1>
        <div className="bg-slate-700  h-[2px] w-full"></div>
      </div>
      <div className="flex mt-10 max-lg:flex-col  gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex w-[800px] max-lg:w-full max-md:flex-col max-md:h-[100%] h-[200px] gap-4 items-center px-6 rounded-lg py-3 border">
            <div>
              <img
                className="w-[120px]"
                src="https://images.uzum.uz/clg7isdennt1kt4dihcg/t_product_240_high.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-9 flex-col">
              <div className="flex w-[600px] items-start  max-md:w-full justify-between ">
                <h1 className="font-bold">
                  Playowo ayollar uchun nachesli uy to'plami
                </h1>
                <button>
                  <RiDeleteBin6Line />
                </button>
              </div>
              <div className="flex max-md:flex-col justify-between">
                <div>
                  <h1 className="text-slate-500">
                    Sotuvchi: <span className="text-black">Playowo3</span>
                  </h1>
                  <h1 className="text-slate-500">
                    O'lchami: <span className="text-black">54</span>
                  </h1>
                  <h1 className="text-slate-500">
                    Rang: <span className="text-black">Moviy</span>
                  </h1>
                </div>
                <div className="max-md:flex flex gap-10 max-md:justify-between max-md:mt-4">
                  <div className="flex items-center h-[40px] rounded-lg border w-[100px] justify-between">
                    <button
                      onClick={() => setMidor(() => miqdor - 1)}
                      className=""
                    >
                      -
                    </button>
                    <h1>{miqdor}</h1>
                    <button
                      onClick={() => setMidor(() => miqdor + 1)}
                      className=""
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-col items-end">
                    <h1 className="font-bold text-xl">100 000 som</h1>
                    <h1 className="text-slate-500 line-through">200 000 som</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="border px-4 max-lg:w-full mb-4 rounded-lg py-4 h-[255px]  w-[300px]">
          <h1 className="font-bold">Buyurtmangiz</h1>
          <div className="mt-4 flex justify-between">
            <h1>Maxsulotlar(1)</h1>
            <h1>100 000 som</h1>
          </div>
          <div>
            <div className="flex mt-6 justify-between">
              <h1>Jami: </h1>
              <div className="flex flex-col items-end">
                <h1 className="font-bold">100 000 som</h1>
                <h1 className="text-xs text-green-600">
                  Tejovingiz: <span>50 000 som</span>
                </h1>
              </div>
            </div>
          </div>
          <button className="btn mt-4 btn-primary w-full">
            Rasmiylashtirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Karzinca;
