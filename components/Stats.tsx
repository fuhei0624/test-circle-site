
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center text-gray-800 shadow-lg w-full">
      <p className="text-3xl lg:text-4xl font-bold text-gray-900">{value}</p>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
};

const statsData = [
    { value: '約1000名', label: '累計メンバー' },
    { value: '約40名', label: '現役（120期)' },
    { value: '毎年', label: '年次開催 同窓会' },
    { value: '販売会・勉強会', label: '主催イベント' },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl">
      {statsData.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default Stats;