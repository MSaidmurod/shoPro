//react
import { useState } from "react";

function ReadMoreText() {
  const [miqdor, setMidor] = useState(0);
  return (
    <div className="flex flex-col gap-5 pr-10">
      <div>
        <h1 className="font-bold">Issiq quyonchali kombinezon.</h1>
      </div>
      <div>
        <h1 className="font-bold">Rang:</h1>
        <button className="bg-pink-600 btn"></button>
        <button className="bg-slate-600 btn"> </button>
      </div>
      <div className="flex gap-3">
        <h1 className="font-bold">Razmer:</h1>
        <button className="btn btn-square">23/21</button>
        <button className="btn btn-square">23/21</button>
        <button className="btn btn-square">23/21</button>
      </div>
      <div>
        <h1 className="font-bold">Miqdor:</h1>
        <div className="flex items-center border w-[100px] justify-between">
          <button onClick={() => setMidor(() => miqdor - 1)} className="">
            -
          </button>
          <h1>{miqdor}</h1>
          <button onClick={() => setMidor(() => miqdor + 1)} className="">
            +
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold">Narx:</h1>
        <div className="flex gap-4">
          <h1>200 000 som</h1>
          <h1 className="text-slate-400 line-through">300 000 som</h1>
        </div>
        <button className="btn btn-primary">Savatcha</button>
        <button className="btn btn-primary ml-3"> Sotib olish</button>
      </div>
      <div>
        <h1 className="font-bold">Yetkazib berish</h1>
        <p>
          Xarid qilgan mahsulotingizni butun O&zbekiston boDylab uch ish kun
          ichida yetkazib beramiz. Xarid amalga oshirsangiz qisqa vagt ichida
          operatorlarimiz ozlari siz bilan bog&lanadi, boshqa qo@shimcha
          ma'lumotlar va mahsulot yetkazilishi kerak bolgan manzilni operator
          bilan kelishib olishingiz mumkin.
        </p>
      </div>
    </div>
  );
}

export default ReadMoreText;
