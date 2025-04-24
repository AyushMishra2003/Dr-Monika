import { useState, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbComponent = ({ headerText = "Page", items = [] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(https://html.awaikenthemes.com/dentaire/images/page-header-bg.svg)`,
          filter: 'brightness(0.65)'
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#e63579] z-0"></div>

      {/* Content */}
      <div className="relative z-0 container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            {headerText}
          </h1>

          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index === 0 ? (
                    <a
                      href={item.href}
                      className="flex items-center text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      <Home size={16} className="mr-1" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </a>
                  ) : (
                    (!isMobile || index === items.length - 1) && (
                      <a
                        href={item.href || "#"}
                        className={`${
                          index === items.length - 1
                            ? 'text-white font-medium pointer-events-none'
                            : 'text-blue-100 hover:text-white transition-colors duration-200'
                        }`}
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    )
                  )}
                  {index < items.length - 1 && (
                    <ChevronRight size={16} className="mx-2 text-blue-200" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
