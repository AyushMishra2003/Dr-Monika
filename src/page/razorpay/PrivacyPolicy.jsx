import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const primaryColor = "#E47F9F";
  const secondaryColor = "#5B2E67";
  
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  
  const policySection = [
    {
      title: "Information We Collect",
      content: (
        <div>
          <p className="mb-4">At Sadbhawana Clinic, we collect the following types of personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Personal details (name, age, gender, address, contact information)</li>
            <li className="mb-2">Medical history and health information</li>
            <li className="mb-2">Appointment preferences and scheduling information</li>
            <li className="mb-2">Insurance and payment information</li>
            <li className="mb-2">Device information when accessing our website or application</li>
          </ul>
          <p>We collect this information directly from you when you book appointments, request home collection services, schedule pathology tests, or communicate with our staff.</p>
        </div>
      )
    },
    {
      title: "How We Use Your Information",
      content: (
        <div>
          <p className="mb-4">We use your personal information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Scheduling and managing appointments</li>
            <li className="mb-2">Providing medical services and treatment</li>
            <li className="mb-2">Coordinating home collection visits</li>
            <li className="mb-2">Processing pathology test requests and delivering results</li>
            <li className="mb-2">Billing and payment processing</li>
            <li className="mb-2">Communicating appointment reminders and follow-ups</li>
            <li className="mb-2">Improving our services and patient experience</li>
            <li className="mb-2">Complying with legal and regulatory requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Information Sharing and Disclosure",
      content: (
        <div>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Healthcare professionals involved in your care</li>
            <li className="mb-2">Laboratory partners for pathology testing</li>
            <li className="mb-2">Home collection service providers</li>
            <li className="mb-2">Insurance providers for billing purposes</li>
            <li className="mb-2">Third-party service providers who help us operate our services</li>
          </ul>
          <p className="mb-4">We will never sell your personal information to third parties for marketing purposes.</p>
          <p>We may disclose your information when required by law, court order, or other legal processes.</p>
        </div>
      )
    },
    {
      title: "Data Security",
      content: (
        <div>
          <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Encryption of sensitive data</li>
            <li className="mb-2">Secure servers and networks</li>
            <li className="mb-2">Regular security assessments and updates</li>
            <li className="mb-2">Staff training on data protection</li>
            <li className="mb-2">Access controls and authentication measures</li>
          </ul>
          <p>Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.</p>
        </div>
      )
    },
    {
      title: "Your Rights",
      content: (
        <div>
          <p className="mb-4">You have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Right to access your personal information</li>
            <li className="mb-2">Right to correct inaccurate information</li>
            <li className="mb-2">Right to request deletion of your information (subject to legal requirements)</li>
            <li className="mb-2">Right to restrict processing of your information</li>
            <li className="mb-2">Right to data portability</li>
            <li className="mb-2">Right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
        </div>
      )
    },
    {
      title: "Cookies and Tracking",
      content: (
        <div>
          <p className="mb-4">Our website uses cookies and similar technologies to enhance your browsing experience and collect information about how you use our services. We use:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Essential cookies necessary for the website to function</li>
            <li className="mb-2">Analytics cookies to understand how visitors interact with our website</li>
            <li className="mb-2">Functional cookies to remember your preferences</li>
          </ul>
          <p>You can manage your cookie preferences through your browser settings.</p>
        </div>
      )
    },
    {
      title: "Appointment Booking and Online Services",
      content: (
        <div>
          <p className="mb-4">When you use our online appointment booking system, home collection scheduling, or pathology test scheduling services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">We collect information necessary to process your request</li>
            <li className="mb-2">We may send appointment confirmations and reminders via email or SMS</li>
            <li className="mb-2">We store your appointment history to provide better service</li>
            <li className="mb-2">Your preferred time slots and appointment types are saved to facilitate future bookings</li>
          </ul>
          <p>You can opt out of appointment reminders by contacting our office.</p>
        </div>
      )
    },
    {
      title: "Changes to Privacy Policy",
      content: (
        <div>
          <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised "Last Updated" date.</p>
          <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
        </div>
      )
    },
    {
      title: "Contact Us",
      content: (
        <div>
          <p className="mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <div className="mb-4">
            <p className="font-medium">At Sadbhawana Clinic</p>
            <p>Email: Sadbhawanaclinic98@gmail.com</p>
            <p>Phone: +91 9277163686</p>
            <p>Address: H-No 2, Sadbhavna Clinic, Sect-10, Indira Nagar, near Arvindo Park,
Lucknow, Uttar Pradesh 226016</p>
          </div>
          <p>We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.</p>
        </div>
      )
    }
  ];


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        className="w-full py-6 px-4 md:px-8" 
        style={{ backgroundColor: secondaryColor }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-200 mt-2">At Sadbhawana Clinic - Your Health, Our Priority</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4 md:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-700">
               At Sadbhawana Clinic, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including appointment booking, home collection services, and pathology testing.
            </p>
            <p className="text-gray-700 mt-4">
              By using our services, you consent to the practices described in this policy. Please read this policy carefully to understand our practices regarding your personal information.
            </p>
            <p className="text-gray-700 mt-4">
              Last Updated: May 10, 2025
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-4">
            {policySection.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                  style={{ backgroundColor: activeSection === index ? primaryColor : 'white', color: activeSection === index ? 'white' : 'black' }}
                >
                  <span className="font-medium text-lg">{section.title}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${activeSection === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeSection === index && (
                  <div className="p-4 border-t border-gray-200">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

   
    </div>
  );
};

export default PrivacyPolicy;