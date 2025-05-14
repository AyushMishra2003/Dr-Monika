import { useState, useEffect } from 'react';
import { CalendarDays, Clock, Check, AlertCircle, User, Phone, MapPin } from 'lucide-react';

// Days of the week
const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

// API endpoints
// const API_BASE_URL = 'http://localhost:6002/api/v1';
const API_BASE_URL = 'https://hr-management-codecrafter-1.onrender.com/api/v1'
const FETCH_APPOINTMENTS_URL = `${API_BASE_URL}/appointment/all`;
const BOOK_APPOINTMENT_URL = `${API_BASE_URL}/appointment/booking`;

// Main component
export default function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'processing', 'success', 'failed'
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Patient details
  const [patientDetails, setPatientDetails] = useState({
    patientName: '',
    phoneNumber: '',
    address: ''
  });

  // Handle patient details change
  const handlePatientDetailsChange = (e) => {
    setPatientDetails({
      ...patientDetails,
      [e.target.name]: e.target.value
    });
  };

  // Fetch existing appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(FETCH_APPOINTMENTS_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const result = await response.json();
        if (result.success) {
          setBookedAppointments(result.data);
        } else {
          throw new Error(result.message || 'Failed to fetch appointments');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching appointments:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
    window.scrollTo(0, 0);
  }, []);

  // Generate dates for the next 7 days
  const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Generate time slots based on current date and existing bookings
  useEffect(() => {
    if (isLoading) return;

    const morningSlots = [];
    const eveningSlots = [];

    // Get current time
    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Format selected date to check against booked appointments
    const formatSelectedDate = (hour, minute) => {
      const date = new Date(selectedDate);
      date.setHours(hour, minute, 0, 0);
      return date;
    };

    // Check if a slot is already booked
    const isSlotBooked = (hour, minute) => {
      const slotDateTime = formatSelectedDate(hour, minute);

      return bookedAppointments.some(appointment => {
        const appointmentDate = new Date(appointment.dateTime);
        return appointmentDate.getTime() === slotDateTime.getTime();
      });
    };

    // Morning slots (10:00 AM - 1:30 PM)
    for (let hour = 10; hour <= 13; hour++) {
      for (let minute = 0; minute < 60; minute += 20) {
        // Skip if last slot at 1:30 PM
        if (hour === 13 && minute > 30) continue;

        // Skip slots in the past for today
        if (isToday && (hour < currentHour || (hour === currentHour && minute < currentMinute))) {
          continue;
        }

        const timeStr = `${hour}:${minute === 0 ? '00' : minute}`;
        const displayHour = hour > 12 ? hour - 12 : hour;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayTime = `${displayHour}:${minute === 0 ? '00' : minute} ${ampm}`;
        const slotDate = formatSelectedDate(hour, minute);

        morningSlots.push({
          id: timeStr,
          displayTime,
          booked: isSlotBooked(hour, minute),
          dateTime: slotDate.toISOString()
        });
      }
    }

    // Evening slots (6:00 PM - 8:30 PM)
    for (let hour = 18; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 20) {
        // Skip if last slot at 8:30 PM
        if (hour === 20 && minute > 30) continue;

        // Skip slots in the past for today
        if (isToday && (hour < currentHour || (hour === currentHour && minute < currentMinute))) {
          continue;
        }

        const timeStr = `${hour}:${minute === 0 ? '00' : minute}`;
        const displayHour = hour > 12 ? hour - 12 : hour;
        const ampm = 'PM';
        const displayTime = `${displayHour}:${minute === 0 ? '00' : minute} ${ampm}`;
        const slotDate = formatSelectedDate(hour, minute);

        eveningSlots.push({
          id: timeStr,
          displayTime,
          booked: isSlotBooked(hour, minute),
          dateTime: slotDate.toISOString()
        });
      }
    }

    setAvailableTimeSlots([...morningSlots, ...eveningSlots]);
  }, [selectedDate, bookedAppointments, isLoading]);

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (slot) => {
    if (!slot.booked) {
      setSelectedTimeSlot(slot);
    }
  };

  // Submit appointment booking
  const handleBookAppointment = async () => {
    if (!selectedTimeSlot || !patientDetails.patientName || !patientDetails.phoneNumber) {
      return;
    }

    console.log(selectedTimeSlot, patientDetails);


    setPaymentStatus('processing');

    try {
      // Convert to ISO string with timezone offset (+05:30)
      // const istDateTime = new Date(selectedTimeSlot.dateTime).toLocaleString("sv-SE", {
      //   timeZone: "Asia/Kolkata"
      // }).replace(" ", "T") + "+05:30";


      const date = new Date(selectedTimeSlot.dateTime);

      // Convert to IST by adding 5.5 hours (19800 seconds = 5.5 * 60 * 60 * 1000 ms)
      const istTime = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));


      // patientName,phoneNumber,gender,purpose, dateTime,address

      const bookingData = {
        patientName: patientDetails.patientName,
        dateTime: istTime,
        phoneNumber: patientDetails.phoneNumber,
        address: patientDetails.address
      };

      console.log(bookingData);

      const response = await fetch(BOOK_APPOINTMENT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      if (result.success) {
        openRazorpayWindow();
      } else {
        setPaymentStatus('failed');
        setError(result.message || 'Failed to book appointment');
      }
    } catch (err) {
      setPaymentStatus('failed');
      setError(err.message || 'Failed to book appointment');
      console.error('Error booking appointment:', err);
    }
  };


  // Razorpay payment handler
  const handlePayment = () => {

    if (!patientDetails.patientName || !patientDetails.phoneNumber) {
      setError('Please fill in required patient details');
      return;
    }
    handleBookAppointment();
  };

  // Function to open Razorpay modal
  const openRazorpayWindow = () => {
    // Create a mock Razorpay options object
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Test key
      amount: 50000, // Amount in paisa (₹500)
      currency: "INR",
      name: "Health Clinic",
      description: "Appointment Booking",
      image: "/api/placeholder/80/80", // Logo
      prefill: {
        name: patientDetails.patientName,
        email: "",
        contact: patientDetails.phoneNumber
      },
      theme: {
        color: "#E47F9F"
      }
    };

    // Create mock Razorpay modal
    const razorpayModal = document.createElement('div');
    razorpayModal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
    razorpayModal.id = "razorpay-modal";

    // Modal content
    razorpayModal.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
        <div class="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] p-4 flex justify-between items-center">
          <div class="flex items-center">
            <img src="/api/placeholder/40/40" alt="Logo" class="w-8 h-8 mr-2 rounded" />
            <h3 class="text-white font-medium">Health Clinic</h3>
          </div>
          <button id="razorpay-close" class="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="p-6">
          <div class="flex justify-between mb-4">
            <span class="text-gray-600">Appointment Booking</span>
            <span class="font-bold">₹500.00</span>
          </div>
          
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm text-gray-600">Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" class="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none" />
            </div>
            
            <div class="flex space-x-4">
              <div class="space-y-2 w-1/2">
                <label class="block text-sm text-gray-600">Expiry Date</label>
                <input type="text" placeholder="MM/YY" class="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none" />
              </div>
              <div class="space-y-2 w-1/2">
                <label class="block text-sm text-gray-600">CVV</label>
                <input type="text" placeholder="123" class="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none" />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm text-gray-600">Name on Card</label>
              <input type="text" placeholder="John Doe" class="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none" />
            </div>
          </div>
          
          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center text-sm text-gray-500">
              <img src="/api/placeholder/60/24" alt="Razorpay" class="h-6" />
              <span class="ml-2">Powered by Razorpay</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span class="text-sm text-gray-600">Secure Payment</span>
            </div>
          </div>
        </div>
        
        <div class="p-4 bg-gray-50 flex justify-end">
          <button id="razorpay-cancel" class="px-4 py-2 mr-2 text-gray-700 hover:bg-gray-200 rounded">Cancel</button>
          <button id="razorpay-pay" class="px-4 py-2 bg-[#5B2E67] text-white rounded hover:bg-purple-900">Pay ₹500.00</button>
        </div>
      </div>
    `;

    // Add modal to body
    document.body.appendChild(razorpayModal);

    // Handle close button
    document.getElementById('razorpay-close').addEventListener('click', () => {
      document.body.removeChild(razorpayModal);
      setPaymentStatus(null);
    });

    // Handle cancel button
    document.getElementById('razorpay-cancel').addEventListener('click', () => {
      document.body.removeChild(razorpayModal);
      setPaymentStatus(null);
    });

    // Handle pay button
    document.getElementById('razorpay-pay').addEventListener('click', () => {
      // Show processing
      document.getElementById('razorpay-pay').innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 inline-block text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      `;

      // Simulate processing time
      setTimeout(() => {
        document.body.removeChild(razorpayModal);

        // Refresh appointment list after successful booking
        fetch(FETCH_APPOINTMENTS_URL)
          .then(response => response.json())
          .then(result => {
            if (result.success) {
              setBookedAppointments(result.data);
            }
          })
          .catch(err => console.error('Error refreshing appointments:', err));

        setPaymentStatus('success');
      }, 2000);
    });
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short'
    });
  };

  // Display loading state
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-4 items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="animate-spin mx-auto mb-4 h-10 w-10 border-4 border-pink-300 rounded-full border-t-pink-600"></div>
          <p className="text-gray-600">Loading appointments...</p>
        </div>
      </div>
    );
  }


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white p-6">
          <h1 className="text-2xl font-bold">Book Your Appointment</h1>
          <p className="text-pink-100 mt-2">Select your preferred date and time slot</p>
        </div>

        {/* Error display */}
        {error && (
          <div className="p-4 bg-red-50 text-red-700 flex items-center border-b border-red-100">
            <AlertCircle size={20} className="mr-2" />
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* Content based on payment status */}
        {paymentStatus === 'success' ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Your Booking!</h2>
            <p className="text-gray-600 mb-6">Your appointment has been confirmed.</p>
            <div className="bg-gray-50 p-4 rounded-lg inline-block mx-auto max-w-md">
              <div className="flex items-center mb-2">
                <User className="text-gray-600 mr-2" size={20} />
                <span className="font-medium">{patientDetails.patientName}</span>
              </div>
              <div className="flex items-center mb-2">
                <CalendarDays className="text-[#5B2E67] mr-2" size={20} />
                <span className="font-medium">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-600 mr-2" size={20} />
                <span className="font-medium">{selectedTimeSlot?.displayTime}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setPaymentStatus(null);
                setSelectedTimeSlot(null);
                setPatientDetails({
                  patientName: '',
                  phoneNumber: '',
                  address: ''
                });
              }}
              className="mt-8 bg-[#5B2E67] hover:bg-purple-900 text-white py-2 px-6 rounded-full transition-colors duration-300 font-medium"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <div className="md:flex">
            {/* Date selection */}
            <div className="md:w-1/3 p-6 border-r border-gray-200">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <CalendarDays className="mr-2 text-blue-600" size={18} />
                Select Date
              </h2>
              <div className="space-y-2">
                {nextSevenDays.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-pink-50 ${selectedDate.toDateString() === date.toDateString()
                        ? 'bg-pink-100 border-l-4 border-[#E47F9F]'
                        : 'bg-gray-50'
                      }`}
                  >
                    <div className="flex-1">
                      <div className="font-medium">{formatDate(date)}</div>
                      <div className="text-sm text-gray-500">{DAYS_OF_WEEK[date.getDay() === 0 ? 6 : date.getDay() - 1]}</div>
                    </div>
                    {selectedDate.toDateString() === date.toDateString() && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#5b2e67] to-[#e47f9f]"></div>
                    )}
                  </button>
                ))}
              </div>


            </div>

            {/* Time slots */}
            <div className="md:w-2/3 p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="mr-2 text-blue-600" size={18} />
                Select Time Slot
              </h2>

              {availableTimeSlots.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {availableTimeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleTimeSlotSelect(slot)}
                        disabled={slot.booked}
                        className={`p-3 rounded-lg text-center transition-all duration-200 ${selectedTimeSlot?.id === slot.id
                            ? 'bg-[#E47F9F] text-white ring-2 ring-pink-300 ring-offset-2'
                            : slot.booked
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-gray-100 hover:bg-pink-50 text-gray-700 hover:text-[#5B2E67]'
                          }`}
                      >
                        {slot.displayTime}
                        {slot.booked && <div className="text-xs mt-1">(Booked)</div>}
                      </button>
                    ))}
                  </div>

                  {/* Patient details form */}
                  {selectedTimeSlot && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <User className="mr-2 text-blue-600" size={18} />
                        Patient Details
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Name *</label>
                          <input
                            type="text"
                            name="patientName"
                            value={patientDetails.patientName}
                            onChange={handlePatientDetailsChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={patientDetails.phoneNumber}
                            onChange={handlePatientDetailsChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Address</label>
                          <textarea
                            name="address"
                            value={patientDetails.address}
                            onChange={handlePatientDetailsChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#E47F9F] focus:outline-none"
                            placeholder="Enter your address"
                            rows="3"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment button */}
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <button
                      onClick={handlePayment}
                      disabled={!selectedTimeSlot || !patientDetails.patientName || !patientDetails.phoneNumber || paymentStatus === 'processing'}
                      className={`w-full sm:w-auto px-8 py-3 rounded-lg font-medium transition-all duration-300 ${!selectedTimeSlot || !patientDetails.patientName || !patientDetails.phoneNumber || paymentStatus === 'processing'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-[#5B2E67] hover:bg-purple-900 text-white shadow-md hover:shadow-lg'
                        }`}
                    >
                      {paymentStatus === 'processing' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Payment...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Pay with Razorpay
                          <img src="/api/placeholder/80/30" alt="Razorpay" className="ml-2 h-6" />
                        </span>
                      )}
                    </button>

                    {!selectedTimeSlot && (
                      <div className="mt-3 flex items-center text-amber-600 text-sm">
                        <AlertCircle size={16} className="mr-1" />
                        Please select a time slot to continue
                      </div>
                    )}
                    {selectedTimeSlot && (!patientDetails.patientName || !patientDetails.phoneNumber) && (
                      <div className="mt-3 flex items-center text-amber-600 text-sm">
                        <AlertCircle size={16} className="mr-1" />
                        Please fill in required patient details
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="bg-amber-50 p-4 rounded-lg text-amber-700 flex items-center">
                  <AlertCircle size={20} className="mr-2" />
                  No available time slots for the selected date. Please select another date.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm border-t border-gray-200">
          <a href='href="mailto:Sadbhawanaclinic98@gmail.com'>Need help? Contact our support team at Sadbhawanaclinic98@gmail.com</a>
        </div>
      </div>
    </div>
  );
}