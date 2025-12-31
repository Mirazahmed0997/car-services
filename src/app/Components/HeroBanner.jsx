import React from "react";

const HeroBanner = () => {
  return (
    <section className="hero min-h-[55vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-7xl mx-auto px-4">
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/R6Z2nFM/55.jpg"
            alt="Car Service"
            className="w-full rounded-xl shadow-lg object-cover aspect-square"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Reliable Car <span className="text-primary">Repair & Services</span>
          </h1>

          <p className="py-6 text-gray-600 max-w-xl mx-auto lg:mx-0">
            We provide professional car repair and maintenance services with
            certified mechanics and modern equipment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary px-8">
              Get Service
            </button>
            <button className="btn btn-outline px-8">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
