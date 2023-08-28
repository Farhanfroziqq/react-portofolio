import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="font-bold text-4xl inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/5a6a73ac-27d8-4845-ab05-782ed7c2a86c"
            className="flex flex-col w-full md:w-1/2 "
            method="post">
            <input
              type="text"
              name="name"
              placeholder="John doe"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              className="bg-transparent border-2 rounded-md text-white focus:outline-none"
              rows="10"></textarea>
            <button className="text-white bg-gradient-to-b from-green-900 to-green-600 px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scael-105 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
