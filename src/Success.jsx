import React from 'react';

const Success = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="h-[1px] w-24 bg-orange-600 mx-auto"></div>
        <h1 className="text-4xl font-light tracking-tighter text-slate-800 uppercase">
          Inquiry <span className="italic font-serif">Received</span>
        </h1>
        <p className="text-stone-500 font-light leading-relaxed tracking-wide">
          Thank you for reaching out to Mundyo Property Consulting. 
          Our team is reviewing your project details and will contact you 
          within 24 to 48 hours.
        </p>
        <div className="pt-6">
          <a 
            href="/" 
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-600 hover:text-slate-900 transition-colors"
          >
            Back to Home
          </a>
        </div>
        <div className="h-[1px] w-24 bg-orange-600 mx-auto"></div>
      </div>
    </div>
  );
};

export default Success;