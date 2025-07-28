import ApperIcon from "@/components/ApperIcon"

const Footer = () => {
  const tips = [
    "Try different genres for varied vibes",
    "Mix generation modes for unique results",
    "Save your favorites before they're gone",
    "Copy names instantly to your clipboard"
  ]

  return (
    <footer className="w-full py-8 px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Quick Tips */}
        <div className="glass rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <ApperIcon name="Lightbulb" size={20} className="text-accent" />
            Quick Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70">
                <ApperIcon name="Check" size={16} className="text-success flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-white/50 text-sm">
          <p className="flex items-center justify-center gap-2 mb-2">
            <span>Made with</span>
            <ApperIcon name="Heart" size={16} className="text-error" />
            <span>for musicians everywhere</span>
          </p>
          <p>&copy; 2024 BandForge. Keep the music alive!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer