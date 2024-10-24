import React from "react";
import Link from "next/link";


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

export default function Footer() {
  return (
    <footer className="grotesk bg-[#f9fbfb]">
      <div className="max-w-8xl mx-auto px-5 py-24 text-black">
        <div className="flex flex-wrap text-left">
          {/* Dynamically create footer columns */}
          {menuItems.map((item, index) => (
            <div key={index} className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">{item.title}</h2>
              <nav className="list-none space-y-2 py-3">
                {item.children ? (
                  item.children.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.link}>
                        <a className="hover:text-blue-500">{subItem.title}</a>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link href={item.link}>
                      <a className="hover:text-blue-500">{item.title}</a>
                    </Link>
                  </li>
                )}
              </nav>
            </div>
          ))}

          {/* Additional section */}

        </div>
      </div>

      {/* Footer bottom section */}
      <div className="px-2">
        <div className="max-w-8xl mx-auto px-5 py-6">
          <h2 className="text-black">Diam egestas ultrices odio vitae.</h2>
          <div>
            <h2 className="my-4 text-sm">
              Lorem ipsum accumsan arcu, consectetur adipiscing elit. Dolor
              proin tempor sed fermentum sit{" "}
              <br className="hidden lg:inline-block" /> pretium pellentesque.
              Dictumst risus elementum dignissim risus, lobortis molestie.
            </h2>
          </div>

          {/* Footer links for terms and privacy */}
          <div className="absolute right-0 -mt-24 hidden text-black lg:inline-block">
            <Link href="/terms-and-conditions">
              <a className="mr-16">Terms & Conditions</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="mr-16">Privacy Policy</a>
            </Link>
            <Link href="/cookie-policy">
              <a className="mr-16">Cookie Policy</a>
            </Link>
          </div>

          <div className="right-0 inline-block pt-12 pb-6 pr-20 text-sm text-black md:hidden">
            <Link href="/terms-and-conditions">
              <a className="mr-16">Terms & Conditions</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="mr-16">Privacy Policy</a>
            </Link>
            <Link href="/cookie-policy">
              <a className="mr-16">Cookie Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
