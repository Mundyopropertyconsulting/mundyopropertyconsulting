

// import React from 'react';
import React, { useState } from 'react';
import Success from './Success'; // This pulls in your Success.jsx file


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Now we prevent default because we are handling the send manually via fetch
    
    const myForm = e.target;
    const formData = new FormData(myForm);

    formData.append("form-name", "contact");
    
    // This sends the data to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok){
        // Only show success after the data is safely sent
        setIsSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        throw new Error ("network response was not ok");
      }
      })
      .catch((error) => alert("Submission error: " + error));
  };

  if (isSubmitted) {
    return <Success />;
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter text-slate-700">
  Mundyo Property Consulting
</h1>
       
          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-stone-600 items-center">
  <a href="#" className="hover:text-orange-600 transition">Home</a>
  <a href="#info" className="hover:text-orange-600 transition">Our Vision</a>
  <a href="#form" className="hover:text-orange-600 transition">Form</a>
  <a href="#footer" className="hover:text-orange-600 transition">Contact</a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Luxury Home" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative text-center px-6">
          <h2 className="text-5xl md:text-8xl font-light text-white mb-6 tracking-tighter">
            Automated <span className="italic font-serif">Luxury</span>
          </h2>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-10">
            Where high-tech living meets effortless investing. We build the future; you own the returns.
          </p>
          <a href="#form" className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all shadow-2xl">
            Inquire Now
          </a>
        </div>
      </header>
<div className="bg-slate-50 py-12 border-y border-stone-100">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div>
      <p className="text-3xl font-black text-slate-700">Bespoke</p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">AI Design</p>
    </div>
    <div>
      <p className="text-3xl font-black text-slate-700">7-12%</p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Avg. Returns</p>
    </div>
    <div>
      <p className="text-3xl font-black text-slate-700">24/7</p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Smart Monitoring</p>
    </div>
    <div>
      <p className="text-3xl font-black text-slate-700">Global</p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Project Reach</p>
    </div>
  </div>
</div>
<div className="bg-white py-16 border-y border-stone-100">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
    
    {/* Pillar 1 */}
    <div className="space-y-3">
      <div className="text-orange-600 text-xs font-bold uppercase tracking-[0.3em]">Phase I</div>
      <h4 className="text-xl font-black text-slate-700 uppercase tracking-tighter">Consultation</h4>
      <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
        Deep analysis of the investment goals and property vision.
      </p>
    </div>

    {/* Pillar 2 */}
    <div className="space-y-3 border-y md:border-y-0 md:border-x border-stone-100 py-8 md:py-0">
      <div className="text-orange-600 text-xs font-bold uppercase tracking-[0.3em]">Phase II</div>
      <h4 className="text-xl font-black text-slate-700 uppercase tracking-tighter">Automation Design</h4>
      <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
        Integrating cutting-edge technology into high-end architecture.
      </p>
    </div>

    {/* Pillar 3 */}
    <div className="space-y-3">
      <div className="text-orange-600 text-xs font-bold uppercase tracking-[0.3em]">Phase III</div>
      <h4 className="text-xl font-black text-slate-700 uppercase tracking-tighter">Project Oversight</h4>
      <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
        Ensuring every detail meets the Mundyo luxury standard.
      </p>
    </div>

  </div>
</div>

{/*video */}
<section className="w-full bg-slate-700 overflow-hidden">
  <div className="relative w-full h-[70vh] md:h-[80vh]">
    {/* The Video Background */}
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-80"
    >
      <source src="/lounge.mp4" type="video/mp4" />
      {/* Your browser does not support the video tag. */}
    </video>

    {/* Luxury Overlay Mask */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>

    {/* Content Over the Video */}
    <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-sm max-w-4xl">
        <h3 className="text-orange-500 text-xs font-bold uppercase tracking-[0.5em] mb-4">
          The Mundyo Standard
        </h3>
        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
          From Concept <br/> To <span className="text-orange-500">Reality</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto uppercase tracking-wide">
          Watch as we redefine the boundaries of luxury remodeling.
        </p>
      </div>
    </div>

    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-600"></div>
  </div>
</section>


      {/* Info Section */}
   
{/* Info Section */}
<section id="info" className="py-32 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.5em] mb-16">The Mundyo Advantage</h3>
    
    {/* Paragraph 1: The Model Speech / Core Mission */}
    <div className="mb-20">
      <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Mission</h4>
      <p className="text-slate-800 text-2xl md:text-3xl leading-snug max-w-3xl mx-auto font-serif italic">
        "We help regular people make passive income through real estate. Join us as we turn  
         <span className="text-orange-600"> ugly houses </span> 
          and underutilized land into beautiful masterpieces, that are valued at 
         <span className="text-orange-600"> luxury prices</span> and generate 
         <span className="text-orange-600"> cash flow </span>."
      </p>
      <div className="mt-12 h-px w-24 bg-orange-600/20 mx-auto"></div>
    </div>

    {/* Paragraph 2: Range & Flexibility */}
    <div className="mb-20">
      <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Market Versatility</h4>
      <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
        Our portfolio is borderless and diverse. From high-end residential flips and iconic A-Frame silhouettes to large-scale commercial developments, we operate across the entire United States. We transform standard structures into high-yield luxury assets, regardless of the project's initial scale.
      </p>
      <div className="mt-12 h-px w-24 bg-orange-600/20 mx-auto"></div>
    </div>

    {/* Paragraph 3: Wealth Generation */}
    <div className="mb-20">
      <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Capital Management</h4>
      <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
        We bridge the gap between private capital and elite real estate. Whether you are seeking to grow a modest fund or deploy significant capital into estate-level mansions, Mundyo provides a passive vehicle for exceptional returns. We invite strategic partners to benefit from our expertise without the burden of management.
      </p>
      <div className="mt-12 h-px w-24 bg-orange-600/20 mx-auto"></div>
    </div>

    {/* Paragraph 4: Integrity & Transparency */}
    <div className="mb-20">
      <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Partner Relations</h4>
      <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
        Integrity is our primary currency. Our partners are fully integrated into the lifecycle of the project through detailed monthly updates and full financial transparency. From the first architectural sketch to the final delivery, we take immense pride in protecting both your capital and our name.
      </p>
      <div className="mt-12 h-px w-24 bg-orange-600/20 mx-auto"></div>
    </div>

    {/* Paragraph 5: Lifetime Cashflow */}
    <div className="mb-20">
      <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Legacy Building</h4>
      <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
        Beyond development, we secure your legacy through long-term rental hold strategies. By investing in Mundyo-managed projects, our partners enjoy lifetime cashflow and passive dividends. You monitor the growth; we master the operations.
      </p>
      <div className="mt-20 h-[2px] w-48 bg-orange-600 mx-auto"></div>
    </div>

  </div>
</section>



{/* Breathtaking Transformation Gallery */}

{/* Breathtaking Transformation Gallery */}
<section className="py-24 bg-stone-50 text-stone-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mb-20">
      <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.5em] mb-4">The Portfolio</h3>
      <h2 className="text-5xl md:text-7xl font-light tracking-tighter italic font-serif leading-none">
        Concept to <span className="text-orange-600 font-sans font-black not-italic">Reality</span>
      </h2>
      <p className="text-stone-500 mt-6 max-w-xl font-light uppercase tracking-widest text-[10px]">
        Witness the evolution of neglected spaces into high-yield, automated luxury assets.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      {/* Project 1: Abandoned to Masterpiece */}
      <div className="md:col-span-7 group relative h-[500px] md:h-[650px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer">
        {/* PHONE VIEW: Project 1 Mobile Image */}
        <img 
          src="/IMG_6601.jpg" 
          className="md:hidden w-full h-full object-cover" 
          alt="Luxury Manor Transformation" 
        />
        
        {/* DESKTOP VIEW: Video Transformation */}
        <div className="hidden md:block absolute inset-0">
          <img src="/9BFD83C8-1D55-42CB-AD22-102C63027179.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
          <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Total Estate Revival</p>
          <h4 className="text-2xl text-white font-light tracking-widest uppercase">The Sovereign Manor</h4>
        </div>
      </div>

      {/* Project 2: Luxury Bathroom (tall) */}
      <div className="md:col-span-5 group relative h-[500px] md:h-[650px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer">
        {/* PHONE VIEW: Project 2 Mobile Image */}
        <img 
          src="/tv.jpg" 
          className="md:hidden w-full h-full object-cover" 
          alt="Luxury Suite Transformation" 
        />
        {/* DESKTOP VIEW */}
        <div className="hidden md:block absolute inset-0">
          <img src="/IMG_4884.JPG" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
            <source src="/e700e64526b34585986a56695a9a71e7.mov" />
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
          <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Internal Alchemy</p>
          <h4 className="text-2xl text-white font-light tracking-widest uppercase">The Quartz Sanctuary</h4>
        </div>
      </div>

      {/* Project 3: Smart Stairs */}
      <div className="md:col-span-6 group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer">
        {/* PHONE VIEW: Project 3 Mobile Image */}
        <img 
          src="/topview.jpg" 
          className="md:hidden w-full h-full object-cover" 
          alt="Smart Stairs Transformation" 
        />
        {/* DESKTOP VIEW */}
        <div className="hidden md:block absolute inset-0">
          <img src="/IMG_1666.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
            <source src="/stair.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
          <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Smart Integration</p>
          <h4 className="text-2xl text-white font-light tracking-widest uppercase">Motion-Sync Ascent</h4>
        </div>
      </div>

      {/* Project 4: Lounge & Media Wall */}
      <div className="md:col-span-6 group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer">
        {/* PHONE VIEW: Project 4 Mobile Image */}
        <img 
          src="/IMG_6165.jpg" 
          className="md:hidden w-full h-full object-cover" 
          alt="Media Wall & Bath Suite" 
        />
        {/* DESKTOP VIEW */}
        <div className="hidden md:block absolute inset-0">
          <img src="/IMG_6165.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
            <source src="/lounge.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
          <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Modern Living</p>
          <h4 className="text-2xl text-white font-light tracking-widest uppercase">3D Media Enclave</h4>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
      
      {/* 3D Render Image - Slightly shorter on mobile to prevent scrolling issues */}
      <img 
        src="/mundyocabin.png"
        alt="Chez Mundyo A-Frame Cabin" 
        className="w-full h-[450px] md:h-[700px] object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
      
      {/* The "Floating Glass" Card - Width restricted on mobile (w-[85%]) and centered */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] md:translate-x-0 md:left-20 md:bottom-auto md:top-10 md:w-auto md:max-w-md bg-white/10 backdrop-blur-2xl p-5 md:p-12 rounded-2xl border border-white/20 shadow-2xl">
        <h3 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 md:mb-4">
          Featured Project
        </h3>
        <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-3 md:mb-6 leading-tight">
          Chez Mundyo <br/><span className="text-orange-500">Cabin</span>
        </h2>
        <p className="text-white/90 text-[11px] md:text-base leading-relaxed mb-4 md:mb-8 font-light italic">
          In partnership with <strong className="font-bold text-white">Avrame USA</strong>, we integrate automated luxury into the iconic A-frame. 
        </p>
        
        {/* Only show this on Tablet/Desktop to keep mobile view clean */}
        <p className="hidden md:block text-white/70 text-sm leading-relaxed mb-8">
          This is where modern engineering meets the serenity of nature—rendered in high-fidelity 3D for the visionary investor.
        </p>
        
       <a 
  href="https://www.avrameusa.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block border-b border-orange-500 pb-1 text-white font-bold uppercase tracking-widest text-[8px] md:text-[10px] cursor-pointer hover:text-orange-400 transition-all"
>
  Experience the Render
</a>

      </div>
    </div>
  </div>
</section>

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="mb-16">
      <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em] mb-3">Network of Excellence</h3>
      <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Collaborators <span className="text-orange-500">&</span> Partners</h2>
      <p className="mt-4 text-slate-500 max-w-xl font-light">
        Mundyo Property Consulting integrates world-class expertise to ensure every project is a masterpiece of engineering and design.
      </p>
    </div>

    {/* Partners Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Partner Card 1 */}
      <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
        <div className="h-80 overflow-hidden">
          {/* Replace with actual Partner Photo */}
          <img 
            src="/CEO.png" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Partner Profile"
          />
        </div>
        
        {/* Floating Glass Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Lionel Mundyo Kasongi</h4>
          <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">CEO & Founder</p>
          <p className="text-slate-600 text-xs leading-relaxed font-light">
         Founder of Mundyo Property Consulting, 
         I lead an expert team specializing in ultra-luxury smart home construction.      
          </p>
        </div>

      </div>

      {/* Partner Card 2 */}
      <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
        <div className="h-80 overflow-hidden">
          <img 
            src="/IMG_0917.jpg" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Partner Profile"
          />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Chelsea Mundyo</h4>
          <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Senior Financial Analyst</p>
          <p className="text-slate-600 text-xs leading-relaxed font-light">
            Strategic problem solver and adaptive system thinker, known for data analysis skills.
          </p>
        </div>
      </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
        <div className="h-80 overflow-hidden">
          <img 
            src="/Herman.jpg" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Partner Profile"
          />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Herman Kabungu</h4>
          <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Mining Engineer</p>
          <p className="text-slate-600 text-xs leading-relaxed font-light">
            As an EIT Civil Scope Planner, I support tailings design, planning and mapping with hands-on field experience
          </p>
        </div>
      </div>

      {/* Partner Card 4 (The "Add More" Placeholder) */}
     
       <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
        <div className="h-80 overflow-hidden">
          <img 
            src="/Kevine.jpg" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Partner Profile"
          />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Kevine Kakou</h4>
          <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Real Eastate Agent</p>
          <p className="text-slate-600 text-xs leading-relaxed font-light">
            I am a Real Eastate and Property Management professional with a strong foundation in business operation
          </p>
        </div>
      </div>
 {/* Partner Card 5 (The "Add More" Placeholder) */}

         <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
        <div className="h-80 overflow-hidden">
          <img 
            src="/Simon.png" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Partner Profile"
          />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
          <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Simon Kasuyi</h4>
          <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Founder & owner DYP</p>
          <p className="text-slate-600 text-xs leading-relaxed font-light">
           With a background in Management and Leadership, I merge high-level business strategy with mission-driven apparel
          </p>
        </div>
      </div>
         {/* Partner Card 6 (The "Add More" Placeholder) */}
         {/* Partner Card 7 (The "Add More" Placeholder) */}
         {/* Partner Card 8 (The "Add More" Placeholder) */}
         {/* Partner Card 9 (The "Add More" Placeholder) */}

    </div>
  </div>
