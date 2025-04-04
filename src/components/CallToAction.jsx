import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col wrapper bg-primary/15 gap-4 items-center pt-[3rem] pb-[3rem] mb-[2rem]">
      <div className="flex flex-col wrapper bg-primary/15 gap-4 items-center pt-[3rem] pb-[3rem] mb-[2rem]">
        <h1 className="heading text-center max-w-6xl mx-auto">
          “Unlock the Full Potential of Your Business with Our Services”
        </h1>
        <p className="description text-center max-w-6xl mx-auto">
          We provide cutting-edge solutions tailored to your business needs,
          empowering you to drive growth, streamline operations, and maximize
          efficiency. From software development to AI-driven innovations, our
          services help you stay ahead in today’s competitive landscape.
        </p>
        <Link to="/contact-us" className="primary-btn rounded-full w-fit mt-4">
          Get Your Free Consultation Today.
        </Link>
      </div>

      <section className="values-section text-center mt-8">
        <h2 className="heading">Our Values</h2>
        <p className="description max-w-4xl mx-auto">
          Our core values shape our approach and define how we engage with
          clients and team members.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
          <li>
            <strong>Innovation:</strong> We push boundaries, stay ahead of
            trends, and embrace emerging technologies to deliver impactful
            solutions.
          </li>
          <li>
            <strong>Quality:</strong> We ensure every solution is effective,
            efficient, and built to last, prioritizing excellence in everything
            we do.
          </li>
          <li>
            <strong>Collaboration:</strong> Success is a team effort. We foster
            strong partnerships with clients and within our team to achieve the
            best results.
          </li>
          <li>
            <strong>Customer Focus:</strong> Your goals drive our strategies. We
            take time to understand your needs and craft solutions that align
            with your vision.
          </li>
          <li>
            <strong>Integrity:</strong> Transparency, trust, and professionalism
            are at the core of our work, ensuring long-term, meaningful
            relationships.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CallToAction;
