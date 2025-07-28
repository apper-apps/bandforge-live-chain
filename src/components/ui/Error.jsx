import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Error = ({ 
  message = "Something went wrong", 
  onRetry,
  className = "" 
}) => {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="text-center max-w-md">
        <div className="mb-4">
          <ApperIcon 
            name="AlertTriangle" 
            size={48} 
            className="text-error mx-auto mb-4" 
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-white/70 mb-6">
            {message}
          </p>
        </div>
        
        {onRetry && (
          <Button onClick={onRetry} className="gap-2">
            <ApperIcon name="RefreshCw" size={16} />
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}

export default Error