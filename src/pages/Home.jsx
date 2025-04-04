import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import ceoImg from "../assets/ceo.jpg";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                Innovation to transform your organization.
              </h3>
              <p className="description">
                At Alphawavesolutions, we’re not just a technology provider;
                we’re your trusted partner in navigating the ever-changing world
                of digital transformation. Our goal is simple: to help
                businesses grow and thrive by delivering innovative, customized
                solutions that empower your organization to meet and exceed its
                goals. <br />
                <br /> From web and mobile app development to cutting-edge
                solutions in AI, blockchain, and data analytics, we’re here to
                help you unlock new opportunities and solve your unique
                challenges. We take the time to understand your needs and design
                solutions that drive results. Every project we take on reflects
                our commitment to excellence and our passion for bringing your
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section id="about-us" className="relative py-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">Why Partner with Us?</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover"
              />
              <p className="description">
                AI is transforming business by streamlining operations,
                enhancing decision-making, and delivering personalized
                experiences. Our expertise in advanced algorithms and machine
                learning helps unlock new opportunities and drive strategic
                success.
              </p>

              <h3>Why Partner with Us?</h3>
              <ul>
                <li>
                  <strong>Diverse Expertise:</strong> From AI to blockchain and
                  mobile apps, we offer end-to-end solutions.
                </li>
                <li>
                  <strong>Tailored Solutions:</strong> We craft strategies that
                  fit your unique business needs.
                </li>
                <li>
                  <strong>Long-Term Relationships:</strong> Committed to
                  delivering quality and ongoing support.
                </li>
                <li>
                  <strong>Innovation at the Core:</strong> We stay ahead of
                  trends to build future-proof solutions.
                </li>
              </ul>

              <p>
                Ready to elevate your business?{" "}
                <a href="/contact">Get in touch</a> and let's innovate together!
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      {/* <section className="wrapper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[15%_auto] items-center gap-7 pt-[5rem] pb-[3rem]">
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              loading="lazy"
              alt="ceo"
              className="h-full w-fit md:w-full rounded-ss-3xl rounded-ee-3xl max-h-[20rem] object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading">Our CEO Message</h3>
            <p className="description">
              At Alphawavesolutions, we leverage the power of AI to create
              transformative digital experiences that elevate businesses. Our
              commitment to innovation drives us to develop intelligent
              solutions that enhance efficiency and foster growth. Together, we
              can turn your ideas into reality and shape a smarter future.
            </p>
          </div>
        </div>
      </section> */}
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);
