export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
          I Declare
        </h1>
        <div className="mt-12 flex flex-col items-center gap-8">
          <img
            src="/48ai.png"
            alt="Placeholder hero illustration"
            className="w-full max-w-4xl rounded-[36px] border border-gray-200 bg-white shadow-2xl shadow-gray-200/20 dark:border-gray-800 dark:bg-gray-950 dark:shadow-black/20"
          />
          <p className="max-w-3xl text-center text-3xl sm:text-4xl md:text-5xl font-light text-gray-700 dark:text-gray-300 leading-relaxed">
            NOT TO USE AI IN MY 48!
          </p>
        </div>
      </div>
    </section>
  );
}
