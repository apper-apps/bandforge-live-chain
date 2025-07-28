import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import BandNameDisplay from "@/components/organisms/BandNameDisplay";
import FavoritesPanel from "@/components/organisms/FavoritesPanel";
import GenreSelector from "@/components/molecules/GenreSelector";
import GenerationModeSelector from "@/components/molecules/GenerationModeSelector";
import { generateBandName } from "@/services/api/bandNameService";
import { addFavorite, getFavorites, removeFavorite } from "@/services/api/favoritesService";

const BandGenerator = () => {
  const [currentBandName, setCurrentBandName] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedMode, setSelectedMode] = useState("random")
  const [favorites, setFavorites] = useState([])

  // Load favorites on mount
  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  // Generate initial band name
  useEffect(() => {
    handleGenerate()
  }, [])

  const handleGenerate = async () => {
    setIsGenerating(true)
    
    try {
      // Add realistic delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const newBandName = generateBandName(selectedGenre, selectedMode)
      setCurrentBandName(newBandName)
    } catch (error) {
      console.error("Generation failed:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleAddFavorite = (bandName) => {
    if (favorites.length >= 20) {
      toast.error("Maximum 20 favorites allowed!")
      return
    }

    const favorite = {
      id: Date.now().toString(),
      name: bandName.name,
      genre: bandName.genre === "all" ? "Mixed" : bandName.genre,
      savedAt: Date.now()
    }

    addFavorite(favorite)
    setFavorites(getFavorites())
  }

  const handleRemoveFavorite = (favoriteId) => {
    removeFavorite(favoriteId)
    setFavorites(getFavorites())
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Band Name Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BandNameDisplay
                bandName={currentBandName}
                isGenerating={isGenerating}
                onGenerate={handleGenerate}
                onFavorite={handleAddFavorite}
              />
            </motion.div>

            {/* Genre Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-xl p-6"
            >
              <GenreSelector
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
              />
            </motion.div>

            {/* Generation Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-xl p-6"
            >
              <GenerationModeSelector
                selectedMode={selectedMode}
                onModeChange={setSelectedMode}
              />
            </motion.div>
          </div>

          {/* Favorites Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="sticky top-6"
            >
              <FavoritesPanel
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BandGenerator