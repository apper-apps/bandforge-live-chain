import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const Header = () => {
  return (
    <header className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-xl glass neon-glow">
              <ApperIcon name="Music" size={32} className="text-primary" />
            </div>
            <h1 className="font-righteous text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              BandForge
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Forge unique and memorable band names instantly. 
            <span className="text-accent font-medium"> Let creativity strike!</span>
          </p>

          {/* Stats or Features */}
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-1">
              <ApperIcon name="Zap" size={16} className="text-accent" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center gap-1">
              <ApperIcon name="Music" size={16} className="text-primary" />
              <span>9 Genres</span>
            </div>
            <div className="flex items-center gap-1">
              <ApperIcon name="Heart" size={16} className="text-error" />
              <span>Save Favorites</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header