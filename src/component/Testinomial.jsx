import React, { useEffect } from 'react';

const Testinomial = () => {
  useEffect(() => {
    // Dynamically load the Tagembed script
    const script = document.createElement('script');
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <section className='container mx-auto py-10'>   
    <div
      className="tagembed-widget "
      style={{ width: '100%', height: '100%' }}
      data-widget-id="2145663"
      data-tags="false"
      view-url="https://widget.tagembed.com/2145663"
    ></div>

</section>
  );
};

export default Testinomial;
