import Link from 'next/link';
import SignPledgeForm from '@/components/SignPledgeForm';

export default function SignPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
            Sign the Pledge
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Join filmmakers worldwide in committing to human creativity in the 48-hour challenge
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 text-center">
              Take the Pledge
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center leading-relaxed">
              By signing this pledge, you commit to creating your 48-hour film using only human creativity, collaboration, and traditional filmmaking tools.
            </p>

            <SignPledgeForm />
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 md:py-12 bg-gray-50 dark:bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}