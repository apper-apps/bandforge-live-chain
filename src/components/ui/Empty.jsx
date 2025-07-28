import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  title = "Nothing here yet",
  description = "Get started by creating something new",
  actionLabel = "Get Started",
  onAction,
  icon = "Music",
  className = "" 
}) => {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="p-4 rounded-full glass inline-block mb-4">
            <ApperIcon 
              name={icon} 
              size={48} 
              className="text-white/50" 
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/70">
            {description}
          </p>
        </div>
        
        {onAction && (
          <Button onClick={onAction} className="gap-2">
            <ApperIcon name="Plus" size={16} />
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Empty