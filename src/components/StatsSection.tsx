import StatCard from './StatCard';

const stats = [
  { number: 248, label: 'Filmmakers Pledged' },
  { number: 12, label: 'Teams Committed' },
  { number: 5, label: 'Cities Participating' },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gray-50 dark:bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-12 md:mb-16 text-center">
          The Movement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
