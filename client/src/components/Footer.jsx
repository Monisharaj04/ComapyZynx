import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
    },
    {
      title: "Use cases",
      links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
    },
    {
      title: "Social",
      links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between items-center">
        <img
            src={assets.logo_img} // Replace with actual logo path
            alt="Zysk Logo"
            className="h-15 w-20"
          />
          <span className="text-sm text-gray-500">
            © 2077 zysktechnologies. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
