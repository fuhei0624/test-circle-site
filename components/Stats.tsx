
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center text-gray-800 shadow-lg w-full">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl lg:text-4xl font-bold my-1 text-blue-900">{value}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const statsData = [
    { value: '約1000名', label: '累計メンバー', description: 'Total Members' },
    { value: '約40名', label: '現役（120期)', description: 'Active Members' },
    { value: '毎年', label: '年次開催 同窓会', description: 'Annual Alumni Event' },
    { value: '販売会・勉強会', label: '主催イベント', description: 'Sales & Study Events' },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
      {statsData.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} description={stat.description} />
      ))}
    </div>
  );
};

export default Stats;
