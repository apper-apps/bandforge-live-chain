import { cn } from "@/utils/cn"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const GenerationModeSelector = ({ selectedMode, onModeChange, className }) => {
  const modes = [
    { 
      id: "random", 
      name: "Random", 
      icon: "Shuffle",
      description: "Pure chaos"
    },
    { 
      id: "genre", 
      name: "Genre-Based", 
      icon: "Music",
      description: "Style-specific"
    },
    { 
      id: "combination", 
      name: "Word Mix", 
      icon: "Zap",
      description: "Creative combos"
    },
    { 
      id: "adjective", 
      name: "Adjective + Noun", 
      icon: "Plus",
      description: "Classic formula"
    },
    { 
      id: "themed", 
      name: "Themed", 
      icon: "Sparkles",
      description: "Concept-driven"
    }
  ]

  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-lg font-semibold text-white/90">Generation Mode</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {modes.map((mode) => (
          <Button
            key={mode.id}
            variant={selectedMode === mode.id ? "primary" : "ghost"}
            size="sm"
            onClick={() => onModeChange(mode.id)}
            className={cn(
              "flex-col gap-1 h-auto py-3 px-2 text-center",
              selectedMode === mode.id && "scale-105"
            )}
          >
            <ApperIcon name={mode.icon} size={20} />
            <span className="text-xs font-medium">{mode.name}</span>
            <span className="text-xs opacity-70">{mode.description}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default GenerationModeSelector