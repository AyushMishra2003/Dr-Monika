import { useEffect, useState } from "react";
import { Check, Calendar, MapPin, Phone, User, Clock, X, ArrowRight, ArrowLeft } from "lucide-react";
import BreadCrumbs from "../../component/Breadcums";

export default function BookHomeCollection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    sex: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    collectionDate: "",
    collectionTime: "",
    tests: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [testSelectionOpen, setTestSelectionOpen] = useState(false);

  const availableTests = [
    { id: 1, name: "Complete Blood Count (CBC)", price: 500 },
    { id: 2, name: "Blood Glucose Test", price: 300 },
    { id: 3, name: "Lipid Profile", price: 800 },
    { id: 4, name: "Liver Function Test", price: 1200 },
    { id: 5, name: "Thyroid Profile", price: 1500 },
    { id: 6, name: "Vitamin D Test", price: 1800 },
    { id: 7, name: "HbA1c", price: 600 },
    { id: 8, name: "Kidney Function Test", price: 1000 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleTestSelection = (test) => {
    const isSelected = formData.tests.some(t => t.id === test.id);

    if (isSelected) {
      setFormData({
        ...formData,
        tests: formData.tests.filter(t => t.id !== test.id),
      });
    } else {
      setFormData({
        ...formData,
        tests: [...formData.tests, test],
      });
    }

    if (errors.tests) {
      setErrors({
        ...errors,
        tests: null,
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) newErrors.patientName = "Patient name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.sex) newErrors.sex = "Sex is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";

    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.collectionDate) newErrors.collectionDate = "Collection date is required";
    if (!formData.collectionTime) newErrors.collectionTime = "Collection time is required";
    if (formData.tests.length === 0) newErrors.tests = "Please select at least one test";

    return newErrors;
  };

  const goToNextStep = () => {
    const newErrors = validateStep1();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStep(2);
  };

  const goToPreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    const newErrors = validateStep2();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      patientName: "",
      age: "",
      sex: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      pincode: "",
      collectionDate: "",
      collectionTime: "",
      tests: [],
    });
    setSubmitted(false);
    setErrors({});
    setStep(1);
  };

  const calculateTotal = () => {
    return formData.tests.reduce((total, test) => total + test.price, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div className="p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your home collection has been scheduled for {formData.collectionDate} at {formData.collectionTime}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Booking Details</h3>
              <div className="text-left text-sm text-gray-600">
                <p><span className="font-medium">Patient:</span> {formData.patientName}</p>
                <p><span className="font-medium">Tests:</span> {formData.tests.map(t => t.name).join(', ')}</p>
                <p><span className="font-medium">Address:</span> {formData.address}, {formData.city} - {formData.pincode}</p>
                <p><span className="font-medium">Contact:</span> {formData.mobile}</p>
                <p><span className="font-medium">Total Amount:</span> ₹{calculateTotal()}</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              A confirmation SMS has been sent to your registered mobile number. Our phlebotomist will contact you before the visit.
            </p>

            <button
              onClick={resetForm}
              className="w-full bg-[#e47f9f] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Book Another Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <BreadCrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Book Home Collection',  },
        ]}
        headText="Gynaecology & Obstetrics"
      />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">


        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl mb-8">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Home Collection</h2>
                <div className="flex items-center text-[#e47f9f]">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium">Book Tests at Home</span>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center mb-8">
                <div className="flex items-center relative">
                  <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center ${step === 2 ? 'bg-[#e47f9f] text-white' : 'bg-blue-200'}`}>
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium ${step === 2 ? 'text-[#e47f9f]' : 'text-gray-500'}`}>Test Selection</div>
                </div>
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step === 2 ? 'border-[#e47f9f]' : 'border-gray-300'}`}></div>
                <div className="flex items-center relative">
                  <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center ${step === 1 ? 'bg-[#e47f9f] text-white' : 'bg-blue-200'}`}>
                    <User className="h-6 w-6" />
                  </div>
                  <div className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium ${step === 1 ? 'text-[#e47f9f]' : 'text-gray-500'}`}>Patient Details</div>
                </div>


              </div>

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Information</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="col-span-2">
                        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                          Patient Name*
                        </label>
                        <input
                          type="text"
                          id="patientName"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${errors.patientName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.patientName && <p className="mt-1 text-sm text-red-600">{errors.patientName}</p>}
                      </div>

                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                          Age*
                        </label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                      </div>

                      <div>
                        <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-1">
                          Sex*
                        </label>
                        <select
                          id="sex"
                          name="sex"
                          value={formData.sex}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${errors.sex ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.sex && <p className="mt-1 text-sm text-red-600">{errors.sex}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                          Mobile Number*
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Address Details</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address*
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City*
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                          />
                          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                        </div>

                        <div>
                          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                            Pincode*
                          </label>
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                          />
                          {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={goToNextStep}
                      className="w-full bg-[#e47f9f] text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
                    >
                      Continue to Test Selection
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Collection Details</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="collectionDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Date*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="collectionDate"
                            name="collectionDate"
                            value={formData.collectionDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full pl-10 pr-3 py-2 border ${errors.collectionDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                          />
                        </div>
                        {errors.collectionDate && <p className="mt-1 text-sm text-red-600">{errors.collectionDate}</p>}
                      </div>

                      <div>
                        <label htmlFor="collectionTime" className="block text-sm font-medium text-gray-700 mb-1">
                          Time*
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="collectionTime"
                            name="collectionTime"
                            value={formData.collectionTime}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border ${errors.collectionTime ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                          >
                            <option value="">Select Time</option>
                            <option value="07:00 AM - 08:00 AM">07:00 AM - 08:00 AM</option>
                            <option value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</option>
                            <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                            <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                            <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                            <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                          </select>
                        </div>
                        {errors.collectionTime && <p className="mt-1 text-sm text-red-600">{errors.collectionTime}</p>}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Select Tests</h3>
                    <div
                      className={`border ${errors.tests ? 'border-red-500' : 'border-gray-300'} rounded-md p-4 mb-2`}
                    >
                      <button
                        type="button"
                        onClick={() => setTestSelectionOpen(!testSelectionOpen)}
                        className="flex justify-between w-full text-left text-sm font-medium text-gray-700 mb-2"
                      >
                        <span>
                          {formData.tests.length > 0
                            ? `${formData.tests.length} test${formData.tests.length > 1 ? 's' : ''} selected`
                            : 'Select tests'}
                        </span>
                        <span className="text-[#e47f9f]">{testSelectionOpen ? 'Close' : 'View Tests'}</span>
                      </button>

                      {formData.tests.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {formData.tests.map(test => (
                            <div key={test.id} className="inline-flex items-center bg-blue-50 px-2 py-1 rounded-md">
                              <span className="text-xs text-blue-800">{test.name}</span>
                              <button
                                type="button"
                                onClick={() => handleTestSelection(test)}
                                className="ml-1 text-blue-700 hover:text-blue-900"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {testSelectionOpen && (
                        <div className="mt-2 border-t pt-2">
                          <div className="max-h-60 overflow-y-auto">
                            {availableTests.map(test => {
                              const isSelected = formData.tests.some(t => t.id === test.id);
                              return (
                                <div
                                  key={test.id}
                                  className={`flex items-center justify-between p-2 ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'} rounded cursor-pointer`}
                                  onClick={() => handleTestSelection(test)}
                                >
                                  <div className="flex items-center">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => { }}
                                      className="h-4 w-4 text-[#e47f9f] border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">{test.name}</label>
                                  </div>
                                  <span className="text-sm font-medium text-gray-900">₹{test.price}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                    {errors.tests && <p className="mt-1 text-sm text-red-600">{errors.tests}</p>}

                    {formData.tests.length > 0 && (
                      <div className="mt-4 bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between text-sm font-medium">
                          <span>Total Amount:</span>
                          <span className="text-lg font-bold">₹{calculateTotal()}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button
                      onClick={goToPreviousStep}
                      className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-[#e47f9f] text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Book Home Collection
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto text-center text-sm text-gray-500">
          <p>Need help? Contact our support at 1800-123-4567</p>
        </div>
      </div>
    </section>
  );
}