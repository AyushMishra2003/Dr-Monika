import React, { useEffect, useState } from 'react';

const TermsAndConditions = () => {
    const primaryColor = "#E47F9F";
    const secondaryColor = "#5B2E67";

    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const policySection = [
        {
            title: "Acceptance of Terms",
            content: (
                <div>
                    <p className="mb-4">By accessing and using the services provided by At Sadbhawana Clinic (Sadbhavna Clinic), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
                    <p>These Terms and Conditions apply to all services offered, including but not limited to appointment booking, consultations, home collection services, pathology testing, and any other medical services provided through our website, mobile application, or in-person visits.</p>
                </div>
            )
        },
        {
            title: "Medical Services",
            content: (
                <div>
                    <p className="mb-4">Our services are provided for the purpose of diagnosis, treatment, and management of medical conditions. By using our services, you acknowledge that:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Medical advice provided is based on the information you share with us. Incomplete or inaccurate information may lead to inappropriate medical advice.</li>
                        <li className="mb-2">While we strive for accuracy, no medical service can guarantee specific results or outcomes.</li>
                        <li className="mb-2">Our services do not replace emergency medical care. In case of medical emergencies, please visit the nearest emergency room or call emergency services.</li>
                        <li className="mb-2">Follow-up appointments may be necessary to monitor your condition and treatment progress.</li>
                    </ul>
                    <p>We reserve the right to refuse service to anyone for legitimate reasons, including but not limited to patient safety concerns, inappropriate behavior, or non-compliance with treatment plans.</p>
                </div>
            )
        },
        {
            title: "Appointment Booking",
            content: (
                <div>
                    <p className="mb-4">When booking appointments through our services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">You agree to provide accurate personal and contact information.</li>
                        <li className="mb-2">You commit to arriving on time for your scheduled appointment.</li>
                        <li className="mb-2">Cancellations and rescheduling must follow our policies as outlined in our Refund Policy.</li>
                        <li className="mb-2">We will make reasonable efforts to accommodate your preferred appointment times, but cannot guarantee specific time slots.</li>
                        <li className="mb-2">We may send you appointment reminders via email, SMS, or phone call, which you can opt out of at any time.</li>
                    </ul>
                    <p>Repeated no-shows or late cancellations may result in additional fees or restrictions on future bookings.</p>
                </div>
            )
        },
        {
            title: "Home Collection Services",
            content: (
                <div>
                    <p className="mb-4">For our home collection services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">You agree to provide accurate address and contact information.</li>
                        <li className="mb-2">A responsible adult (age 18+) must be present during the home visit.</li>
                        <li className="mb-2">Safe and hygienic conditions must be provided for sample collection.</li>
                        <li className="mb-2">Our staff may reschedule if conditions are deemed unsafe or unsuitable.</li>
                        <li className="mb-2">Service areas and times are subject to availability and may change without notice.</li>
                        <li className="mb-2">Additional fees may apply based on location and time of service.</li>
                    </ul>
                    <p>Cancellation of home collection services must be made according to our Refund Policy to avoid charges.</p>
                </div>
            )
        },
        {
            title: "Pathology Testing",
            content: (
                <div>
                    <p className="mb-4">For pathology testing services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Test results are provided for medical purposes only and should be interpreted by qualified healthcare professionals.</li>
                        <li className="mb-2">Turnaround times for test results are estimates and not guarantees.</li>
                        <li className="mb-2">Sample collection may need to be repeated if the initial sample is inadequate or contaminated.</li>
                        <li className="mb-2">We may engage third-party laboratories for specialized testing, who maintain their own quality standards.</li>
                        <li className="mb-2">Test reports will be delivered through secure channels to protect your privacy.</li>
                    </ul>
                    <p>We follow standard laboratory protocols and quality assurance procedures but cannot guarantee that all test results will be 100% accurate under all circumstances.</p>
                </div>
            )
        },
        {
            title: "Payment Terms",
            content: (
                <div>
                    <p className="mb-4">Regarding payments for our services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Payment is expected at the time of service unless otherwise arranged.</li>
                        <li className="mb-2">We accept various payment methods including cash, credit/debit cards, and approved digital payment platforms.</li>
                        <li className="mb-2">Insurance coverage verification is the patient's responsibility, though we may assist with the process.</li>
                        <li className="mb-2">Prices are subject to change without prior notice, but the quoted price at the time of booking will be honored.</li>
                        <li className="mb-2">Additional services requested during an appointment may incur extra charges.</li>
                    </ul>
                    <p>Detailed billing information and receipts will be provided for all transactions. For disputes, please contact our billing department promptly.</p>
                </div>
            )
        },
        {
            title: "Patient Responsibilities",
            content: (
                <div>
                    <p className="mb-4">As a patient using our services, you are responsible for:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">Providing accurate and complete medical history and personal information.</li>
                        <li className="mb-2">Following treatment plans and medical advice provided by our healthcare professionals.</li>
                        <li className="mb-2">Asking questions when you don't understand your diagnosis or treatment.</li>
                        <li className="mb-2">Informing us of any changes in your health condition.</li>
                        <li className="mb-2">Treating our staff, other patients, and facilities with respect and courtesy.</li>
                        <li className="mb-2">Making payments promptly as per the agreed terms.</li>
                    </ul>
                    <p>Failure to fulfill these responsibilities may affect the quality of care we can provide and, in extreme cases, may result in termination of the doctor-patient relationship.</p>
                </div>
            )
        },
        {
            title: "Online Services and Website Use",
            content: (
                <div>
                    <p className="mb-4">When using our website and online services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">You agree not to use our online platforms for any unlawful purpose or in any way that might damage or impair service functionality.</li>
                        <li className="mb-2">Account credentials, if provided, should be kept confidential and not shared with others.</li>
                        <li className="mb-2">We are not responsible for technical issues beyond our control that may affect service availability.</li>
                        <li className="mb-2">Content on our website is for informational purposes only and should not be considered as definitive medical advice.</li>
                        <li className="mb-2">We reserve the right to modify or discontinue any aspect of our online services with or without notice.</li>
                    </ul>
                    <p>By using our online services, you agree to our Privacy Policy regarding the collection and use of your personal information.</p>
                </div>
            )
        },
        // {
        //     title: "Limitation of Liability",
        //     content: (
        //         <div>
        //             <p className="mb-4">To the fullest extent permitted by law:</p>
        //             <ul className="list-disc pl-6 mb-4">
        //                 <li className="mb-2">At Sadbhawana Clinic (Sadbhavna Clinic) and its healthcare professionals shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</li>
        //                 <li className="mb-2">We are not liable for any harm resulting from your reliance on information obtained through our services.</li>
        //                 <li className="mb-2">Our liability for any claim arising from our services shall not exceed the amount paid by you for the specific service in question.</li>
        //                 <li className="mb-2">We are not liable for any delay or failure to perform due to causes beyond our reasonable control.</li>
        //             </ul>
        //             <p>This limitation of liability does not apply to liability arising from gross negligence or willful misconduct.</p>
        //         </div>
        //     )
        // },
        // {
        //     title: "Intellectual Property",
        //     content: (
        //         <div>
        //             <p className="mb-4">All content on our website and applications, including but not limited to text, graphics, logos, images, and software, is the property of At Sadbhawana Clinic (Sadbhavna Clinic) and is protected by intellectual property laws.</p>
        //             <ul className="list-disc pl-6 mb-4">
        //                 <li className="mb-2">You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.</li>
        //                 <li className="mb-2">You may print or download content for personal, non-commercial use only.</li>
        //                 <li className="mb-2">Any feedback, suggestions, or ideas provided by you regarding our services may be used by us without obligation to you.</li>
        //             </ul>
        //             <p>Unauthorized use of our intellectual property may result in legal action.</p>
        //         </div>
        //     )
        // },
        // {
        //     title: "Governing Law and Dispute Resolution",
        //     content: (
        //         <div>
        //             <p className="mb-4">These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
        //             <ul className="list-disc pl-6 mb-4">
        //                 <li className="mb-2">Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh, India.</li>
        //                 <li className="mb-2">Before initiating any legal proceedings, you agree to attempt to resolve the dispute through mediation or direct negotiation.</li>
        //                 <li className="mb-2">Any claim or cause of action arising from these terms must be filed within one (1) year after such claim or cause of action arose.</li>
        //             </ul>
        //             <p>By using our services, you consent to the jurisdiction and venue of such courts.</p>
        //         </div>
        //     )
        // },
        // {
        //     title: "Changes to Terms and Conditions",
        //     content: (
        //         <div>
        //             <p className="mb-4">We reserve the right to update, change, or replace any part of these Terms and Conditions by posting updates or changes to our website. It is your responsibility to check our website periodically for changes.</p>
        //             <p className="mb-4">Your continued use of our services following the posting of any changes constitutes acceptance of those changes.</p>
        //             <p>We will make reasonable efforts to notify registered users of significant changes to these terms via email or through notifications on our website or application.</p>
        //         </div>
        //     )
        // }
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
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Terms & Conditions</h1>
                    <p className="text-gray-200 mt-2">At Sadbhawana Clinic - Your Health, Our Priority</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto py-8 px-4 md:px-8">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="mb-8">
                        {/* <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
                            Terms of Service Agreement
                        </h2> */}
                        <p className="text-gray-700">
                            Welcome to At Sadbhawana Clinic. These Terms and Conditions constitute a legally binding agreement between you and At Sadbhawana Clinic regarding your use of our healthcare services, website, and other offerings.
                        </p>
                        <p className="text-gray-700 mt-4">
                            Please read these terms carefully before using our services. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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

export default TermsAndConditions;