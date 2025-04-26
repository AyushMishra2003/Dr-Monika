import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';


import img1 from "../../assets/gallery/gallery1.jpg";
import img2 from "../../assets/gallery/gallery1.jpg";
import img3 from "../../assets/gallery/gallery3.jpg";
import img4 from"../../assets/gallery/gallery4.jpg";
import img5 from "../../assets/gallery/gallery5.jpg";
import img6 from "../../assets/gallery/gallery6.jpg";
import img7 from"../../assets/gallery/gallery7.jpg";
import img8 from "../../assets/gallery/gallery7.jpg";
import img9 from "../../assets/gallery/gallery9.jpg";
import BreadCrumbs from '../../component/Breadcums';



// Simple slider component
const Slider = ({ children, settings, ref }) => {
  const [currentSlide, setCurrentSlide] = useState(settings.initialSlide || 0);
  
  const slickPrev = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? children.length - 1 : prev - 1
    );
  };
  
  const slickNext = () => {
    setCurrentSlide((prev) => 
      prev === children.length - 1 ? 0 : prev + 1
    );
  };
  
  if (ref) {
    ref.current = { slickPrev, slickNext };
  }
  
  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children}
      </div>
    </div>
  );
};

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gallery = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img9 }
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
    arrows: false,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-pink-50 min-h-screen">
     <BreadCrumbs  headText={"Gallery"} items={breadcrumbItems} />
      <div className="relative">
        <div className="bg-pink-50 py-6 sm:py-8 lg:py-16">
          <div className="mx-auto container px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
              {gallery.slice().reverse().map((data, index) => (
                <a
                  href="#"
                  className="group relative flex h-[20rem] items-end justify-end overflow-hidden rounded-lg bg-pink-100 shadow-lg md:h-80 hover:shadow-xl transition-shadow"
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(index);
                  }}
                >
                  <img
                    src={data.image}
                    loading="lazy"
                    alt={`Gallery ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-800 via-transparent to-transparent opacity-40"></div> */}
                </a>
              ))}
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="relative w-full max-w-3xl p-4 bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-pink-800 hover:text-pink-900 z-10"
              >
                <X size={24} />
              </button>

              {/* Custom Arrows */}
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-100 hover:bg-pink-200 text-pink-800 p-2 rounded-full z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-100 hover:bg-pink-200 text-pink-800 p-2 rounded-full z-10"
              >
                <ChevronRight size={24} />
              </button>

              <Slider ref={sliderRef} settings={settings}>
                {gallery.slice().reverse().map((data, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <img
                      src={data.image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-[400px] object-contain rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}