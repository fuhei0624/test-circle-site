
import React from 'react';
import Logo from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-bold text-xl">エフラオ / Smile F LAOS</span>
            </a>
            <p className="mt-4 max-w-xs text-gray-400">
              学生主体でラオスの教育支援とフェアトレードコーヒーの普及に取り組むコミュニティです。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold uppercase tracking-wider text-gray-300">About</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mission</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">プロジェクト</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">メンバー</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider text-gray-300">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">参加・寄付</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SNS</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider text-gray-300">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} エフラオ / Smile F LAOS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
