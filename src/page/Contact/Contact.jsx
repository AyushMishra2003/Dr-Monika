import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Calendar, MessageSquare, ChevronDown, Menu, X } from 'lucide-react';
import BreadcrumbComponent from '../../component/Breadcums';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    const [activeTab, setActiveTab] = useState('contact');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your message! Dr. Monika will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Contact Dr. Monika' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen">
            {/* Mobile Navigation */}
            <div className="lg:hidden relative z-30">
                <div className="flex items-center justify-between py-4 px-4 bg-white shadow-md">
                    <div className="flex items-center">
                        <img src="/api/placeholder/40/40" alt="Logo" className="h-10 w-auto" />
                        <span className="ml-2 font-bold text-pink-600">Dr. Monika's Dental Care</span>
                    </div>
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-500 focus:outline-none"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4 space-y-4 animate-fadeIn">
                        <button 
                            onClick={() => {
                                setActiveTab('contact');
                                setMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-md ${
                                activeTab === 'contact' ? 'bg-pink-50 text-pink-600' : 'text-gray-700'
                            }`}
                        >
                            <MessageSquare className="inline-block w-5 h-5 mr-2" />
                            Contact Us
                        </button>
                        <button 
                            onClick={() => {
                                setActiveTab('appointment');
                                setMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-md ${
                                activeTab === 'appointment' ? 'bg-pink-50 text-pink-600' : 'text-gray-700'
                            }`}
                        >
                            <Calendar className="inline-block w-5 h-5 mr-2" />
                            Book Appointment
                        </button>
                    </div>
                )}
            </div>

            <BreadcrumbComponent headerText='Contact Dr. Monika' items={breadcrumbItems} />
            
            {/* Hero Section - Responsive */}
            <div className="relative bg-gradient-to-r from-pink-300 to-pink-400 py-8 md:py-16">
                <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Get in Touch with Dr. Monika</h1>
                    <p className="text-base md:text-xl text-pink-100 max-w-2xl mx-auto">
                        Have questions about your dental health? Need to schedule an appointment? We're here to help you achieve your best smile.
                    </p>
                </div>
            </div>

            {/* Tab Navigation - Desktop Only */}
            <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 hidden lg:block">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex p-1 bg-pink-50 rounded-lg">
                        <button 
                            onClick={() => setActiveTab('contact')}
                            className={`px-6 py-3 rounded-md font-medium transition-all ${
                                activeTab === 'contact' 
                                    ? 'bg-white text-pink-600 shadow-md' 
                                    : 'text-gray-600 hover:text-pink-500'
                            }`}
                        >
                            <MessageSquare className="inline-block w-5 h-5 mr-2" />
                            Contact
                        </button>
                        <button 
                            onClick={() => setActiveTab('appointment')}
                            className={`px-6 py-3 rounded-md font-medium transition-all ${
                                activeTab === 'appointment' 
                                    ? 'bg-white text-pink-600 shadow-md' 
                                    : 'text-gray-600 hover:text-pink-500'
                            }`}
                        >
                            <Calendar className="inline-block w-5 h-5 mr-2" />
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content - Responsive */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12">
                {activeTab === 'contact' ? (
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Contact Info Cards - Stack on mobile, side by side on larger screens */}
                        <div className="w-full lg:w-1/3 space-y-4 md:space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border-t-4 border-pink-400">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="bg-pink-100 p-2 sm:p-3 rounded-full">
                                        <MapPin className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold text-gray-800">Visit Dr. Monika</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Dr. Monika's Dental Care<br />
                                    123 Indra Nagar, Sector 14<br />
                                    Lucknow, Uttar Pradesh 226016
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border-t-4 border-pink-300">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="bg-pink-100 p-2 sm:p-3 rounded-full">
                                        <Phone className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold text-gray-800">Call Dr. Monika</h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center flex-wrap">
                                        <div className="bg-pink-50 p-1 sm:p-2 rounded mr-2 sm:mr-3 mb-1 sm:mb-0">
                                            <span className="text-pink-600 text-xs sm:text-sm font-medium">Office</span>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600">(+91) 84004 85555</p>
                                    </div>
                                    <div className="flex items-center flex-wrap">
                                        <div className="bg-pink-50 p-1 sm:p-2 rounded mr-2 sm:mr-3 mb-1 sm:mb-0">
                                            <span className="text-pink-600 text-xs sm:text-sm font-medium">Emergency</span>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600">(+91) 84004 85555</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white min-h-200px rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border-t-4 border-pink-500">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="bg-pink-100 p-2 sm:p-3 rounded-full">
                                        <Clock className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold text-gray-800">Office Hours</h3>
                                </div>
                                <div className="space-y-1 sm:space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Monday - Friday:</span>
                                        <span className="text-sm sm:text-base text-gray-600">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Saturday:</span>
                                        <span className="text-sm sm:text-base text-gray-600">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Sunday:</span>
                                        <span className="text-sm sm:text-base text-gray-600">Closed</span>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-gray-100">
                                        <p className="text-xs text-pink-600 font-medium">* Special hours for emergencies</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Full width on mobile, 2/3 on desktop */}
                        <div className="w-full lg:w-2/3 mt-6 lg:mt-0 h-full ">
                            <div className="bg-white rounded-xl shadow-lg py-6 px-4 sm:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Send Dr. Monika a Message</h3>

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="johndoe@example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="(+91) 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="Appointment Request"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                            placeholder="Please write your message here..."
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-center sm:justify-start">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
                        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                            <div className="w-full md:w-1/3">
                                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                                    <h3 className="text-xl font-bold text-pink-700 mb-3">Appointment Information</h3>
                                    <p className="text-gray-700 mb-4">
                                        Request your preferred date and time to see Dr. Monika. We'll confirm your appointment as soon as possible.
                                    </p>
                                    <div className="space-y-3 mt-6">
                                        <div className="flex items-start">
                                            <Clock className="text-pink-600 w-5 h-5 mt-1 flex-shrink-0" />
                                            <span className="ml-3 text-gray-700">
                                                Appointments are typically scheduled in 30-minute intervals
                                            </span>
                                        </div>
                                        <div className="flex items-start">
                                            <Phone className="text-pink-600 w-5 h-5 mt-1 flex-shrink-0" />
                                            <span className="ml-3 text-gray-700">
                                                Call (+91) 84004 85555 for urgent appointments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full md:w-2/3 mt-6 md:mt-0">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="appName"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="Your Full Name"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="appPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="appPhone"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="(+91) 98765 43210"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="appEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="appEmail"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="appService" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                                            <select
                                                id="appService"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                <option value="consultation">General Consultation</option>
                                                <option value="cleaning">Teeth Cleaning</option>
                                                <option value="whitening">Teeth Whitening</option>
                                                <option value="filling">Dental Filling</option>
                                                <option value="root-canal">Root Canal</option>
                                                <option value="extraction">Tooth Extraction</option>
                                                <option value="other">Other Treatment</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="appDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                            <input
                                                type="date"
                                                id="appDate"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="appTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                            <select
                                                id="appTime"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                                required
                                            >
                                                <option value="">Select time slot</option>
                                                <option value="9-10">9:00 AM - 10:00 AM</option>
                                                <option value="10-11">10:00 AM - 11:00 AM</option>
                                                <option value="11-12">11:00 AM - 12:00 PM</option>
                                                <option value="12-1">12:00 PM - 1:00 PM</option>
                                                <option value="2-3">2:00 PM - 3:00 PM</option>
                                                <option value="3-4">3:00 PM - 4:00 PM</option>
                                                <option value="4-5">4:00 PM - 5:00 PM</option>
                                                <option value="5-6">5:00 PM - 6:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="appNotes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                                        <textarea
                                            id="appNotes"
                                            rows="3"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                                            placeholder="Please share any specific concerns or questions you have"
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex justify-center sm:justify-start pt-2">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
                                        >
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Book Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Map Section - Responsive */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12">
                <div className="rounded-xl overflow-hidden shadow-lg border">
                    <div className="bg-white p-4 border-b">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center">
                            <MapPin className="text-pink-600 w-5 h-5 mr-2" />
                            Find Dr. Monika's Dental Care
                        </h3>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.549043657853!2d80.99245777489408!3d26.88606506123623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958077d93ca43%3A0x7a2d9fde1f0a53a2!2sShine%20dental%20clinic!5e0!3m2!1sen!2sin!4v1744893525404!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Footer Call-to-Action - Responsive */}
            <div className="bg-pink-500 mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Ready for your best smile?</h3>
                            <p className="text-pink-100 text-sm sm:text-base">Schedule your appointment with Dr. Monika today!</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="tel:+918400485555" className="inline-flex items-center justify-center px-5 py-3 bg-white text-pink-600 font-medium rounded-lg hover:bg-pink-50 transition">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now
                            </a>
                            <button 
                                onClick={() => {
                                    setActiveTab('appointment');
                                    window.scrollTo({top: 0, behavior: 'smooth'});
                                }}
                                className="inline-flex items-center justify-center px-5 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Online
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;