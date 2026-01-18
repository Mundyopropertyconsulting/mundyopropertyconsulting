


import React from 'react';
import { Instagram, Globe, Video, MessageSquare, ArrowRight, Facebook, UserPlus } from 'lucide-react';

const Links = () => {
  const saveVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lionel Mundyo Kasongi
ORG:Mundyo Property Consulting
TITLE:CEO & Founder
TEL;TYPE=CELL:+19785965883
EMAIL:lionel@mundyopropertyconsulting.com
URL:https://mundyopropertyconsulting.com
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Lionel_Mundyo.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      title: "Investment Inquiry",
      subtitle: "Join our next 7-12% return cycle",
      icon: <MessageSquare className="w-5 h-5" />,
      url: "/#form",
      // Always Dark Slate
      baseClass: "bg-slate-900 border-slate-900 text-white shadow-md",
      hoverClass: "hover:bg-slate-800"
    },
    {
      title: "Official Website",
      subtitle: "Explore our full portfolio",
      icon: <Globe className="w-5 h-5" />,
      url: "/",
      // Always Stone Grey
      baseClass: "bg-stone-200 border-stone-300 text-slate-800",
      hoverClass: "hover:bg-stone-300"
    },
    {
      title: "Instagram",
      subtitle: "Behind the scenes of our flips",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/mundyomastercraft?igsh=cDdsdzdkbmxiaThn",
      // Always Gradient
      baseClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white border-transparent shadow-sm",
      hoverClass: "hover:opacity-90"
    },
    {
      title: "TikTok",
      subtitle: "Renovation transformations",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.tiktok.com/@mundyomastercraft?_r=1&_t=ZT-92pAGN7907J",
      // Always Black
      baseClass: "bg-black text-white border-black",
      hoverClass: "hover:bg-zinc-900"
    },
    {
      title: "Facebook",
      subtitle: "Community & Updates",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/share/17nhwvdRYr/?mibextid=wwXIfr",
      // Always Facebook Blue
      baseClass: "bg-[#1877F2] text-white border-[#1877F2]",
      hoverClass: "hover:bg-[#166fe5]"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20 font-sans">
      {/* Profile Section */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-black shadow-lg">
          M <span className="text-orange-500">.</span>
        </div>
        <h1 className="text-xl font-bold uppercase tracking-[0.3em] text-slate-800">Mundyo</h1>
        <p className="text-stone-500 font-serif italic mt-2">Property Consulting</p>
      </div>

      {/* Save Contact Button */}
      <button 
        onClick={saveVCard}
        className="w-full max-w-md mb-8 flex items-center justify-center gap-3 p-4 rounded-2xl bg-orange-600 text-white font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-orange-700 transition-all active:scale-95"
      >
        <UserPlus size={18} />
        Save Business Contact
      </button>

      {/* Links Map */}
      <div className="w-full max-w-md space-y-4">
        {socialLinks.map((item, idx) => (
          <a 
            key={idx} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
              flex items-center justify-between p-5 rounded-2xl border 
              transition-all duration-300 group
              ${item.baseClass}
              ${item.hoverClass}
            `}
          >
            <div className="flex items-center gap-4">
              {/* Icon - White for colored backgrounds, Orange for the Website button */}
              <span className={`${item.title === "Official Website" ? "text-orange-600" : "text-white"} transition-colors duration-300`}>
                {item.icon}
              </span>

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className={`text-[10px] ${item.title === "Official Website" ? "text-slate-500" : "text-white/80"}`}>
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Arrow - Stays white/light to be visible on colors */}
            <div className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <ArrowRight size={16} />
            </div>
          </a>
        ))}
      </div>

      <footer className="mt-16 text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
        © 2026 Mundyo Property Consulting
      </footer>
    </div>
  );
};

export default Links;