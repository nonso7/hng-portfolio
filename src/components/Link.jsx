import React from "react";

export default function Link({ link }) {
  return (
    <a
      id={link.id}
      className="block jkk bg-dark-grey rounded-lg text-center mb-4  py-4 px-6 md:px-8 hover:cursor-pointer hover:bg-hover-grey"
      href={link.href}
    >
      {link.title}
    </a>
  );
}
