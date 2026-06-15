import React from 'react';

const ARTICLES = [
  {
    id: 1,
    category: 'INDUSTRY',
    title: 'How DOOH is changing the retail landscape in 2026',
    excerpt: 'Digital Out-of-Home (DOOH) advertising is seeing unprecedented growth, matching online display CTRs in key store hubs.',
    date: 'June 10, 2026',
    author: 'Marketing Team'
  },
  {
    id: 2,
    category: 'INNOVATION',
    title: 'The science behind our energy-efficient displays',
    excerpt: 'Discover how Ilaan’s custom hardware reduces display carbon footprints by 35% without sacrificing screen brightness.',
    date: 'May 20, 2026',
    author: 'R&D Dept'
  },
  {
    id: 3,
    category: 'COMPANY',
    title: 'Ilaan expands operations to GCC and Europe regions',
    excerpt: 'To accommodate growing enterprise client demand, we are opening two new regional offices in London and Dubai.',
    date: 'May 04, 2026',
    author: 'Corporate Relations'
  }
];

const MediaPress = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#04010a]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#E000FF] uppercase block mb-2">
            PRESS & PERSPECTIVES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
            Latest News & Insights
          </h2>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ARTICLES.map(article => (
            <div
              key={article.id}
              className="group relative bg-[#090514]/40 border border-white/5 rounded-3xl p-8 hover:border-[#E000FF]/40 hover:shadow-[0_0_30px_rgba(224,0,255,0.1)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-[#E000FF] bg-[#E000FF]/10 border border-[#E000FF]/20 px-3 py-1 rounded-full uppercase w-fit block">
                  {article.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#E000FF] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-400 font-poppins font-light text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>By {article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaPress;
