import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"
import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import FavoriteItem from "@/components/molecules/FavoriteItem"

const FavoritesPanel = ({ 
  favorites, 
  onRemoveFavorite, 
  className 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleClearAll = () => {
    favorites.forEach(favorite => onRemoveFavorite(favorite.id))
  }

  return (
    <Card className={cn(
      "space-y-4 transition-all duration-300",
      isCollapsed ? "p-3" : "p-6",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ApperIcon name="Heart" size={20} className="text-accent" />
          {!isCollapsed && (
            <h3 className="text-lg font-semibold text-white">
              Favorites ({favorites.length}/20)
            </h3>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          {!isCollapsed && favorites.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-xs text-error hover:text-error"
            >
              Clear All
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1"
          >
            <ApperIcon 
              name={isCollapsed ? "ChevronDown" : "ChevronUp"} 
              size={16} 
            />
          </Button>
        </div>
      </div>

      {/* Favorites List */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {favorites.length === 0 ? (
                <div className="text-center py-8 text-white/50">
                  <ApperIcon name="Music" size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No favorites yet</p>
                  <p className="text-xs opacity-70 mt-1">
                    Heart the names you love!
                  </p>
                </div>
              ) : (
                favorites.map((favorite) => (
                  <motion.div
                    key={favorite.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FavoriteItem
                      favorite={favorite}
                      onRemove={onRemoveFavorite}
                    />
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default FavoritesPanel