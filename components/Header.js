import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown"; // Same as before but adjusted for 'link'

// Define your menu items with nested submenus
const menuItems = [
  {
    title: "Vcil Community",
    link: "/vcil-community",
    children: [
      { title: "About Us", link: "/vcil-community#about-us" },
      { title: "Mission", link: "/vcil-community#mission" },
      { title: "Strategy", link: "/vcil-community#strategy" },
      {
        title: "Volunteer-based organization",
        link: "/vcil-community#volunteer-based-organization",
      },
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
      {
        title: "The Soil Project",
        link: "/alternative-education#the-soil-project",
      },
      {
        title: "Vcil Travel School",
        link: "/alternative-education#vcil-travel-school",
      },
      {
        title: "Money IQ - Money EQ",
        link: "/alternative-education#money-iq-money-eq",
      },
      {
        title: "Customized Programs",
        link: "/alternative-education#customized-programs",
      },
    ],
  },
  {
    title: "Social Enterprise",
    link: "/social-enterprise",
    children: [
      {
        title: "XomTour",
        link: "/social-enterprise#xomtour",

      },
    ],
  },
  {
    title: "Our Community & Network",
    link: "/our-community-network",
    children: [
      { title: "Membership", link: "/our-community-network#membership" },
      {
        title: "Vcil Coffee Chat",
        link: "/our-community-network#vcil-coffee-chat",
      },
      {
        title: "Building a tribe",
        link: "/our-community-network#building-a-tribe",
      },
      {
        title: "Advisors & Facilitators",
        link: "/our-community-network#advisors-facilitators",
      },
      {
        title: "Global network",
        link: "/our-community-network#global-network",
      },
    ],
  },
  { title: "Journal", link: "/journal" },
  { title: "Publications", link: "/publications" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a className="text-3xl font-bold text-black flex items-center">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </a>
        </Link>
        <nav className="hidden xl:flex gap-8 ml-14">
          {menuItems.map((item, index) => {
            return item.children ? (
              <Dropdown key={index} item={item} />
            ) : (
              <Link key={index} href={item.link} passHref>
                <a className="text-xl text-black hover:text-blue-500">
                  {item.title}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center">
        <Link href="/login" passHref>
          <a className="text-lg font-semibold text-black mr-8">Login</a>
        </Link>
        <Link href="/register" passHref>
          <a className="bg-blue-500 text-lg font-semibold text-white px-8 py-3">
            Register
          </a>
        </Link>
      </div>
    </header>
  );
}
