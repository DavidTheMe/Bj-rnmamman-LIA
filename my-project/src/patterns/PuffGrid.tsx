import React from "react";
import { Puff1 } from "../components/puff/Puff1";

interface PuffItem {
    title: string;
    subtitle?: string;
    href: string;
}

interface PuffGridProps {
    items: PuffItem[];
}

export const PuffGrid: React.FC<PuffGridProps> = ({ items }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <Puff1
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
          />
        ))}
      </div>
    );
};