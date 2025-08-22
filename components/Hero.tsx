
import React from 'react';
import Stats from './Stats';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920183353-3c9c9b5de2a8?q=80&w=1974&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          ラオスの“現場”と日本をつなぎ、<br />価値が伝わる仕組みをつくる。
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          エフラオは、学生主体でラオスの教育支援とフェアトレードコーヒーの普及に取り組むコミュニティです。現場の声から課題を見つけ、持続可能な形で”届ける”ことにこだわります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#" className="bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
            活動を見る 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="bg-white/20 backdrop-blur-sm border border-white/50 text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors duration-300 shadow-lg">
            ラオスコーヒーを知る
          </a>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Hero;