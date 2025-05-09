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


        <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://cdn.trustindex.io/amp-widget.html#0a6234b4540a97560b86aa18478"
            width="100%"
            height="268"
            style={{ border: 'none', overflow: 'hidden' }}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            title="Customer Testimonials"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
