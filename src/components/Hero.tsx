import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500">
      <div className="text-center max-w-4xl px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Discover Culinary Magic with Every Recipe
        </motion.h1>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Explore Recipes
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
            Watch Video
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}