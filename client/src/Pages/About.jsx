import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Prime Space
      </h1>
      <div className="w-full my-4  mb-8 border border-4  shadow-xl">
        <img
          className="w-full rounded-lg shadow-2xl"
          src="https://www.wahabgroup.com/wp-content/uploads/2015/12/Real-Estate.jpg"
          alt="about_img"
        />
      </div>
      <div>
        <p className="mb-4 text-slate-700">
        Prime Space is a leading real estate agency that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
        <p className="mb-4 text-slate-700">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way.
        </p>
        <p className="mb-4 text-slate-700">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>
    </div>
  );
}
