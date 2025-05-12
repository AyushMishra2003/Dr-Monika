import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbs from '../../component/Breadcums';

import img1 from '../../assets/cases/img1.jpg'
import img2 from '../../assets/cases/img2.jpg'
import img3 from '../../assets/cases/img3.jpg'
import img4 from '../../assets/cases/img4.jpg'
import img5 from '../../assets/cases/img5.jpg'
import img6 from '../../assets/cases/img6.jpg'
import img7 from '../../assets/cases/img7.jpg'
import img8 from '../../assets/cases/img8.jpg'
import img9 from '../../assets/cases/img9.jpg'
import img10 from '../../assets/cases/img10.jpg'
import img11 from '../../assets/cases/img11.jpg'
import img12 from '../../assets/cases/img12.jpg'
import img13 from '../../assets/cases/img13.jpg'


const galleryData = [
  { id: 1, src: img1, alt: "Gallery Image 1" },
  { id: 2, src: img2, alt: "Gallery Image 2" },
  // { id: 3, src: img3, alt: "Gallery Image 3" },
  { id: 4, src: img4, alt: "Gallery Image 4" },
  { id: 5, src: img5, alt: "Gallery Image 5" },
  // { id: 6, src: img6, alt: "Gallery Image 6" },
  { id: 7, src: img7, alt: "Gallery Image 7" },
  // { id: 8, src: img8, alt: "Gallery Image 8" },
  // { id: 9, src: img9, alt: "Gallery Image 9" },
  // { id: 10, src: img10, alt: "Gallery Image 9" },
  // { id: 11, src: img11, alt: "Gallery Image 9" },
  // { id: 12, src: img12, alt: "Gallery Image 9" },
  { id: 13, src: img13, alt: "Gallery Image 9" },

];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // const dispatch = useDispatch()

  // const {galleryData, error, status} = useSelector((state)=>state.data)

  // useEffect(()=>{
  //   dispatch(fetchGalleryData())
  // },[])
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
     <BreadCrumbs
            title="Gallery"
            items={[
                { label: "Home", link: "/" },
                { label: "Gallery", link: "/gallery" },
              ]}
            // bgImage="/api/placeholder/1920/600"
          />
    <div className="min-h-screen bg-gray-100 lg:p-8 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden  shadow-lg bg-white group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.imageUrl || image.src} 
                alt={image.alt || 'Gallery Image'} 
                className="w-full lg:h-110 h-100 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30  flex items-center justify-center transition-all duration-300">
                <div className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 text-center">
                  <span className="text-xl font-bold"><ZoomIn size={50} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full max-h-screen p-4 flex items-center justify-center">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              <button 
                onClick={goToPrevious}
                className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Next Button */}
              <button 
                onClick={goToNext}
                className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <div className="w-full flex items-center justify-center">
                <img 
                  src={galleryData[currentImageIndex].imageUrl || galleryData[currentImageIndex].src} 
                  alt={galleryData[currentImageIndex].alt || 'Gallery Imnage'} 
                  className="max-h-screen max-w-full object-contain rounded-md  shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}