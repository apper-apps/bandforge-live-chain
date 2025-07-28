import { cn } from "@/utils/cn"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"
import ApperIcon from "@/components/ApperIcon"
import { toast } from "react-toastify"

const FavoriteItem = ({ favorite, onRemove, className }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(favorite.name)
      toast.success("Band name copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy to clipboard")
    }
  }

  return (
    <div className={cn(
      "glass rounded-lg p-3 space-y-2 hover:shadow-neon-pink transition-all duration-200",
      className
    )}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="font-righteous text-lg text-white truncate">
            {favorite.name}
          </h4>
          {favorite.genre && (
            <Badge variant="accent" className="mt-1">
              {favorite.genre}
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(favorite.id)}
          className="flex-shrink-0 p-1 hover:text-error"
        >
          <ApperIcon name="X" size={16} />
        </Button>
      </div>
      
      <div className="flex gap-1">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleCopy}
          className="flex-1 text-xs"
        >
          <ApperIcon name="Copy" size={14} className="mr-1" />
          Copy
        </Button>
      </div>
    </div>
  )
}

export default FavoriteItem