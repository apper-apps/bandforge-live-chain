const STORAGE_KEY = "bandforge_favorites"
const MAX_FAVORITES = 20

export const getFavorites = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("Error loading favorites:", error)
    return []
  }
}

export const addFavorite = (favorite) => {
  try {
    const favorites = getFavorites()
    
    // Check if already exists
    if (favorites.some(f => f.name === favorite.name)) {
      throw new Error("This band name is already in your favorites")
    }
    
    // Check max limit
    if (favorites.length >= MAX_FAVORITES) {
      throw new Error(`Maximum ${MAX_FAVORITES} favorites allowed`)
    }
    
    const newFavorites = [favorite, ...favorites]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites))
    
    return newFavorites
  } catch (error) {
    console.error("Error adding favorite:", error)
    throw error
  }
}

export const removeFavorite = (favoriteId) => {
  try {
    const favorites = getFavorites()
    const newFavorites = favorites.filter(f => f.id !== favoriteId)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites))
    
    return newFavorites
  } catch (error) {
    console.error("Error removing favorite:", error)
    throw error
  }
}

export const clearAllFavorites = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return []
  } catch (error) {
    console.error("Error clearing favorites:", error)
    throw error
  }
}