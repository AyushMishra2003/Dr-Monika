import { Home, MapPin, User, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  const primaryColor = "#E47F9F";
  const secondaryColor = "#5B2E67";
  
  return (
    <div className="w-full bg-[#5B2E67] text-white py-2 hidden md:block">
      <div className="max-w-full px-4 mx-auto">
        {/* Contact Information Row */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="flex-shrink-0" />
            <a href='https://www.google.co.in/maps/place/Dr+Monika+Pandey+Best+Gynaecologist+in+Indira+Nagar/@26.8854118,80.9986954,17z/data=!3m1!4b1!4m6!3m5!1s0x3999592fb08ce83b:0x969f7467a24cfb3b!8m2!3d26.885407!4d81.0012703!16s%2Fg%2F11vpf7nlyn?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
            <span className="text-sm">
              H-No 2, Sadbhawana Clinic, Sect-10, Indira Nagar, Lucknow, Uttar Pradesh 226016
            </span>
            </a>
          </div>
          
          {/* Phone Numbers */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Call for Help</span>
            <div className="flex items-center">
              <Phone size={16} className="mr-1 flex-shrink-0" />
              <a href="tel:919838346118" className="text-sm">+91-9838346118</a>
              <span className="mx-1">,</span>
              <a href="tel:919277163686" className="text-sm">+91-9277163686</a>
            </div>
          </div>
        </div>
        
        {/* Navigation Links Row */}
        {/* <div className="flex justify-end mt-1">
          <div className="flex items-center space-x-6">
            <Link to="/home-collection" className="flex items-center text-sm hover:text-[#E47F9F] transition-colors">
              <MapPin size={16} className="mr-1" />
              <span>Home-Collections</span>
            </Link>
            <Link to="/pathology" className="flex items-center text-sm hover:text-[#E47F9F] transition-colors">
              <User size={16} className="mr-1" />
              <span>Pathology</span>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopHeader;