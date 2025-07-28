import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"
import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { toast } from "react-toastify"

const BandNameDisplay = ({ 
  bandName, 
  isGenerating, 
  onGenerate, 
  onFavorite,
  className 
}) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCopy = async () => {
    if (!bandName?.name) return
    
    try {
      await navigator.clipboard.writeText(bandName.name)
      toast.success("Band name copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy to clipboard")
    }
  }

  const handleGenerate = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
    onGenerate()
  }

  const handleFavorite = () => {
    if (!bandName?.name) return
    onFavorite(bandName)
    toast.success("Added to favorites!")
  }

  return (
    <Card className={cn(
      "text-center space-y-6 min-h-64 flex flex-col justify-center relative overflow-hidden",
      className
    )}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative z-10 space-y-6">
        {/* Generated Band Name */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-white/60 uppercase tracking-wider">
            Your Band Name
          </h2>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={bandName?.name || "empty"}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-h-20 flex items-center justify-center"
            >
              {isGenerating ? (
                <div className="flex items-center gap-3">
                  <ApperIcon name="Loader2" size={24} className="animate-spin text-primary" />
                  <span className="text-xl text-white/70">Forging your name...</span>
                </div>
              ) : bandName?.name ? (
                <h1 className={cn(
                  "font-righteous text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight",
                  isAnimating && "animate-pulse-glow"
                )}>
                  {bandName.name}
                </h1>
              ) : (
                <div className="text-white/50 text-lg">
                  Click generate to forge your band name
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {bandName?.genre && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent text-sm font-medium"
            >
              {bandName.genre} • {bandName.generationType}
            </motion.div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            size="lg"
            className="flex items-center gap-2 min-w-40"
          >
            {isGenerating ? (
              <ApperIcon name="Loader2" size={20} className="animate-spin" />
            ) : (
              <ApperIcon name="RefreshCw" size={20} />
            )}
            {isGenerating ? "Generating..." : "Generate New"}
          </Button>

          {bandName?.name && (
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleCopy}
                className="flex items-center gap-2"
              >
                <ApperIcon name="Copy" size={20} />
                Copy
              </Button>
              
              <Button
                variant="accent"
                size="lg"
                onClick={handleFavorite}
                className="flex items-center gap-2"
              >
                <ApperIcon name="Heart" size={20} />
                Favorite
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default BandNameDisplay