import React from "react";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";


export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to GitHub 
        </h2>
       
        <p className="text-lg animate__animated animate__bounceInLeft">
          GitHub is a collaborative platform that has revolutionized the world of software development
        </p>
      </section>
    

      <Link
        to="/explore"
        className="bg-green-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:opacity-75"
      >
        Explore GitHub
      </Link>



      <div className="flex justify-center items-center mt-16 animate-pulse">
        <img
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="GitHub Image"
          className="w-64"
        />
      </div>

      <h1 className="text-5xl text-center mt-16 font-serif ">
        GitHub - The Home of Developers
      </h1>
    </div>
  );
}
