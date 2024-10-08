import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks01 = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About Us",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/blog",
      display: "Blog",
    },
  ];

  const quickLinks02 = [
    {
      path: "/find-a-doctor",
      display: "Find a Doctor",
    },
    {
      path: "/appointment",
      display: "Request an Appointment",
    },
    {
      path: "/locations",
      display: "Find a Location",
    },
    {
      path: "/opinion",
      display: "Get an Opinion",
    },
  ];

  const quickLinks03 = [
    {
      path: "/donate",
      display: "Donate",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];

  const year = new Date().getFullYear();
  return (
    <>
      <footer className="pb-16 pt-10">
        <div className="container">
          <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div>
              <img src="images/logo.png" alt="Logo" />
              <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                Copyright {year} developed by Isiak Quadri Opeyemi. All rights
                reserved.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Quick Links
              </h2>
              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                I want to:
              </h2>
              <ul>
                {quickLinks02.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Support
              </h2>
              <ul>
                {quickLinks03.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
