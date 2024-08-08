import React from "react";
import { BorderBeam } from "./borderBeam";

interface LinkCardProps {
  icon: string;
  title: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ icon, title, link }) => {
  return (
    <div className="relative shadow-md text-black bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-xl">
      <a href={link}>
        <div className="flex items-center p-4 text-black">
          <div className="relative w-16 h-16">
            <img
              src={icon}
              alt={`${title} Icon`}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="ml-4 flex-1">
            <p className="font-semibold">{title}</p>
          </div>
          <ShareIcon className="w-6 h-6 text-gray-500" />
        </div>
      </a>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );

  function ShareIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>
    );
  }
};

export default LinkCard;
