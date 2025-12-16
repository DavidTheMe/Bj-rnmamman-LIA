import React from 'react';
import { ArrowRight } from "../icons/ArrowRight";

interface Puff1Props {
    title: string;
    subtitle?: string;
    href: string;
}

export const Puff1: React.FC<Puff1Props> = ({ title, subtitle, href }) => {
    return (
        <a
          href={href}
          aria-label={`${title}${subtitle ? " - " + subtitle : ""}`}
          className="
            group block bg-neutral-800 text-white p-8 rounded-none relative h-48
            hover:bg-neutral-800 transition-colors focus:outline-none
            focus:ring-2 focus:ring-white
            "
        >
          <h2 className="text-2xl font-semibold leading-tight">{title}</h2>

          {subtitle && (
            <p className="text-sm text-neutral-400 mt-2 max-w-xs">{subtitle}</p>
          )}

          <div
            className="
              absolute bottom-6 right-6 w-10 h-10 rounded-full
              bg-[#8B341F] border border-gray-700
              flex items-center justify-center group-hover:border-[#8B341F]
              transition-colors pointer-events-none
              "
          >
            <ArrowRight />
          </div>
        </a>
    );
};