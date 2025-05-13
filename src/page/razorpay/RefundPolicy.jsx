import React, { useEffect, useState } from 'react';

const RefundPolicy = () => {
    const primaryColor = "#E47F9F";
    const secondaryColor = "#5B2E67";

    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const policySection = [
        {
            title: "Appointment Cancellation and Refunds",
            content: (
                <div>
                    <p className="mb-4">Our appointment cancellation and refund policy is as follows:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2"><span className="font-medium">48+ Hours Notice:</span> Full refund of appointment fees or deposit</li>
                        <li className="mb-2"><span className="font-medium">24-48 Hours Notice:</span> 75% refund of appointment fees or deposit</li>
                        <li className="mb-2"><span className="font-medium">12-24 Hours Notice:</span> 50% refund of appointment fees or deposit</li>
                        <li className="mb-2"><span className="font-medium">Less than 12 Hours Notice:</span> No refund provided</li>
                    </ul>
                    <p className="mb-4">Cancellations can be made through our online portal, mobile app, or by calling our reception desk directly.</p>
                    <p>If you need to reschedule rather than cancel, please contact us as soon as possible, and we will try to accommodate your request without applying cancellation fees, subject to availability.</p>
                </div>
            )
        },
        {
            title: "Home Collection Service Refunds",
            content: (
                <div>
                    <p className="mb-4">For our home collection services, the following refund policy applies:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2"><span className="font-medium">24+ Hours Notice:</span> Full refund of home collection service fees</li>
                        <li className="mb-2"><span className="font-medium">6-24 Hours Notice:</span> 50% refund of home collection service fees</li>
                        <li className="mb-2"><span className="font-medium">Less than 6 Hours Notice:</span> No refund provided</li>
                    </ul>
                    <p className="mb-4">If our collection specialist is unable to collect the sample due to circumstances beyond your control, we will reschedule the service at no additional cost.</p>
                    <p>If our staff is unable to reach your location due to incorrect address information provided by you, a rescheduling fee may apply.</p>
                </div>
            )
        },
        {
            title: "Pathology Test Refunds",
            content: (
                <div>
                    <p className="mb-4">Our refund policy for pathology tests varies based on the stage of processing:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2"><span className="font-medium">Before Sample Collection:</span> Full refund of pathology test fees</li>
                        <li className="mb-2"><span className="font-medium">After Sample Collection, Before Processing:</span> 50% refund may be provided on a case-by-case basis</li>
                        <li className="mb-2"><span className="font-medium">After Test Processing Has Begun:</span> No refund will be provided as the materials and resources have been utilized</li>
                    </ul>
                    <p>If test results are inconclusive due to laboratory error or equipment malfunction, we will repeat the test at no additional cost or provide a full refund at your request.</p>
                </div>
            )
        },
        {
            title: "Emergency Situations",
            content: (
                <div>
                    <p className="mb-4">We understand that medical emergencies can occur unexpectedly. In cases of documented medical emergencies:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Full refunds may be provided for missed appointments, home collections, or pathology tests</li>
                        <li className="mb-2">Documentation of the emergency situation may be requested</li>
                        <li className="mb-2">Decisions are made on a case-by-case basis by our management team</li>
                    </ul>
                    <p>Please contact our customer service department as soon as possible to discuss your situation.</p>
                </div>
            )
        },
        {
            title: "Insurance and Third-Party Payments",
            content: (
                <div>
                    <p className="mb-4">For services covered by insurance or third-party payers:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Refunds for services covered by insurance will be processed according to the policies of the insurance provider</li>
                        <li className="mb-2">If you have paid out-of-pocket for a service that is later covered by insurance, we will refund your payment once we receive payment from the insurance company</li>
                        <li className="mb-2">Processing of insurance-related refunds may take 4-6 weeks depending on the insurance provider</li>
                    </ul>
                    <p>We will assist you with all documentation needed to facilitate insurance claims and refunds.</p>
                </div>
            )
        },
        {
            title: "Processing of Refunds",
            content: (
                <div>
                    <p className="mb-4">Once a refund has been approved:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Credit/Debit Card Payments: Refunds will be processed back to the original payment card within 5-7 business days</li>
                        <li className="mb-2">Online Banking/UPI Payments: Refunds will be processed to the original account within 5-7 business days</li>
                        <li className="mb-2">Cash Payments: Refunds can be collected in person from our facility or transferred to your bank account (bank details required)</li>
                    </ul>
                    <p className="mb-4">Please note that while we process refunds promptly on our end, it may take additional time for the funds to appear in your account depending on your bank's processing times.</p>
                    <p>A confirmation email will be sent once your refund has been processed.</p>
                </div>
            )
        },
        {
            title: "Special Packages and Discounted Services",
            content: (
                <div>
                    <p className="mb-4">For special health packages and discounted services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Refunds for unused services in a package may be prorated based on the services already utilized</li>
                        <li className="mb-2">Promotional or discounted services may have different refund policies, which will be communicated at the time of purchase</li>
                        <li className="mb-2">Seasonal health camps and special programs may have non-refundable components, which will be clearly indicated</li>
                    </ul>
                    <p>If you have purchased a package and wish to cancel unused components, please contact our customer service for assistance.</p>
                </div>
            )
        },
        {
            title: "Non-Refundable Items",
            content: (
                <div>
                    <p className="mb-4">The following items and services are generally non-refundable:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Administrative fees for medical record transfers or documentation</li>
                        <li className="mb-2">Medical reports that have already been prepared and delivered</li>
                        <li className="mb-2">Consumable medical supplies that have been opened or used</li>
                        <li className="mb-2">Late cancellation fees or no-show charges</li>
                    </ul>
                    <p>Exceptions may be made at the discretion of management in unusual circumstances.</p>
                </div>
            )
        },
        {
            title: "Disputes and Resolutions",
            content: (
                <div>
                    <p className="mb-4">If you have a dispute regarding our refund policy:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Submit your concern in writing to our Patient Relations department</li>
                        <li className="mb-2">Include all relevant details and documentation</li>
                        <li className="mb-2">We will review your case and respond within 7 business days</li>
                        <li className="mb-2">Decisions made by the medical director or facility administrator are final</li>
                    </ul>
                    <p>We are committed to fair resolution of all disputes and will work with you to find an acceptable solution within the framework of our policies.</p>
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
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Refund Policy</h1>
                    <p className="text-gray-200 mt-2">Sadbhawana Clinic - Your Health, Our Priority</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto py-8 px-4 md:px-8">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
                            Our Approach to Refunds and Cancellations
                        </h2>
                        <p className="text-gray-700">
                            At Sadbhawana Clinic, we understand that circumstances may arise requiring you to cancel or reschedule your appointment, home collection, or pathology test. We have established this refund policy to ensure transparency and fairness in all our transactions.
                        </p>
                        <p className="text-gray-700 mt-4">
                            We strive to provide flexible options while maintaining the quality and sustainability of our services. Please review our refund policy carefully before scheduling appointments or services.
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

export default RefundPolicy;