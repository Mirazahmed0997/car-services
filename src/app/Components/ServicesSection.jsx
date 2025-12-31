import React from "react";

const ServicesSection = () => {
  const data = [
    {
      _id: "635a0c0b64a6d231228942ae",
      title: "Engine Oil Change",
      img: "https://i.ibb.co/T2cpBd5/888.jpg",
      price: "20.00",
      description: "Professional engine oil change service for better performance.",
    },
    {
      _id: "635a0c0b64a6d231228942af",
      title: "Battery Charge",
      img: "https://i.ibb.co/ydCbDN3/5555.jpg",
      price: "20.00",
      description: "Quick and reliable battery charging service.",
    },
    {
      _id: "635b591a1dafe382a9da8c96",
      title: "Full Car Repair",
      img: "https://i.ibb.co/R6Z2nFM/55.jpg",
      price: "200.00",
      description: "Complete car repair solution by expert mechanics.",
    },
    {
      _id: "635b5afc1dafe382a9da8c98",
      title: "Engine Repair",
      img: "https://i.ibb.co/5MvmD2g/88.jpg",
      price: "150.00",
      description: "Advanced engine diagnostics and repair service.",
    },
    {
      _id: "635b5b691dafe382a9da8c99",
      title: "Automatic Services",
      img: "https://i.ibb.co/wh7t3N3/555.jpg",
      price: "30.00",
      description: "Automatic system maintenance and repair.",
    },
    {
      _id: "635b5ba51dafe382a9da8c9a",
      title: "Electrical System",
      img: "https://i.ibb.co/KzCG8qr/8888.jpg",
      price: "20.00",
      description: "Car electrical system diagnosis and fixing.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Services
        </h2>
        <p className="text-gray-500 mt-3">
          Quality car services at affordable prices
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((service) => (
          <div
            key={service._id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            {/* Image (Perfect Square) */}
            <figure className="relative w-full aspect-square overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body">
              <h3 className="card-title">{service.title}</h3>
              <p className="text-sm text-gray-500">
                {service.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-primary">
                  ${service.price}
                </span>
                <button className="btn btn-sm btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
