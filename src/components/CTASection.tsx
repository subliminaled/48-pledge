"use client";

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gray-50 dark:bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 md:mb-12 text-center">
          Join the Pledge
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/pledge"
            className="inline-block px-8 md:px-10 py-4 md:py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-center"
          >
            Read the Pledge
          </Link>
          <Link
            href="/sign"
            className="inline-block px-8 md:px-10 py-4 md:py-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white font-bold text-lg rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
          >
            Sign the Pledge
          </Link>
        </div>
      </div>
    </section>
  );
}
