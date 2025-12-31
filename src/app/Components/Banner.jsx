import React from "react";

const Banner = () => {
  return (
    <section
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]"
      style={{
        backgroundImage: "url('https://i.ibb.co/R6Z2nFM/55.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Professional Car Repair Services
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-200">
            Trusted mechanics • Quality parts • Affordable pricing
          </p>

          <button className="btn btn-primary btn-sm sm:btn-md mt-4">
            Book Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
