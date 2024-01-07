import React from "react";

function Boy() {
  return (
    <div className="mt-12 max-md:mx-4">
      <h1 className="font-bold text-xl pb-3">O`gilbolarga</h1>
      <div className="grid cursor-pointer  max-lg:gap-5 max-lg:grid-cols-3  max-md:gap-3 max-md:grid-cols-2 grid-cols-4">
        <div className="w-64 max-md:w-full  rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://658af4a658d63ab60c20bbc5--marvelous-melba-94f603.netlify.app/assets/images/boy/sub_categore_5.jpg"
            alt=""
          />
        </div>
        <div className="w-64 max-md:w-full rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://658af4a658d63ab60c20bbc5--marvelous-melba-94f603.netlify.app/assets/images/boy/sub_categore_6.jpg"
            alt=""
          />
        </div>
        <div className="w-64 max-md:w-full rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://658af4a658d63ab60c20bbc5--marvelous-melba-94f603.netlify.app/assets/images/boy/sub_categore_7.jpg"
            alt=""
          />
        </div>
        <div className="w-64 max-md:w-full rounded-xl overflow-hidden">
          <img
            className="object-cover "
            src="https://658af4a658d63ab60c20bbc5--marvelous-melba-94f603.netlify.app/assets/images/boy/sub_categore_8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Boy;
