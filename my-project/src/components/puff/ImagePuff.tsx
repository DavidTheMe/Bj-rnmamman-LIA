import { Link } from 'react-router-dom';
import { ArrowRight } from '../icons/ArrowRight';

type ImagePuffProps = {
    title: string;
    subtitle?: string;
    image: string;
    href: string;
};

export function ImagePuff({ title, subtitle, image, href }: ImagePuffProps) {
    return (
        <Link
          to={href}
          aria-label={`${title}${subtitle ? " - " + subtitle : ""}`}
          className="
            relative group w-full max-w-[350px] h-[300px] mx-auto overflow-hidden
            focus-outline-none focus:ring-2 focus:ring-white
          "
        >
          {/* Bild */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-300"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text */}
          <div className="absolute bottom-6 left-6 text-white">
            {subtitle && (
                <p className="text-sm font-semibold tracking-wide opacity-80 uppercase">
                    {subtitle}
                </p>
            )}
            <h2 className="text-2xl font-bold leading-tight max-w-[250px]">
                {title}
            </h2>
          </div>

          {/* Arrow Icon */}
          < ArrowRight
            className="
            absolute bottom-3 right-4 rounded-full bg-[#8B341F] bg-opacity-60 backdrop-blur
            flex items-center justify-center group-hover:bg-[#8B341F]/80
            duration-300 w-10 h-10 pointer-events-none
            " 
          /> 
          
        </Link>
    );
}