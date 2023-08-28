import React from "react";
import saya from "../images/2.jpg";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-40">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            i'm Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a highly motivated and dedicated student pursuing a degree in
            Computer Engineering at Amikom Yogyakarta. Currently domiciled in
            Sleman, Yogyakarta, I have a strong passion for learning and
            developing Web Applications. My current expertise includes expertise
            in React JS, Javascript, HTML, CSS, TailwindCSS, MySQL, and I am
            currently extending my knowledge of Python for data manipulation and
            visualization, And Express JS as website middleware to Mongo
            databases To Dive into, such as shown As we know, the current trend
            is MERN Stack.
          </p>

          <div>
            <Link to="portofolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-600 to-green-900 cursor-pointer ">
              Portofolio
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={saya}
            alt="my profile"
            className="rounded-2xl max-w-md mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
