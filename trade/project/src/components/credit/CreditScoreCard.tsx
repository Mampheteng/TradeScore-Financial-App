import { motion } from 'framer-motion';

interface CreditScoreCardProps {
  score: number;
}

const CreditScoreCard = ({ score }: CreditScoreCardProps) => {
  // Calculate percentage of the circle to fill based on score (0-850)
  const maxScore = 850;
  const percentage = (score / maxScore) * 100;
  
  // Determine color based on score range
  let color = 'text-red-500';
  if (score >= 740) {
    color = 'text-green-500';
  } else if (score >= 670) {
    color = 'text-teal-500';
  } else if (score >= 580) {
    color = 'text-yellow-500';
  }
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center">
      <div className="relative w-36 h-36 mb-2">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className={color}
            strokeDasharray={`${2 * Math.PI * 45}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            animate={{ 
              strokeDashoffset: 2 * Math.PI * 45 * (1 - percentage / 100) 
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            transform="rotate(-90 50 50)"
          />
        </svg>
        
        {/* Score value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-3xl font-bold text-gray-800">{score}</span>
            <div className="text-xs text-gray-500 mt-1">Credit Score</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreCard;