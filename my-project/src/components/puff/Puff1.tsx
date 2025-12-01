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
          className="
            group
            block
            bg-neutral-900
            text-white
            p-8
            rounded-none
            relative
            h-48
            hover:bg-neutral-800
            transition-colors
            "
        >
          <h2 className="text-2xl font-semibold leading-tight">{title}</h2>

          {subtitle && (
            <p className="text-sm text-neutral-400 mt-2 max-w-xs">{subtitle}</p>
          )}

          <div
            className="
              absolute bottom-6 right-6
              w-10 h-10
              rounded-full
              border border-neutral-600
              flex items-center justify-center
              group-hover:border-white
              transition-colors
              "
          >
            <ArrowRight />
          </div>
        </a>
    );
};