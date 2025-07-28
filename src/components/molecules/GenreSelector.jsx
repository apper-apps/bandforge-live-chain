import { cn } from "@/utils/cn"
import Button from "@/components/atoms/Button"

const GenreSelector = ({ selectedGenre, onGenreChange, className }) => {
  const genres = [
    { id: "all", name: "All Genres", color: "primary" },
    { id: "rock", name: "Rock", color: "error" },
    { id: "metal", name: "Metal", color: "secondary" },
    { id: "indie", name: "Indie", color: "accent" },
    { id: "pop", name: "Pop", color: "info" },
    { id: "electronic", name: "Electronic", color: "success" },
    { id: "jazz", name: "Jazz", color: "warning" },
    { id: "punk", name: "Punk", color: "primary" },
    { id: "folk", name: "Folk", color: "secondary" }
  ]

  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-lg font-semibold text-white/90">Choose Your Genre</h3>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Button
            key={genre.id}
            variant={selectedGenre === genre.id ? "primary" : "secondary"}
            size="sm"
            onClick={() => onGenreChange(genre.id)}
            className={cn(
              "transition-all duration-200",
              selectedGenre === genre.id && "scale-105"
            )}
          >
            {genre.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default GenreSelector