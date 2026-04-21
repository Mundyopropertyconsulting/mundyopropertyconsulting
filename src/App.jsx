
import React, { useState, useEffect } from 'react';
import { Menu, X, Paintbrush, TrendingUp, Zap, ArrowRight, Phone, Mail, MapPin, ShieldCheck, Users, Home } from 'lucide-react'; 
import Success from './Success';
import Links from './Links';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    formData.append("form-name", "contact");
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          window.scrollTo(0, 0);
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => alert("Submission error: " + error));
  };

  if (currentPath === '/Links' || currentPath === '/links') return <Links />;
  if (isSubmitted) return <Success />;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-100 scroll-smooth flex flex-col w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-stone-200 z-[100]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-sm shadow-lg overflow-hidden">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-black tracking-tighter">
              <span className="text-slate-800 uppercase tracking-widest">Mundyo</span>
              <span className="md:ml-2 text-orange-600 block md:inline font-light italic font-serif lowercase md:normal-case md:font-black md:not-italic">
                Property Consulting
              </span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 items-center">
            <a href="#" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="#vision" className="hover:text-orange-600 transition-colors">Our vision</a>
            <a href="#portfolio" className="hover:text-orange-600 transition-colors">Portfolios</a>
            <a href="#form" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-orange-600/20">
              Start Your Project
            </a>
            <a href="#footer" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-[110] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-64 bg-white shadow-2xl transition-transform duration-500 p-8 pt-24 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-8 text-sm font-bold uppercase tracking-widest text-slate-600">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#advantage" onClick={() => setIsMenuOpen(false)}>The Advantage</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#form" onClick={() => setIsMenuOpen(false)} className="text-orange-600">Start Project</a>
            <a href="#footer" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>

    
     <header className="relative h-screen flex items-center justify-center overflow-hidden shrink-0">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
      className="w-full h-full object-cover brightness-[0.4]"
      alt="Luxury Dream Home"
    />
  </div>
  
  <div className="relative text-center px-6 max-w-5xl h-full flex flex-col justify-center">
    <div className="mb-auto" aria-hidden="true" /> {/* Spacer to push content center */}

    <h2 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.85]">
      Dream it. <br/> 
      <span className="text-orange-500 italic font-serif lowercase font-light text-5xl md:text-8xl">Live in it.</span>
    </h2>

    <p className="text-white/70 text-xs md:text-base mb-12 font-bold tracking-[0.4em] uppercase max-w-2xl mx-auto">
      Home Remodeling | Heating & Cooling | New Construction | Flips Partnership
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <a href="#form" className="w-full md:w-auto bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest transition-all hover:bg-orange-600 hover:text-white shadow-2xl">
        Partner with Mundyo
      </a>
      <a href="/Capabilities document.pdf" download className="w-full md:w-auto text-white border border-white/30 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
        Capabilities
      </a>
    </div>

    {/* IPG - Bottom Aligned & Semi-Transparent */}
    <div className="mt-auto pb-10 opacity-40 hover:opacity-80 transition-opacity">
      <p className="text-[9px] md:text-[11px] font-medium tracking-[0.3em] text-white uppercase">
        Illinois Procurement Gateway: <span className="font-bold">IPG-0677361</span>
      </p>
    </div>
  </div>
</header>



     {/* Unified Our Vision Section */}