</section>

     
      <section id="form" className="py-24 bg-stone-100">
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-white p-12 shadow-2xl rounded-sm border border-stone-200">
      <h2 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest text-slate-700">Project Inquiry</h2>
      
      {/* IMPORTANT: 
          1. name="contact" (This is how it appears in Netlify)
          2. data-netlify="true" (Tells Netlify to handle this form)
      */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        onSubmit={handleSubmit}
        // action="/success.html"
        className="space-y-6"
      >
        {/* Vital for Netlify/React connection */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="full name" 
              required 
              className="w-full p-4 border border-stone-200 outline-none focus:border-orange-600 transition-colors bg-stone-50" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="office@mundyo.com" 
              required 
              className="w-full p-4 border border-stone-200 outline-none focus:border-orange-600 transition-colors bg-stone-50" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Message / Project Details</label>
          <textarea 
            name="message" 
            rows="6" 
            placeholder="Tell us about your property vision..." 
            required
            className="w-full p-4 border border-stone-200 outline-none focus:border-orange-600 transition-colors bg-stone-50 resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold uppercase tracking-[0.3em] py-5 transition-all duration-500 shadow-xl"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Footer / Contact Section */}

      <footer id='footer' className="bg-slate-900 text-white pt-24 pb-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      
      {/* Column 1: Brand Identity */}
      <div className="md:col-span-1">
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">
          Mundyo<span className="text-orange-500">.</span>
        </h2>
        <p className="text-slate-400 text-xs uppercase tracking-[0.2em] leading-relaxed">
          Bespoke AI Design & <br /> Property Consulting
        </p>
      </div>

      {/* Column 2: Projects */}
      <div>
        <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Expertise</h4>
        <ul className="space-y-4 text-sm text-slate-300 font-light">
          <li className="hover:text-orange-500 cursor-pointer transition-colors">Chez Mundyo Cabins</li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">Luxury Remodeling</li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">Smart Home Integration</li>
        </ul>
      </div>

      {/* Column 3: Contact */}
      <div>
        <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Inquiries</h4>
        <ul className="space-y-4 text-sm text-slate-300 font-light">
          <li>lionel@mundyopropertyconsulting.com</li>
          <li> +1 (978) 596-5883/ (224) 493-5793</li>
          <li>Based in USA</li>
          <li className="text-orange-500 font-bold uppercase tracking-widest text-[10px] pt-2">Available for Global Projects</li>
        </ul>
      </div>

      {/* Column 4: Social Strategy */}
      <div>
        <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Follow the Vision</h4>
        <div className="flex space-x-6">
          {/* TikTok */}
          <a href="https://www.tiktok.com/@mundyomastercraft?_r=1&_t=ZT-92pAGN7907J" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.02-.73 2.21-1.14 3.44-1.2 1.05-.08 2.13.08 3.13.49v4.19c-.81-.36-1.75-.42-2.61-.21-.58.15-1.1.48-1.44.97-.44.66-.58 1.48-.44 2.27.11.71.49 1.37 1.07 1.8.6.45 1.37.64 2.11.53 1.02-.12 1.93-.89 2.22-1.88.19-.71.13-1.47.13-2.2v-12.43z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/mundyomastercraft?igsh=cDdsdzdkbmxiaThn" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/share/17nhwvdRYr/?mibextid=wwXIfr" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center
     text-[10px] uppercase tracking-[0.4em] text-slate-500">
      <p>© 2026 Mundyo Property Consulting</p>
      <p className="mt-4 md:mt-0">Private & Confidential</p>
    </div>
  </div>
</footer>
     
    </div>
  );
}

export default App;