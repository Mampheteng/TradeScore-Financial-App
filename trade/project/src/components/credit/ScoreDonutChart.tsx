import { motion } from 'framer-motion';

interface ChartSection {
  percentage: number;
  color: string;
  label: string;
}

interface ScoreDonutChartProps {
  sections: ChartSection[];
}

const ScoreDonutChart = ({ sections }: ScoreDonutChartProps) => {
  const section = sections[0];
  const remainingPercentage = 100 - section.percentage;
  
  return (
    <div className="relative w-48 h-48">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {/* Background circle (gray) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="20"
        />
        
        {/* Progress circle (teal) */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgb(20 184 166)"
          strokeWidth="20"
          strokeDasharray={`${section.percentage} ${remainingPercentage}`}
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: `${section.percentage} ${remainingPercentage}` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-2xl font-bold text-gray-800">{section.percentage}%</div>
          <div className="text-sm text-gray-600">{section.label}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScoreDonutChart;