import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { allServices } from "../constants";

const ServiceDetails = () => {
  const { serviceName } = useParams();

  const data = allServices.find(
    (item) => item.title.trim() === serviceName.trim()
  );

  if (!data) {
    <Navigate to="/services" />;
  }
  return (
    <div className="flex flex-col gap-10 md:px-5">
      <img
        data-aos="fade-up"
        src={data.img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={data.title}
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {data.title}
        </h2>
        <p data-aos="fade-up" className="description">
          {data.detailsPageContent.firstPara}
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Services
        </h2>
        <p data-aos="fade-up" className="description">
          {data.keyBenefits.map((item) => (
            <li key={item} className="flex gap-2 mt-4">
              <span className="w-2 h-2 mt-[.6rem] flex items-center justify-center bg-black/80 rounded-full"></span>
              {item}
            </li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
