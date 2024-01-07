import React from "react";

function Girl() {
  return (
    <div className="mt-12 max-md:mx-4">
      <h1 className="font-bold text-xl pb-3">Qizlarga</h1>
      <div className="grid cursor-pointer max-lg:grid-cols-3 max-md:grid-cols-2 max-lg:gap-5  max-md:gap-3  grid-cols-4">
        <div className="w-64 max-md:w-full   rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://media.bulavka.uz/products/dTtGRe3oRE/dTtGRe3oRE?version=1702551764237"
            alt=""
          />
        </div>
        <div className="w-64 max-md:w-full rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://media.bulavka.uz/products/TyxdH0BpTx/TyxdH0BpTx?version=1702551771554"
            alt=""
          />
        </div>
        <div className="w-64 max-md:w-full rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://media.bulavka.uz/products/SZOXljfjjX/SZOXljfjjX?version=1702551777587"
            alt=""
          />
        </div>
        <div className="w-64 max-md:w-full rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://media.bulavka.uz/products/LdY1gabxW7/LdY1gabxW7?version=1702551787977"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Girl;
