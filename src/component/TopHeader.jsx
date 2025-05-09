import { Home, MapPin, User, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


const TopHeader=()=> {
  const primaryColor = "#E47F9F";
  const secondaryColor = "#5B2E67";
  
  return (
    <div className="w-full bg-[#5B2E67] text-white py-1 hidden md:block">
      <div className="max-w-full px-4 mx-auto  flex justify-between items-center">
   
        <div className="flex items-center space-x-6">
        <div className="flex items-center">
            <Phone size={16} className="mr-1" />
            <a href="tel:919838346118" className="]">+91 9838346118</a>
          </div>
        <div className="flex items-center">
            <Phone size={16} className="mr-1" />
            <a href="tel:919277163686" className="]">+91-9277163686</a>
          </div>

        </div>

        <div className="flex items-center space-x-6">
          {/* <Link to="/" className="flex items-center hover:text-[#E47F9F] transition-colors">
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link> */}
          <Link to="/home-collection" className="flex items-center hover:text-[#E47F9F] transition-colors">
            <MapPin size={16} className="mr-1" />
            <span>Home-Collections</span>
          </Link>
          <Link to="/pathology" className="flex items-center hover:text-[#E47F9F] transition-colors">
            <User size={16} className="mr-1" />
            <span>Pathology</span>
          </Link>
        </div>


      </div>
    </div>
  );
}

export default TopHeader;