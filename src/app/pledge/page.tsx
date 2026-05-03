import Link from 'next/link';
import PledgeText from '@/components/PledgeText';

export default function PledgePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
            The Pledge
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A commitment to human creativity in the 48-hour filmmaking challenge
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              The 48-hour film challenge has always been about pushing creative boundaries within strict time constraints. In an era where AI tools are increasingly integrated into creative workflows, this pledge represents a conscious choice to honor the human element of filmmaking.
            </p>
            <p>
              By taking this pledge, filmmakers commit to creating their films using only their own skills, their team's collaboration, and traditional filmmaking tools. This isn't about rejecting technology—it's about celebrating what humans can achieve together when we embrace the challenge fully.
            </p>
          </div>
        </div>
      </section>

      {/* The Pledge */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50 dark:bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PledgeText />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-black text-yellow-800 dark:text-yellow-200 mb-4">
              Important Notice
            </h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                This pledge is a voluntary, honor-based commitment. It is not affiliated with any official 48-hour film competition or organization. Participation is entirely optional, and there are no prizes, rankings, or official enforcement mechanisms.
              </p>
              <p>
                The pledge serves as a personal statement of creative intent and a celebration of human craftsmanship in filmmaking. It represents a choice to embrace the full challenge of the 48-hour format without technological shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-50 dark:bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 md:mb-12">
            Ready to Take the Pledge?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join filmmakers worldwide who are choosing to celebrate human creativity in the 48-hour challenge.
          </p>
          <Link
            href="/sign"
            className="inline-block px-8 md:px-10 py-4 md:py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            Sign the Pledge
          </Link>
        </div>
      </section>
    </div>
  );
}
