import React from 'react';

const Testinomial = () => {
  const primaryColor = "#E47F97"; // Rose/pink
  const secondaryColor = "#5B2E67"; // Deep purple

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4" style={{ color: secondaryColor }}>
          Our Testimonial
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10" style={{ color: primaryColor }}>
          Dr. Monika Pandey is caring, attentive, and truly committed to patient well-being. I felt supported every step of the way.
        </p>

        <div className="shadow-lg rounded-lg overflow-hidden ">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25558445"
            frameBorder="0"
            width="100%"
            height="400"
       
            title="Customer Testimonials"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
