import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius,
          unde cupiditate quasi nisi modi facilis repellat dolore dignissimos
          commodi. Possimus cupiditate ipsam ad amet, vero incidunt natus
          veritatis provident cumque non alias voluptates tempore reprehenderit
          sapiente dignissimos eos maxime repellat ea. Dolorem labore quas quo
          natus culpa incidunt dolor.
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non culpa
          maiores perspiciatis totam nesciunt fuga odio temporibus qui commodi
          consectetur eum modi, amet pariatur dolorum consequatur delectus
          molestias adipisci itaque, hic ducimus recusandae aliquam? Provident
          tenetur repellat voluptate nostrum enim animi fugit sequi veniam
          architecto! Quaerat architecto numquam sunt illo!
        </p>
      </div>
    </div>
  );
};

export default About;
