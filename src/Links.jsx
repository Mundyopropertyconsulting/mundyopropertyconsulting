



// import React from 'react';
// import { Instagram, Globe, Video, MessageSquare, ArrowRight, Facebook } from 'lucide-react';



// const Links = () => {
//   const socialLinks = [
//     {
//       title: "Investment Inquiry",
//       subtitle: "Join our next 7-12% return cycle",
//       icon: <MessageSquare className="w-5 h-5" />,
//       url: "/#form",
//       // Dark Border, Dark Slate Text, Orange Icon
//       baseClass: "bg-transparent border-2 border-slate-900 text-slate-900",
//       hoverClass: "hover:bg-slate-900 hover:text-white"
//     },
//     {
//       title: "Official Website",
//       subtitle: "Explore our full portfolio",
//       icon: <Globe className="w-5 h-5" />,
//       url: "/",
//       // Soft Grey background, Slate Text
//       baseClass: "bg-stone-200 border-stone-300 text-slate-800",
//       hoverClass: "hover:bg-slate-800 hover:text-white"
//     },
//     {
//       title: "Instagram",
//       subtitle: "Behind the scenes of our flips",
//       icon: <Instagram className="w-5 h-5" />,
//       url: "https://www.instagram.com/mundyomastercraft?igsh=cDdsdzdkbmxiaThn",
//       baseClass: "bg-white border-stone-200 text-slate-700",
//       hoverClass: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white"
//     },
//     {
//       title: "TikTok",
//       subtitle: "Renovation transformations",
//       icon: <Video className="w-5 h-5" />,
//       url: "https://www.tiktok.com/@mundyomastercraft?_r=1&_t=ZT-92pAGN7907J",
//       baseClass: "bg-white border-stone-200 text-slate-700",
//       hoverClass: "hover:bg-black hover:text-white"
//     },
//     {
//       title: "Facebook",
//       subtitle: "Community & Updates",
//       icon: <Facebook className="w-5 h-5" />,
//       url: "https://www.facebook.com/share/17nhwvdRYr/?mibextid=wwXIfr",
//       baseClass: "bg-white border-stone-200 text-slate-700",
//       hoverClass: "hover:bg-[#1877F2] hover:text-white"
//     }
//   ];

//   return (


//       <div className="min-h-screen bg-stone-50 flex flex-col items-center px-6 py-20">
//        {/* Profile Section */}
//       <div className="text-center mb-12">
//          <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-black">
//            M <span className="text-orange-500">.</span>
//         </div>
//          <h1 className="text-xl font-bold uppercase tracking-[0.3em] text-slate-800">Mundyo</h1>
//         <p className="text-stone-500 font-serif italic mt-2">Property Consulting</p>
//       </div>




//       {/* Links Map */}
//       <div className="w-full max-w-md space-y-4">
//         {socialLinks.map((item, idx) => (
//           <a 
//             key={idx} 
//             href={item.url} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className={`
//               flex items-center justify-between p-5 rounded-2xl border 
//               transition-all duration-300 group
//               ${item.baseClass}
//               ${item.hoverClass}
//             `}
//           >
//             <div className="flex items-center gap-4">
//               {/* Icon - Orange by default so it's visible */}
//               <span className="text-orange-600 group-hover:text-white transition-colors duration-300">
//                 {item.icon}
//               </span>

//               <div>
//                 {/* Title - Forced to Slate/Dark unless hovered */}
//                 <h3 className="text-[11px] font-bold uppercase tracking-widest">
//                   {item.title}
//                 </h3>
                
//                 {/* Subtitle - Subtle Slate */}
//                 <p className="text-[10px] opacity-70 group-hover:opacity-100 group-hover:text-white">
//                   {item.subtitle}
//                 </p>
//               </div>
//             </div>

//             {/* Arrow */}
//             <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
//               <ArrowRight size={16} />
//             </div>
//           </a>
//         ))}
//       </div>

//       <footer className="mt-16 text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
//         © 2026 Mundyo Property Consulting
//       </footer>
//     </div>
//   );
// };

// export default Links;

 

import React from 'react';
// Added UserPlus to the imports
import { Instagram, Globe, Video, MessageSquare, ArrowRight, Facebook, UserPlus } from 'lucide-react';

const Links = () => {
  // 1. Function to download your Contact Card
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
      baseClass: "bg-transparent border-2 border-slate-900 text-slate-900",
      hoverClass: "hover:bg-slate-900 hover:text-white"
    },
    {
      title: "Official Website",
      subtitle: "Explore our full portfolio",
      icon: <Globe className="w-5 h-5" />,
      url: "/",
      baseClass: "bg-stone-200 border-stone-300 text-slate-800",
      hoverClass: "hover:bg-slate-800 hover:text-white"
    },
    {
      title: "Instagram",
      subtitle: "Behind the scenes of our flips",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/mundyomastercraft?igsh=cDdsdzdkbmxiaThn",
      baseClass: "bg-white border-stone-200 text-slate-700",
      hoverClass: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white"
    },
    {
      title: "TikTok",
      subtitle: "Renovation transformations",
      icon: <Video className="w-5 h-5" />,
      url: "https://www.tiktok.com/@mundyomastercraft?_r=1&_t=ZT-92pAGN7907J",
      baseClass: "bg-white border-stone-200 text-slate-700",
      hoverClass: "hover:bg-black hover:text-white"
    },
    {
      title: "Facebook",
      subtitle: "Community & Updates",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/share/17nhwvdRYr/?mibextid=wwXIfr",
      baseClass: "bg-white border-stone-200 text-slate-700",
      hoverClass: "hover:bg-[#1877F2] hover:text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20">
      {/* Profile Section */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-black">
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
              <span className="text-orange-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </span>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="text-[10px] opacity-70 group-hover:opacity-100 group-hover:text-white">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
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