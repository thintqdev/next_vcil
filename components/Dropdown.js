import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "./Header"; // Import the MenuItem type


const Dropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link href={item.link || "#"} passHref>
                <a className="text-xl text-black hover:text-blue-500">{item.title}</a>
            </Link>
            {isOpen && item.children && (
                <div className="absolute left-0 bg-white shadow-lg rounded-md z-10">
                    {item.children.map((child, index) => (
                        <div key={index} className="relative">
                            {child.children ? (
                                <Dropdown item={child} />
                            ) : (
                                <Link href={child.link || "#"} passHref>
                                    <a className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                                        {child.title}
                                    </a>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
