"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex px-5 h-14 items-center space-x-6 border-b mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            href={link.href}
            className={classNames({
              "text-blue-300": link.href !== currentPath,
              "text-blue-600": link.href === currentPath,
              "hover: text-zinc-500 transition-colors": true,
            })}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