<section id="vision" className="bg-white py-32 relative z-10 rounded-t-[3rem] shadow-2xl">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Header - Made More Inspiring & Larger */}
    <div className="text-center max-w-4xl mx-auto mb-24">
      <h3 className="text-orange-600 text-sm font-bold uppercase tracking-[0.5em] mb-6">Our Vision</h3>
      <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter mb-10 leading-[0.85]">
        The Future of <br/>
        <span className="text-orange-500">Luxury Living.</span>
      </h2>
      <div className="h-1.5 w-32 bg-orange-500 mx-auto mb-10"></div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
      
      {/* FLYER - Increased Size & Full Color */}
      <div className="lg:col-span-5 space-y-8">
        <div className="relative aspect-[3/4] w-full bg-stone-100 rounded-[2rem] overflow-hidden shadow-2xl border border-stone-100 group">
          <img 
            src="/public/Mpc New Flyer.png" 
            alt="Mundyo Property Consulting Flyer" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
        
        {/* Download Action */}
        <a 
          href="/public/Mpc New Flyer.png" 
          download 
          className="flex items-center justify-center gap-4 w-full py-6 bg-slate-900 text-white uppercase tracking-widest font-bold rounded-xl hover:bg-orange-600 transition-colors group"
        >
          <span>Download Media Kit / Flyer</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Status4 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m5-4l3 3m0 0l3-3m-3 3V4" />
          </svg>
        </a>
      </div>
      
      {/* Narrative & Reordered Advantages */}
      <div className="lg:col-span-7 space-y-16">
        
        {/* Vision Narrative */}
        <div className="prose prose-stone lg:prose-xl text-stone-600 font-light leading-relaxed">
          <p>
            At <span className="font-bold text-slate-900">Mundyo Property Consulting</span>, we bridge the gap between visionary design and master-level technical execution. We don't just renovate; we engineer environments that redefine what it means to live in the future. Whether it's a high-end modernization or a complex federal contract, our team delivers elite results for those who demand perfection without compromise.
          </p>
        </div>

        {/* Advantages Grid - Reordered and Detailed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* 01: Remodeling - NOW FIRST */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-black text-2xl">01</span>
              <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">Elite Remodeling</h4>
            </div>
            <p className="text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-6 group-hover:border-orange-500 transition-colors">
              Kitchen upgrades, sanctuary-level flooring, and luxury bathroom installations featuring custom hot tubs and spa-grade finishes.
            </p>
          </div>

          {/* 02: Media Walls */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-black text-2xl">02</span>
              <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">Media & Wall Design</h4>
            </div>
            <p className="text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-6 group-hover:border-orange-500 transition-colors">
              Custom TV media walls with integrated architectural lighting and bespoke 3D wall designs that transform any room into a masterpiece.
            </p>
          </div>

          {/* 03: HVAC */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-black text-2xl">03</span>
              <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">HVAC Engineering</h4>
            </div>
            <p className="text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-6 group-hover:border-orange-500 transition-colors">
              Advanced climate control including mini-split systems, high-efficiency furnace replacements, and condenser unit engineering.
            </p>
          </div>

          {/* 04: Smart Integration */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-black text-2xl">04</span>
              <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">Smart Integration</h4>
            </div>
            <p className="text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-6 group-hover:border-orange-500 transition-colors">
              The future is now. Full Alexa control for thermostats, smart switches, automated lighting, cameras, and keyless smart door locks.
            </p>
          </div>

          {/* 05: Investment */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-black text-2xl">05</span>
              <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">Real Estate Strategy</h4>
            </div>
            <p className="text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-6 group-hover:border-orange-500 transition-colors">
              Passive flip partnerships focused on forced appreciation. We leverage technical expertise to maximize investor ROI through smart upgrades.
            </p>
          </div>

          {/* 06: Government */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-black text-2xl">06</span>
              <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">Gov Eligibility</h4>
            </div>
            <p className="text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-6 group-hover:border-orange-500 transition-colors">
              Certified minority business serving as both prime and subcontractor for federal and municipal infrastructure modernization.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* Video Content Break */}
      <section className="w-full bg-slate-900 overflow-hidden py-1">
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
            <source src="/lounge.mp4" type="video/mp4" />
          </video>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
             <h3 className="text-orange-500 text-xs font-bold uppercase tracking-[0.6em] mb-6">Stop Wishing & Join Us</h3>
             <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
               From Concept <br/> To <span className="text-orange-500">Reality</span>
             </h2>
             <div className="w-24 h-1 bg-orange-600"></div>
          </div>
        </div>
      </section>



     {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-stone-50 text-stone-900">
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
            
            {/* Project 1: Total Estate Revival */}
            <a 
              href="https://www.instagram.com/p/DSIdViJEbLu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-7 group relative h-[500px] md:h-[650px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
            >
              <img src="/IMG_6601.jpg" className="md:hidden w-full h-full object-cover" alt="Luxury Manor Transformation" />
              <div className="hidden md:block absolute inset-0">
                <img src="/9BFD83C8-1D55-42CB-AD22-102C63027179.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
                  <source src="/video1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Total Estate Revival</p>
                <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">The Sovereign Manor</h4>
                <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
              </div>
            </a>

            {/* Project 2: Internal Alchemy */}
            <a 
              href="https://www.instagram.com/p/DSFzWD5kf_r/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-5 group relative h-[500px] md:h-[650px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
            >
              <img src="/tv.jpg" className="md:hidden w-full h-full object-cover" alt="Luxury Suite Transformation" />
              <div className="hidden md:block absolute inset-0">
                <img src="/IMG_4884.JPG" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
                  <source src="/e700e64526b34585986a56695a9a71e7.mov" />
                </video>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Internal Alchemy</p>
                <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">The Quartz Sanctuary</h4>
                <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
              </div>
            </a>

            {/* Project 3: Smart Integration */}
            <a 
              href="https://www.instagram.com/p/DSYkqPiEfK0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-6 group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
            >
              <img src="/topview.jpg" className="md:hidden w-full h-full object-cover" alt="Smart Stairs Transformation" />
              <div className="hidden md:block absolute inset-0">
                <img src="/IMG_1666.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
                  <source src="/stair.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Smart Integration</p>
                <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">Motion-Sync Ascent</h4>
                <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
              </div>
            </a>

            {/* Project 4: Modern Living */}
            <a 
              href="https://www.instagram.com/p/DSywC1LjM1o/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-6 group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
            >
              <img src="/IMG_6165.jpg" className="md:hidden w-full h-full object-cover" alt="Media Wall & Bath Suite" />
              <div className="hidden md:block absolute inset-0">
                <img src="/IMG_6165.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
                  <source src="/lounge.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Modern Living</p>
                <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">3D Media Enclave</h4>
                <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
              </div>
            </a>

          </div>
        </div>
      </section>




     {/* Network of Excellence */}
      <section id="network" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Direct Mission Header */}
          <div className="mb-20">
            <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em] mb-4">Our Network</h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                Based in Chicagoland. <br/>
                <span className="text-orange-500">Built in Boston.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-slate-800 font-bold uppercase tracking-widest text-sm">
                  We turn Pinterest boards and AI-generated concepts into reality.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Mundyo Property Consulting was forged in Boston, where we still maintain a strong network of elite partners. Now expanding across Chicagoland, we offer a specialized alternative to the housing market: **Don’t buy a multimillion-dollar home when you can hire us to upgrade your current space into one.** </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  From technical HVAC engineering to luxury flips and full-scale smart home construction, our partners ensure every project is an asset of high-tech excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8 border-b border-stone-200 pb-4">The Collaborative Team</h3>
            
            {/* Partners Grid - Circular Style in Full Color */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              
              {/* Partner 1: Lionel */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img src="/CEO.png" className="w-full h-full object-cover" alt="Lionel Mundyo Kasongi" />
                </div>
                <h4 className="text-slate-900 font-bold uppercase tracking-tight text-lg mb-1">Lionel Mundyo Kasongi</h4>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">CEO & Founder</p>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">Expert systems architect and master builder delivering high-tech luxury estates.</p>
              </div>

              {/* Partner 2: Chelsea */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img src="/IMG_0917.jpg" className="w-full h-full object-cover" alt="Chelsea Mundyo" />
                </div>
                <h4 className="text-slate-900 font-bold uppercase tracking-tight text-lg mb-1">Chelsea Mundyo</h4>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">Senior Financial Analyst</p>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">Strategic problem solver and adaptive system thinker, specializing in data-driven growth.</p>
              </div>

              {/* Partner 3: Herman */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img src="/Herman.jpg" className="w-full h-full object-cover" alt="Herman Kabungu" />
                </div>
                <h4 className="text-slate-900 font-bold uppercase tracking-tight text-lg mb-1">Herman Kabungu</h4>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">Engineer & Civil Scope</p>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">Supporting tailings design and civil planning with hands-on field and mapping expertise.</p>
              </div>

              {/* Partner 4: Kevine */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img src="/Kevine.jpg" className="w-full h-full object-cover" alt="Kevine Kakou" />
                </div>
                <h4 className="text-slate-900 font-bold uppercase tracking-tight text-lg mb-1">Kevine Kakou</h4>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">Real Estate Agent</p>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">Property management professional with a strong foundation in business operations.</p>
              </div>

              {/* Partner 5: Simon */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img src="/Simon.png" className="w-full h-full object-cover" alt="Simon Kasuyi" />
                </div>
                <h4 className="text-slate-900 font-bold uppercase tracking-tight text-lg mb-1">Simon Kasuyi</h4>
                <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">Owner, DYP</p>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm">Merging high-level business leadership with mission-driven strategy and apparel branding.</p>
              </div>

            </div>
          </div>
        </div>
      </section>











      {/* Featured: Cabin */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group min-h-[600px] flex items-center">
            <img src="/mundyocabin.png" className="absolute inset-0 w-full h-full object-cover" alt="Cabin" />
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
            <div className="relative z-10 p-12 md:p-20 max-w-2xl text-white">
              <h3 className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px] mb-6">Featured Project</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Chez Mundyo <span className="text-orange-500">Cabin</span></h2>
              <a href="https://www.avrameusa.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 font-black uppercase tracking-widest text-xs border-b-2 border-orange-600 pb-2">Experience the Render <ArrowRight size={16}/></a>
            </div>
          </div>
        </div>
      </section>

 

    {/* Inquiry Form */}
  <section id="form" className="py-32 bg-stone-100">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl">
        <div className="text-center mb-16">
          <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.5em] mb-4">Inquiry Form</h3>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Start Your Journey</h2>
        </div>
        
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-8"
        >
          {/* CRITICAL FOR NETLIFY CONNECTION */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="grid md:grid-cols-2 gap-8">
            <input 
              type="text" 
              name="firstName" 
              placeholder="FIRST NAME" 
              required 
              className="w-full bg-stone-50 border-b border-stone-200 py-4 focus:outline-none focus:border-orange-600 text-xs font-bold tracking-widest" 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="LAST NAME" 
              required 
              className="w-full bg-stone-50 border-b border-stone-200 py-4 focus:outline-none focus:border-orange-600 text-xs font-bold tracking-widest" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <input 
              type="email" 
              name="email" 
              placeholder="EMAIL ADDRESS" 
              required 
              className="w-full bg-stone-50 border-b border-stone-200 py-4 focus:outline-none focus:border-orange-600 text-xs font-bold tracking-widest" 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="PHONE NUMBER" 
              required 
              className="w-full bg-stone-50 border-b border-stone-200 py-4 focus:outline-none focus:border-orange-600 text-xs font-bold tracking-widest" 
            />
          </div>

          <textarea 
            name="message" 
            rows="4" 
            required 
            className="w-full bg-stone-50 border-b border-stone-200 py-4 focus:outline-none focus:border-orange-600 text-xs font-bold resize-none" 
            placeholder="DESCRIBE YOUR VISION"
          ></textarea>

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-orange-600 transition-all shadow-xl"
          >
            Submit Formal Inquiry
          </button>
        </form>
      </div>
    </div>
  </section>




      
{/* Footer / Contact Section */}
      <footer id='footer' className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            
            {/* Column 1: Brand Identity */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">
                Mundyo<span className="text-orange-500">.</span>
              </h2>
              <p className="text-slate-400 text-xs uppercase tracking-[0.2em] leading-relaxed">
                Bespoke AI Design & <br /> Property Consulting
              </p>
            </div>

            {/* Column 2: Expertise */}
            <div>
              <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Expertise</h4>
              <ul className="space-y-4 text-sm text-slate-300 font-light">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Chez Mundyo Cabins</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Luxury Remodeling</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Smart Home Integration</li>
              </ul>
            </div>

            {/* Column 3: Contact Inquiries */}
            <div>
              <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Inquiries</h4>
              <ul className="space-y-4 text-sm text-slate-300 font-light">
                <li className="break-all">lionel@mundyopropertyconsulting.com</li>
                <li>+1 (978) 596-5883 / (224) 493-5793</li>
                <li>Based in USA</li>
                <li className="text-orange-500 font-bold uppercase tracking-widest text-[10px] pt-2">Available for Global Projects</li>
              </ul>
            </div>

            {/* Column 4: Social Strategy */}
            <div>
              <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Follow the Vision</h4>
              <div className="flex space-x-6">
                {/* TikTok */}
                <a href="https://www.tiktok.com/@mundyomastercraft?_r=1&_t=ZT-92pAGN7907J" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.02-.73 2.21-1.14 3.44-1.2 1.05-.08 2.13.08 3.13.49v4.19c-.81-.36-1.75-.42-2.61-.21-.58.15-1.1.48-1.44.97-.44.66-.58 1.48-.44 2.27.11.71.49 1.37 1.07 1.8.6.45 1.37.64 2.11.53 1.02-.12 1.93-.89 2.22-1.88.19-.71.13-1.47.13-2.2v-12.43z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/mundyomastercraft?igsh=cDdsdzdkbmxiaThn" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/17nhwvdRYr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/lionel-mundyo-kasongi-68b323171/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom vision statement and bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-slate-500">
              <div className="mb-4 md:mb-0">
                <span className="italic text-slate-400">"Let the kingdom come!" Matthew 6:10</span> 
                
              </div>
              <div className="flex space-x-8">
                <p>© 2026 Mundyo Property Consulting</p>
                <p className="hidden md:block">Private & Confidential</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;




















// import React, { useState, useEffect } from 'react';
// import { Menu, X, FileCheck, LineChart, Cpu, HardHat } from 'lucide-react'; 
// import Success from './Success';
// import Links from './Links';

// function App() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState(window.location.pathname);

//   useEffect(() => {
//     const handleLocationChange = () => setCurrentPath(window.location.pathname);
//     window.addEventListener('popstate', handleLocationChange);
//     return () => window.removeEventListener('popstate', handleLocationChange);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const myForm = e.target;
//     const formData = new FormData(myForm);
//     formData.append("form-name", "contact");
    
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString(),
//     })
//       .then((response) => {
//         if (response.ok) {
//           setIsSubmitted(true);
//           window.scrollTo(0, 0);
//         } else {
//           throw new Error("Network response was not ok");
//         }
//       })
//       .catch((error) => alert("Submission error: " + error));
//   };

//   if (currentPath === '/Links' || currentPath === '/links') return <Links />;
//   if (isSubmitted) return <Success />;

//   return (
//     <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-100 scroll-smooth">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 z-[100] transition-all">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 flex items-center justify-center rounded-sm">
//               <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain p-2" />
//             </div>
//             <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none">
//               <span className="text-slate-700 uppercase">Mundyo</span>
//               <span className="md:ml-2 text-orange-600 block md:inline font-light italic font-serif lowercase md:normal-case md:font-black md:not-italic">
//                 Property Consulting
//               </span>
//             </h1>
//           </div>

//           <div className="hidden md:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600 items-center">
//             <a href="#" className="hover:text-orange-600 transition-colors">Home</a>
//             <a href="#info" className="hover:text-orange-600 transition-colors">Our Vision</a>
//             <a href="#portfolio" className="hover:text-orange-600 transition-colors">Portfolio</a>
//             <a href="#form" className="text-orange-600 border border-orange-600 px-4 py-2 hover:bg-orange-600 hover:text-white transition-all">
//               Inquiry Form
//             </a>
//             <a href="#footer" className="hover:text-orange-600 transition-colors">Contact</a>
//           </div>

//           <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//               {/* Mobile Menu Overlay */}
// <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
//   {/* Backdrop */}
//   <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
  
//   {/* Menu Content */}
//   <div className={`absolute right-0 top-0 h-full w-64 bg-white shadow-2xl transition-transform duration-500 p-8 pt-24 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//     <div className="flex flex-col space-y-8 text-sm font-bold uppercase tracking-widest text-slate-600">
//       <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition-colors">Home</a>
//       <a href="#info" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition-colors">Our Vision</a>
//       <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition-colors">Portfolio</a>
//       <a href="#form" onClick={() => setIsMenuOpen(false)} className="text-orange-600 pt-4 border-t border-stone-100">Inquiry Form</a>
//       <a href="#footer" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition-colors">Contact</a>
//     </div>
//   </div>
// </div>


//       {/* Hero Section */}
//       <header className="relative h-screen flex items-center justify-center pt-20">
//   <div className="absolute inset-0">
//     <img 
//       src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
//       className="w-full h-full object-cover brightness-[0.35]"
//       alt="Luxury Architecture"
//     />
//   </div>
//   <div className="relative text-center px-6 max-w-5xl">
//     <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
//       From Vision to <br/> <span className="text-orange-500 italic font-serif lowercase font-light">High-Tech Reality.</span>
//     </h2>
//     <p className="text-white/80 text-lg md:text-xl mb-10 font-light tracking-widest uppercase">
//       Ground-Up Development | Federal Contracting | Elite Consulting
//     </p>
    
//     <div className="flex flex-col md:flex-row items-center justify-center gap-6">
//       {/* Primary Action */}
//       <a href="#form" className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all shadow-xl">
//         Partner with Mundyo
//       </a>

//       {/* Capabilities Download Button */}
//       <a 
//         href="/Capabilities document.pdf" 
//         download="Mundyo_Property_Consulting_Capabilities.pdf"
//         className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-white/50 text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm group"
//       >
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           strokeWidth={2} 
//           stroke="currentColor" 
//           className="w-5 h-5 text-orange-500 group-hover:text-slate-900 transition-colors"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3" />
//         </svg>
//         Download Capabilities
//       </a>
//     </div>

//     {/* Small badge for Federal/State credibility */}
//     <p className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">
//       Certified MBE | Illinois Procurement Gateway: IPG-0677361
//     </p>
//   </div>
// </header>

//       {/* At a Glance Section */}
//       <div className="bg-white py-16 border-b border-stone-100">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
//           <div className="flex flex-col items-center">
//             <FileCheck className="text-orange-600 mb-4" size={32} />
//             <p className="text-2xl font-black text-slate-800">MBE</p>
//             <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Minority Business Enterprise</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <LineChart className="text-orange-600 mb-4" size={32} />
//             <p className="text-2xl font-black text-slate-800">High-Yield</p>
//             <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Asset Appreciation</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <Cpu className="text-orange-600 mb-4" size={32} />
//             <p className="text-2xl font-black text-slate-800">Smart</p>
//             <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Automation Integration</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <HardHat className="text-orange-600 mb-4" size={32} />
//             <p className="text-2xl font-black text-slate-800">Ready</p>
//             <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Government Bid Eligible</p>
//           </div>
//         </div>
//       </div>

//       {/* Mundyo Lifecycle */}
//       <section className="bg-stone-50 py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em] mb-2">The Process</h3>
//             <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">The Mundyo Lifecycle</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//             <div className="relative p-8 bg-white shadow-sm border-t-4 border-orange-600">
//               <span className="absolute -top-4 -right-4 text-6xl font-black text-stone-100 select-none">01</span>
//               <h4 className="text-xl font-bold text-slate-800 mb-4">STRATEGIC CONSULTING</h4>
//               <p className="text-stone-500 text-sm leading-relaxed">Feasibility studies and bid strategies for ground-up developments and federal solicitations.</p>
//             </div>
//             <div className="relative p-8 bg-white shadow-sm border-t-4 border-slate-700">
//               <span className="absolute -top-4 -right-4 text-6xl font-black text-stone-100 select-none">02</span>
//               <h4 className="text-xl font-bold text-slate-800 mb-4">TECH ENGINEERING</h4>
//               <p className="text-stone-500 text-sm leading-relaxed">Integrating smart automation and high-efficiency HVAC systems into the architectural blueprint.</p>
//             </div>
//             <div className="relative p-8 bg-white shadow-sm border-t-4 border-orange-600">
//               <span className="absolute -top-4 -right-4 text-6xl font-black text-stone-100 select-none">03</span>
//               <h4 className="text-xl font-bold text-slate-800 mb-4">PRECISION BUILD</h4>
//               <p className="text-stone-500 text-sm leading-relaxed">Execution of ground-up construction and complex renovations to federal and luxury standards.</p>
//             </div>
//           </div>
//         </div>
//       </section>
// {/*video */}
// <section id="portflio" className="w-full bg-slate-700 overflow-hidden">
//   <div className="relative w-full h-[70vh] md:h-[80vh]">
//     {/* The Video Background */}
//     <video 
//       autoPlay 
//       muted 
//       loop 
//       playsInline
//       className="absolute inset-0 w-full h-full object-cover opacity-80"
//     >
//       <source src="/lounge.mp4" type="video/mp4" />
//       {/* Your browser does not support the video tag. */}
//     </video>

//     {/* Luxury Overlay Mask */}
//     <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>

//     {/* Content Over the Video */}
//     <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
//       <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-sm max-w-4xl">
//         <h3 className="text-orange-500 text-xs font-bold uppercase tracking-[0.5em] mb-4">
//           The Mundyo Standard
//         </h3>
//         <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
//           From Concept <br/> To <span className="text-orange-500">Reality</span>
//         </h2>
//         <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto uppercase tracking-wide">
//           Watch as we redefine the boundaries of luxury remodeling.
//         </p>
//       </div>
//     </div>

//     {/* Bottom Accent Line */}
//     <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-600"></div>
//   </div>
// </section>


//       {/* Info Section */}
   
// {/* Info Section */}
// <section id="info" className="py-32 bg-white">
//   <div className="max-w-4xl mx-auto px-6 text-center">
//     <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.5em] mb-16">The Mundyo Advantage</h3>
    
   
// <div className="mb-32">
//   <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-12">Our Mission</h4>
  
//   <div className="max-w-4xl mx-auto px-4">
//     {/* The Visionary Quote */}
//     <div className="relative mb-16">
//       {/* Large Decorative Quote Mark */}
//       <span className="absolute -top-10 -left-4 text-8xl text-orange-600/10 font-serif select-none">“</span>
      
//       <p className="text-slate-800 text-2xl md:text-4xl leading-tight font-serif italic relative z-10">
//         At Mundyo Property Consulting LLC, we redefine the built environment through <span className="text-orange-600 not-italic font-sans font-black uppercase text-xl md:text-2xl tracking-tighter">technical precision</span> and strategic oversight.
//       </p>
//     </div>

//     {/* The Strategic Breakdown */}
//     <div className="grid md:grid-cols-2 gap-12 text-left border-t border-stone-100 pt-12">
//       <div>
//         <p className="text-stone-500 text-lg leading-relaxed font-light">
//           As a <strong className="text-slate-800 font-bold">certified Minority Business Enterprise</strong>, we bridge the gap between elite development and federal contracting—ensuring every project, from high-tech resorts to public infrastructure, is built for the future.
//         </p>
//       </div>
//       <div>
//         <p className="text-stone-500 text-lg leading-relaxed font-light">
//           We provide private capital partners with high-yield opportunities in ground-up construction and luxury renovations, delivering <strong className="text-slate-800 font-bold">exceptional returns</strong> through forced asset appreciation.
//         </p>
//       </div>
//     </div>
//   </div>

//   <div className="mt-20 h-px w-24 bg-orange-600/20 mx-auto"></div>
// </div>

//     {/* Paragraph 2: Range & Flexibility */}

// {/* Paragraph 2: Range & Flexibility */}
// <div className="mb-32">
//   <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-12 text-center">Market Versatility</h4>
  
//   <div className="max-w-4xl mx-auto px-4">
//     {/* Intro Sentence - Full Width */}
//     <div className="mb-16 text-center">
//       <p className="text-slate-800 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
//         Our portfolio is defined by technical precision and high-yield performance. We don't just manage properties—we <span className="text-orange-600 italic font-serif">engineer</span> them for maximum appreciation.
//       </p>
//     </div>

//     {/* The Side-by-Side Grid (Points 1 & 2) */}
//     <div className="grid md:grid-cols-2 gap-12 mb-16">
//       <div className="p-8 bg-white border border-stone-100 shadow-sm rounded-sm">
//         <span className="block text-orange-600 font-black uppercase tracking-widest text-[10px] mb-4">
//           01 / Construction & Renovations
//         </span>
//         <h5 className="text-slate-900 font-bold mb-4 uppercase tracking-tight">Forced Appreciation</h5>
//         <p className="text-stone-500 text-base leading-relaxed font-light">
//           We specialize in high-return residential and commercial developments. Whether constructing iconic A-Frame wellness resorts or transforming neglected structures into automated masterpieces, we integrate master-level HVAC and AI-driven systems to outperform the market.
//         </p>
//       </div>

//       <div className="p-8 bg-white border border-stone-100 shadow-sm rounded-sm">
//         <span className="block text-orange-600 font-black uppercase tracking-widest text-[10px] mb-4">
//           02 / Public Sector & Federal
//         </span>
//         <h5 className="text-slate-900 font-bold mb-4 uppercase tracking-tight">The Mundyo Standard</h5>
//         <p className="text-stone-500 text-base leading-relaxed font-light">
//           As a certified Minority Business Enterprise (MBE), we provide strategic consulting and general contracting for mission-critical infrastructure. Our technical mastery in mechanical systems makes us a preferred partner for state and federal agencies.
//         </p>
//       </div>
//     </div>

//     {/* The Third Point (Below - Centered/Anchored) */}
//     <div className="max-w-2xl mx-auto p-8 bg-slate-900 text-white rounded-sm shadow-xl relative overflow-hidden">
//       {/* Decorative Accent */}
//       <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 rounded-full -mr-12 -mt-12"></div>
      
//       <span className="block text-orange-500 font-black uppercase tracking-widest text-[10px] mb-4">
//         03 / Asset Management
//       </span>
//       <h5 className="text-xl font-bold mb-4 uppercase tracking-tight">Strategic Longevity</h5>
//       <p className="text-white/70 text-base leading-relaxed font-light">
//         Post-construction, we ensure the profitability of every project. We consult on long-term hold strategies and provide ongoing technical maintenance, ensuring that every asset—from private luxury resorts to government facilities—operates at peak efficiency.
//       </p>
//     </div>
//   </div>

//   <div className="mt-20 h-px w-24 bg-orange-600/20 mx-auto"></div>
// </div>


//     {/* Paragraph 3: Wealth Generation */}
//     <div className="mb-20">
//       <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Capital Management & Partnerships</h4>
//       <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
//         We bridge the gap between private capital and elite real estate. Mundyo provides a sophisticated, passive vehicle for
//          partners to invest in ground-up luxury projects—such as our flagship wellness resorts—designed for exceptional returns 
//          and long-term stability. We manage the complexity; you own the legacy.
//       </p>
//       <div className="mt-12 h-px w-24 bg-orange-600/20 mx-auto"></div>
//     </div>

//     {/* Paragraph 4: Integrity & Transparency */}
//     <div className="mb-20">
//       <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Integrity & Transparency</h4>
//       <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
//         Integrity is our primary currency. Our partners and government clients are fully integrated into the project
//          lifecycle through detailed updates and full financial transparency. From the initial architectural sketch to the final 
//          delivery, we take pride in protecting both your capital and our reputation.
//       </p>
//       <div className="mt-12 h-px w-24 bg-orange-600/20 mx-auto"></div>
//     </div>

//     {/* Paragraph 5: Lifetime Cashflow */}
//     <div className="mb-20">
//       <h4 className="text-slate-900 text-sm font-bold uppercase tracking-[0.3em] mb-4">Legacy Building</h4>
//       <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
//         Beyond Development. We don’t just build structures; we secure futures. By combining long-term rental hold strategies
//          with high-value government contracts, Mundyo Property Consulting ensures a stable, cash-flowing legacy. You monitor the growth;
//           we master the operations.
//       </p>
//       <div className="mt-20 h-[2px] w-48 bg-orange-600 mx-auto"></div>
//     </div>

//   </div>
// </section>


// {/* Breathtaking Transformation Gallery */}
// <section id="portfolio" className="py-24 bg-stone-50 text-stone-900">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="mb-20">
//       <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.5em] mb-4">The Portfolio</h3>
//       <h2 className="text-5xl md:text-7xl font-light tracking-tighter italic font-serif leading-none">
//         Concept to <span className="text-orange-600 font-sans font-black not-italic">Reality</span>
//       </h2>
//       <p className="text-stone-500 mt-6 max-w-xl font-light uppercase tracking-widest text-[10px]">
//         Witness the evolution of neglected spaces into high-yield, automated luxury assets.
//       </p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      
//       {/* Project 1: Total Estate Revival */}
//       <a 
//         href="https://www.instagram.com/p/DSIdViJEbLu/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="md:col-span-7 group relative h-[500px] md:h-[650px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
//       >
//         <img src="/IMG_6601.jpg" className="md:hidden w-full h-full object-cover" alt="Luxury Manor Transformation" />
//         <div className="hidden md:block absolute inset-0">
//           <img src="/9BFD83C8-1D55-42CB-AD22-102C63027179.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
//           <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
//             <source src="/video1.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
//           <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Total Estate Revival</p>
//           <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">The Sovereign Manor</h4>
//           <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
//         </div>
//       </a>

//       {/* Project 2: Internal Alchemy */}
//       <a 
//         href="https://www.instagram.com/p/DSFzWD5kf_r/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="md:col-span-5 group relative h-[500px] md:h-[650px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
//       >
//         <img src="/tv.jpg" className="md:hidden w-full h-full object-cover" alt="Luxury Suite Transformation" />
//         <div className="hidden md:block absolute inset-0">
//           <img src="/IMG_4884.JPG" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
//           <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
//             <source src="/e700e64526b34585986a56695a9a71e7.mov" />
//           </video>
//         </div>
//         <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
//           <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Internal Alchemy</p>
//           <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">The Quartz Sanctuary</h4>
//           <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
//         </div>
//       </a>

//       {/* Project 3: Smart Integration */}
//       <a 
//         href="https://www.instagram.com/p/DSYkqPiEfK0/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="md:col-span-6 group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
//       >
//         <img src="/topview.jpg" className="md:hidden w-full h-full object-cover" alt="Smart Stairs Transformation" />
//         <div className="hidden md:block absolute inset-0">
//           <img src="/IMG_1666.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
//           <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
//             <source src="/stair.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
//           <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Smart Integration</p>
//           <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">Motion-Sync Ascent</h4>
//           <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
//         </div>
//       </a>

//       {/* Project 4: Modern Living */}
//       <a 
//         href="https://www.instagram.com/p/DSywC1LjM1o/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="md:col-span-6 group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer block"
//       >
//         <img src="/IMG_6165.jpg" className="md:hidden w-full h-full object-cover" alt="Media Wall & Bath Suite" />
//         <div className="hidden md:block absolute inset-0">
//           <img src="/IMG_6165.jpg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:opacity-0 transition-all duration-[1.2s]" alt="Before" />
//           <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.2s]">
//             <source src="/lounge.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
//           <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Modern Living</p>
//           <h4 className="text-2xl text-white font-light tracking-widest uppercase mb-4">3D Media Enclave</h4>
//           <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold">View on Instagram →</span>
//         </div>
//       </a>

//     </div>
//   </div>
// </section>

// <section className="py-24 bg-stone-50 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
      
//       {/* 3D Render Image - Slightly shorter on mobile to prevent scrolling issues */}
//       <img 
//         src="/mundyocabin.png"
//         alt="Chez Mundyo A-Frame Cabin" 
//         className="w-full h-[450px] md:h-[700px] object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
//       />
      
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
      
//       {/* The "Floating Glass" Card - Width restricted on mobile (w-[85%]) and centered */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] md:translate-x-0 md:left-20 md:bottom-auto md:top-10 md:w-auto md:max-w-md bg-white/10 backdrop-blur-2xl p-5 md:p-12 rounded-2xl border border-white/20 shadow-2xl">
//         <h3 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 md:mb-4">
//           Featured Project
//         </h3>
//         <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-3 md:mb-6 leading-tight">
//           Chez Mundyo <br/><span className="text-orange-500">Cabin</span>
//         </h2>
//         <p className="text-white/90 text-[11px] md:text-base leading-relaxed mb-4 md:mb-8 font-light italic">
//           In partnership with <strong className="font-bold text-white">Avrame USA</strong>, we integrate automated luxury into the iconic A-frame. 
//         </p>
        
//         {/* Only show this on Tablet/Desktop to keep mobile view clean */}
//         <p className="hidden md:block text-white/70 text-sm leading-relaxed mb-8">
//           This is where modern engineering meets the serenity of nature—rendered in high-fidelity 3D for the visionary investor.
//         </p>
        
//        <a 
//   href="https://www.avrameusa.com/" 
//   target="_blank" 
//   rel="noopener noreferrer"
//   className="inline-block border-b border-orange-500 pb-1 text-white font-bold uppercase tracking-widest text-[8px] md:text-[10px] cursor-pointer hover:text-orange-400 transition-all"
// >
//   Experience the Render
// </a>

//       </div>
//     </div>
//   </div>
// </section>

// <section className="py-24 bg-slate-50">
//   <div className="max-w-7xl mx-auto px-6">
//     {/* Section Header */}
//     <div className="mb-16">
//       <h3 className="text-orange-600 text-xs font-bold uppercase tracking-[0.4em] mb-3">Network of Excellence</h3>
//       <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Collaborators <span className="text-orange-500">&</span> Partners</h2>
//       <p className="mt-4 text-slate-500 max-w-xl font-light">
//         Mundyo Property Consulting integrates world-class expertise to ensure every project is a masterpiece of engineering and design.
//       </p>
//     </div>

//     {/* Partners Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
//       {/* Partner Card 1 */}
//       <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
//         <div className="h-80 overflow-hidden">
//           {/* Replace with actual Partner Photo */}
//           <img 
//             src="/CEO.png" 
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//             alt="Partner Profile"
//           />
//         </div>
        
//         {/* Floating Glass Card */}
//         <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//           <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Lionel Mundyo Kasongi</h4>
//           <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">CEO & Founder</p>
//           <p className="text-slate-600 text-xs leading-relaxed font-light"> 
//         Expert systems architect and master builder delivering high-tech luxury estates      
//           </p>
//         </div>

//       </div>

//       {/* Partner Card 2 */}
//       <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
//         <div className="h-80 overflow-hidden">
//           <img 
//             src="/IMG_0917.jpg" 
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//             alt="Partner Profile"
//           />
//         </div>
        
//         <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//           <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Chelsea Mundyo</h4>
//           <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Senior Financial Analyst</p>
//           <p className="text-slate-600 text-xs leading-relaxed font-light">
//             Strategic problem solver and adaptive system thinker, known for data analysis skills.
//           </p>
//         </div>
//       </div>

//         <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
//         <div className="h-80 overflow-hidden">
//           <img 
//             src="/Herman.jpg" 
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//             alt="Partner Profile"
//           />
//         </div>
        
//         <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//           <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Herman Kabungu</h4>
//           <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Mining Engineer</p>
//           <p className="text-slate-600 text-xs leading-relaxed font-light">
//             As an EIT Civil Scope Planner, I support tailings design, planning and mapping with hands-on field experience
//           </p>
//         </div>
//       </div>

//       {/* Partner Card 4 (The "Add More" Placeholder) */}
     
//        <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
//         <div className="h-80 overflow-hidden">
//           <img 
//             src="/Kevine.jpg" 
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//             alt="Partner Profile"
//           />
//         </div>
        
//         <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//           <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Kevine Kakou</h4>
//           <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Real Eastate Agent</p>
//           <p className="text-slate-600 text-xs leading-relaxed font-light">
//             I am a Real Estate and Property Management professional with a strong foundation in business operation
//           </p>
//         </div>
//       </div>
//  {/* Partner Card 5 (The "Add More" Placeholder) */}

//          <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-2">
//         <div className="h-80 overflow-hidden">
//           <img 
//             src="/Simon.png" 
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//             alt="Partner Profile"
//           />
//         </div>
        
//         <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//           <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-1">Simon Kasuyi</h4>
//           <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-3">Founder & owner DYP</p>
//           <p className="text-slate-600 text-xs leading-relaxed font-light">
//            With a background in Management and Leadership, I merge high-level business strategy with mission-driven apparel
//           </p>
//         </div>
//       </div>
//          {/* Partner Card 6 (The "Add More" Placeholder) */}
//          {/* Partner Card 7 (The "Add More" Placeholder) */}
//          {/* Partner Card 8 (The "Add More" Placeholder) */}
//          {/* Partner Card 9 (The "Add More" Placeholder) */}

//     </div>
//   </div>
// </section>

// <section id="form" className="py-24 bg-stone-50">
//   <div className="max-w-4xl mx-auto px-6">
//     <div className="text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-[0.2em] text-slate-800">
//         Start Your Journey
//       </h2>
//       <div className="h-px w-20 bg-orange-400 mx-auto"></div>
//       <p className="mt-6 text-stone-500 font-serif italic">Investment & Project Inquiry.</p>
//     </div>

//     <div className="bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-sm border border-stone-100">
//       <form 
//         name="contact" 
//         method="POST" 
//         data-netlify="true" 
//         data-netlify-honeypot="bot-field"
//         onSubmit={handleSubmit}
//         className="space-y-10"
//       >
//         {/* CRITICAL FOR NETLIFY */}
//         <input type="hidden" name="form-name" value="contact" />
//         <input type="hidden" name="bot-field" />

//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
//           <div className="relative group">
//             <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-2 block">First Name</label>
//             <input type="text" name="firstName" required className="w-full pb-3 border-b border-stone-200 outline-none focus:border-orange-600 bg-transparent text-slate-700" />
//           </div>
//           <div className="relative group">
//             <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-2 block">Last Name</label>
//             <input type="text" name="lastName" required className="w-full pb-3 border-b border-stone-200 outline-none focus:border-orange-600 bg-transparent text-slate-700" />
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
//           <div className="relative group">
//             <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-2 block">Email Address</label>
//             <input type="email" name="email" required className="w-full pb-3 border-b border-stone-200 outline-none focus:border-orange-600 bg-transparent text-slate-700" />
//           </div>
//           <div className="relative group">
//             <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-2 block">Phone Number</label>
//             <input type="tel" name="phone" required className="w-full pb-3 border-b border-stone-200 outline-none focus:border-orange-600 bg-transparent text-slate-700" />
//           </div>
//         </div>

//         <div className="relative group">
//           <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-2 block">Project Vision</label>
//           <textarea name="message" rows="4" required className="w-full py-3 border-b border-stone-200 outline-none focus:border-orange-600 bg-transparent text-slate-700 resize-none"></textarea>
//         </div>

//         <div className="pt-6">
//           <button type="submit" className="group relative w-full bg-slate-900 overflow-hidden text-white font-light uppercase tracking-[0.4em] py-6 transition-all duration-500">
//             <span className="relative z-10">Submit Inquiry</span>
//             <div className="absolute inset-0 bg-orange-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </section>

//       {/* Footer / Contact Section */}

//       <footer id='footer' className="bg-slate-900 text-white pt-24 pb-12">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      
//       {/* Column 1: Brand Identity */}
//       <div className="md:col-span-1">
//         <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">
//           Mundyo<span className="text-orange-500">.</span>
//         </h2>
//         <p className="text-slate-400 text-xs uppercase tracking-[0.2em] leading-relaxed">
//           Bespoke AI Design & <br /> Property Consulting
//         </p>
//       </div>

//       {/* Column 2: Projects */}
//       <div>
//         <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Expertise</h4>
//         <ul className="space-y-4 text-sm text-slate-300 font-light">
//           <li className="hover:text-orange-500 cursor-pointer transition-colors">Chez Mundyo Cabins</li>
//           <li className="hover:text-orange-500 cursor-pointer transition-colors">Luxury Remodeling</li>
//           <li className="hover:text-orange-500 cursor-pointer transition-colors">Smart Home Integration</li>
//         </ul>
//       </div>

//       {/* Column 3: Contact */}
//       <div>
//         <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Inquiries</h4>
//         <ul className="space-y-4 text-sm text-slate-300 font-light">
//           <li>lionel@mundyopropertyconsulting.com</li>
//           <li> +1 (978) 596-5883/ (224) 493-5793</li>
//           <li>Based in USA</li>
//           <li className="text-orange-500 font-bold uppercase tracking-widest text-[10px] pt-2">Available for Global Projects</li>
//         </ul>
//       </div>

//       {/* Column 4: Social Strategy */}
//       <div>
//         <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Follow the Vision</h4>
//         <div className="flex space-x-6">
//           {/* TikTok */}
//           <a href="https://www.tiktok.com/@mundyomastercraft?_r=1&_t=ZT-92pAGN7907J" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.02-.73 2.21-1.14 3.44-1.2 1.05-.08 2.13.08 3.13.49v4.19c-.81-.36-1.75-.42-2.61-.21-.58.15-1.1.48-1.44.97-.44.66-.58 1.48-.44 2.27.11.71.49 1.37 1.07 1.8.6.45 1.37.64 2.11.53 1.02-.12 1.93-.89 2.22-1.88.19-.71.13-1.47.13-2.2v-12.43z"/></svg>
//           </a>
//           {/* Instagram */}
//           <a href="https://www.instagram.com/mundyomastercraft?igsh=cDdsdzdkbmxiaThn" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//           </a>
//           {/* Facebook */}
//           <a href="https://www.facebook.com/share/17nhwvdRYr/?mibextid=wwXIfr" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
//           </a>
//           {/* LinkedIn */}
//           <a href="#" className="hover:text-orange-500 transition-all transform hover:-translate-y-1">
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* Bottom Bar */}
//     <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center
//      text-[10px] uppercase tracking-[0.4em] text-slate-500">
//       <p>© 2026 Mundyo Property Consulting</p>
//       <p className="mt-4 md:mt-0">Private & Confidential</p>
//     </div>
//   </div>
// </footer>
     
//     </div>
//   );
// }

// export default App;

























