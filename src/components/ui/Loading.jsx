import ApperIcon from "@/components/ApperIcon"

const Loading = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <ApperIcon 
            name="Loader2" 
            size={32} 
            className="animate-spin text-primary" 
          />
          <div className="absolute inset-0 animate-ping">
            <ApperIcon 
              name="Music" 
              size={32} 
              className="text-primary/30" 
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-white/70 font-medium">Forging band names...</p>
          <p className="text-white/50 text-sm mt-1">This won't take long</p>
        </div>
      </div>
    </div>
  )
}

export default Loading