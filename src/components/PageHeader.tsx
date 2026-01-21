import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative w-full flex items-start justify-start overflow-hidden pageheader">
      
      {/* Background Image */}
      {backgroundImage && (
        <ImageWithFallback
          src={backgroundImage}
          alt="Header Background"
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* Fallback color */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gray-200" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      {/* <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-lg mt-2 opacity-90">{subtitle}</p>
        )}
      </div> */}

    </div>
  );
}
