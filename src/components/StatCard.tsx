interface StatCardProps {
  number: string | number;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/20 transition-shadow duration-300">
      <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 text-center">
        {label}
      </div>
    </div>
  );
}
