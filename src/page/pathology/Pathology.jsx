import React, { useEffect, useState } from "react";

// Main component
const Pathology = () => {
  // Colors from requirements
  const primaryPink = "#E47F97";
  const primaryPurple = "#5B2E67";

  const [pathologyTests, setPathologyTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTest, setSelectedTest] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const testsPerPage = 100;

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    address: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchPathologyTests();
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showForm]);

  const fetchPathologyTests = async () => {
    try {
      const response = await fetch("https://db.shanyascans.com/api/v1/pathology");
      const data = await response.json();
      if (data.success && data.data) {
        setPathologyTests(data.data);
      } else {
        console.error("Failed to fetch pathology tests");
      }
    } catch (error) {
      console.error("Error fetching pathology tests:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter tests based on search query
  const filteredTests = pathologyTests.filter((test) =>
    test.testDetailName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastTest = currentPage * testsPerPage;
  const indexOfFirstTest = indexOfLastTest - testsPerPage;
  const currentTests = filteredTests.slice(indexOfFirstTest, indexOfLastTest);
  const totalPages = Math.ceil(filteredTests.length / testsPerPage);

  // Pagination logic
  const getPaginationPages = () => {
    let pages = [];
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
    return pages;
  };

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setShowForm(true);
    // Reset form data when selecting a new test
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      gender: "male",
      address: "",
      date: "",
      time: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Form submitted:", { test: selectedTest, ...formData });
    
    // Show success message
    alert("Test booked successfully!");
    
    // Close the form
    setShowForm(false);
    setSelectedTest(null);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedTest(null);
  };

  return (
    <section className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: primaryPurple }}>
              Best Pathology Centre in Lucknow
            </h1>
            <div className="flex items-center text-gray-600">
              <a href="/" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
              <span style={{ color: primaryPink }}>Pathology Test</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 md:py-10 lg:py-14">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search Pathology Test..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset page to 1 when searching
            }}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black"
            style={{ borderColor: primaryPink, outlineColor: primaryPink }}
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-20 rounded-xl" style={{ backgroundColor: `${primaryPink}40` }}></div>
              </div>
            ))}
          </div>
        ) : filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
            {currentTests.map((test, index) => (
              <div
                key={index}
                className="relative p-2 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: primaryPurple }}
                onClick={() => handleTestClick(test)}
              >
                <div className="absolute inset-0 opacity-30 rounded-xl" style={{ backgroundColor: primaryPink }}></div>
                <h3 className="text-lg font-bold relative z-10 text-white uppercase p-4">
                  {test?.testDetailName}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No tests found.</p>
        )}

        {/* Pagination Controls */}
        {filteredTests.length > 0 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            {/* Previous Button */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                currentPage === 1 ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "text-white hover:opacity-90"
              }`}
              style={{ backgroundColor: currentPage === 1 ? "#ccc" : primaryPink }}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-2">
              {getPaginationPages().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && setCurrentPage(page)}
                  className={`px-4 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                    page === "..." ? "cursor-default" : ""
                  }`}
                  style={{
                    backgroundColor: page === currentPage ? primaryPurple : "#f0f0f0",
                    color: page === currentPage ? "white" : "black"
                  }}
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                currentPage === totalPages ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "text-white hover:opacity-90"
              }`}
              style={{ backgroundColor: currentPage === totalPages ? "#ccc" : primaryPink }}
            >
              Next
            </button>
          </div>
        )}

        {/* Booking Form Modal with Blur Effect */}
        {showForm && selectedTest && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop with blur effect */}
            <div 
              className="fixed inset-0  bg-opacity-50 backdrop-filter backdrop-blur-sm"
              onClick={closeForm}
            ></div>
            
            <div className="bg-white rounded-lg w-full max-w-md md:max-w-lg p-6 relative z-10 shadow-2xl">
              <button 
                onClick={closeForm}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: primaryPurple }}>
                Book {selectedTest.testDetailName}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: primaryPink }}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: primaryPink }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: primaryPink }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: primaryPink }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white"
                      style={{ borderColor: primaryPink }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: primaryPink }}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: primaryPink }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Preferred Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                      style={{ borderColor: primaryPink }}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleFormSubmit}
                    className="w-full py-3 rounded-lg text-white font-bold transition duration-300 hover:opacity-90"
                    style={{ backgroundColor: primaryPurple }}
                  >
                    Book Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pathology;