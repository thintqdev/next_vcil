import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
// Define your menu items with nested submenus
const menuItems = [
  {
    title: "Vcil Community",
    link: "/vcil-community",
    children: [
      { title: "About Us", link: "/vcil-community#about-us" },
      { title: "Mission", link: "/vcil-community#mission" },
      { title: "Strategy", link: "/vcil-community#strategy" },
      { title: "Volunteer-based organization", link: "/vcil-community#volunteer-based-organization" },
      { title: "People", link: "/vcil-community#people" },
      { title: "Our dreams", link: "/vcil-community#our-dreams" },
      { title: "FAQ", link: "/vcil-community#faq" },
      { title: "Get involved", link: "/vcil-community#get-involved" },
    ],
  },
  {
    title: "Alternative Education",
    link: "/alternative-education",
    children: [
      { title: "The Soil Project", link: "/alternative-education#the-soil-project" },
      { title: "Vcil Travel School", link: "/alternative-education#vcil-travel-school" },
      { title: "Money IQ - Money EQ", link: "/alternative-education#money-iq-money-eq" },
      { title: "Customized Programs", link: "/alternative-education#customized-programs" },
    ],
  },
  {
    title: "Social Enterprise",
    link: "/social-enterprise",
    children: [
      { title: "XomTour", link: "/social-enterprise#xomtour" },
    ],
  },
  {
    title: "Our Community & Network",
    link: "/our-community-network",
    children: [
      { title: "Membership", link: "/our-community-network#membership" },
      { title: "Vcil Coffee Chat", link: "/our-community-network#vcil-coffee-chat" },
      { title: "Building a tribe", link: "/our-community-network#building-a-tribe" },
      { title: "Advisors & Facilitators", link: "/our-community-network#advisors-facilitators" },
      { title: "Global network", link: "/our-community-network#global-network" },
    ],
  },
  { title: "Journals", link: "/journals" },
  { title: "Publications", link: "/publications" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-lg">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a className="text-3xl font-bold text-black flex items-center">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </a>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 ml-10">
          {menuItems.map((item, index) => (
            item.children ? (
              <Dropdown key={index} item={item} />
            ) : (
              <Link key={index} href={item.link} passHref>
                <a className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">
                  {item.title}
                </a>
              </Link>
            )
          ))}
        </nav>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        <Link href="/register" passHref>
          <a className="bg-blue-500 text-lg font-semibold text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600">
            Login
          </a>
        </Link>
      </div>
    </header>
  );
}
