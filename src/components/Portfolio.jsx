import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="py-6">Check out some of my Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="group shadow-md shadow-gray-600">
            <img
              src="https://source.unsplash.com/1000x600?bakso"
              alt=""
              className="rounded-md duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="py-2">BaksoNyelekamin</p>
              <div className="flex mx-auto justify-between">
                <button className="group-hover:scale-105 duration-200 m-2">Demo</button>
                <button className="group-hover:scale-105 duration-200 m-2">Code</button>
              </div>
            </div>
          </div>
          <div className="group shadow-md shadow-gray-600">
            <img
              src="https://source.unsplash.com/1000x600?nutrtion assistant"
              alt=""
              className="rounded-md duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="py-2">Nutrition Assistant</p>
              <div className="flex mx-auto justify-between">
                <button className="group-hover:scale-105 duration-200 m-2">Demo</button>
                <button className="group-hover:scale-105 duration-200 m-2">Code</button>
              </div>
            </div>
          </div>
          <div className="group shadow-md shadow-gray-600">
            <img
              src="https://source.unsplash.com/1000x600?classroom"
              alt=""
              className="rounded-md duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="py-2">Amikom 365</p>
              <div className="flex mx-auto justify-between">
                <button className="group-hover:scale-105 duration-200 m-2">Demo</button>
                <button className="group-hover:scale-105 duration-200 m-2">Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
