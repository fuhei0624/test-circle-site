
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ミッション</h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          「上から与える支援ではなく、現地の声に基づいた”下からの支援”へ」<br/>
          このミッションを軸に、ラオスの子どもたちの教育環境の改善を目指しています。ただ学校を建設するだけでなく、子どもたちが学び続けられる仕組みづくり、そして先生や地域住民を巻き込んだ持続可能なコミュニティの形成をサポートします。
        </p>
      </div>
    </section>
  );
};

export default Mission;
