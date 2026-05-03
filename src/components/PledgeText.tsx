export default function PledgeText() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6">
          I declare that I will...
        </h3>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="flex items-start">
            <span className="text-gray-900 dark:text-white font-bold mr-3">•</span>
            Create my 48-hour film using only my own creativity, my team's talent, and traditional filmmaking tools
          </li>
          <li className="flex items-start">
            <span className="text-gray-900 dark:text-white font-bold mr-3">•</span>
            Rely on human collaboration, storytelling, and craftsmanship to bring my vision to life
          </li>
          <li className="flex items-start">
            <span className="text-gray-900 dark:text-white font-bold mr-3">•</span>
            Honor the tradition of the 48-hour challenge by embracing its constraints as creative opportunities
          </li>
          <li className="flex items-start">
            <span className="text-gray-900 dark:text-white font-bold mr-3">•</span>
            Celebrate the human element in filmmaking and the joy of creating together under pressure
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6">
          I declare that I will not...
        </h3>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="flex items-start">
            <span className="text-red-600 dark:text-red-400 font-bold mr-3">•</span>
            Use AI-generated content, including scripts, images, audio, or video assets
          </li>
          <li className="flex items-start">
            <span className="text-red-600 dark:text-red-400 font-bold mr-3">•</span>
            Rely on AI tools for editing, color correction, sound design, or post-production work
          </li>
          <li className="flex items-start">
            <span className="text-red-600 dark:text-red-400 font-bold mr-3">•</span>
            Incorporate any AI-assisted elements that would replace human creative decisions
          </li>
          <li className="flex items-start">
            <span className="text-red-600 dark:text-red-400 font-bold mr-3">•</span>
            Compromise the integrity of human creativity in favor of technological shortcuts
          </li>
        </ul>
      </div>
    </div>
  );
}
