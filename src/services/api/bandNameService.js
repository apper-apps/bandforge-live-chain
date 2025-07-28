import bandNamesData from "@/services/mockData/bandNames.json"

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const generateRandomName = () => {
  const patterns = [
    () => `${getRandomItem(bandNamesData.adjectives)} ${getRandomItem(bandNamesData.nouns)}`,
    () => `The ${getRandomItem(bandNamesData.nouns)}`,
    () => `${getRandomItem(bandNamesData.nouns)} ${getRandomItem(bandNamesData.adjectives)}`,
    () => getRandomItem(bandNamesData.combinations).join(" "),
    () => `${getRandomItem(bandNamesData.adjectives)} ${getRandomItem(bandNamesData.adjectives)}`,
    () => `${getRandomItem(bandNamesData.nouns)} & ${getRandomItem(bandNamesData.nouns)}`,
  ]
  
  const pattern = getRandomItem(patterns)
  return pattern()
}

const generateGenreBasedName = (genre) => {
  const genreMap = {
    rock: bandNamesData.rockWords,
    metal: bandNamesData.metalWords,
    indie: bandNamesData.indieWords,
    pop: bandNamesData.popWords,
    electronic: bandNamesData.electronicWords,
    jazz: bandNamesData.jazzWords,
    punk: bandNamesData.punkWords,
    folk: bandNamesData.folkWords
  }
  
  const genreWords = genreMap[genre] || bandNamesData.adjectives
  const patterns = [
    () => `${getRandomItem(genreWords)} ${getRandomItem(bandNamesData.nouns)}`,
    () => `The ${getRandomItem(genreWords)}`,
    () => `${getRandomItem(bandNamesData.adjectives)} ${getRandomItem(genreWords)}`,
    () => `${getRandomItem(genreWords)} ${getRandomItem(genreWords)}`,
  ]
  
  const pattern = getRandomItem(patterns)
  return pattern()
}

const generateWordCombination = () => {
  const word1 = getRandomItem(bandNamesData.adjectives)
  const word2 = getRandomItem(bandNamesData.nouns)
  const word3 = getRandomItem(bandNamesData.adjectives)
  
  const patterns = [
    () => `${word1}${word2}`,
    () => `${word1} ${word2} ${word3}`,
    () => `${word2}${word1}`,
    () => `${word1} & The ${word2}`,
  ]
  
  const pattern = getRandomItem(patterns)
  return pattern()
}

const generateAdjectiveNoun = () => {
  const adjective = getRandomItem(bandNamesData.adjectives)
  const noun = getRandomItem(bandNamesData.nouns)
  
  const patterns = [
    () => `${adjective} ${noun}`,
    () => `The ${adjective} ${noun}`,
    () => `${adjective} ${noun}s`,
    () => `${adjective} ${noun} Society`,
  ]
  
  const pattern = getRandomItem(patterns)
  return pattern()
}

const generateThemedName = () => {
  const themes = Object.keys(bandNamesData.themes)
  const selectedTheme = getRandomItem(themes)
  const themeWords = bandNamesData.themes[selectedTheme]
  
  const patterns = [
    () => getRandomItem(themeWords),
    () => `The ${getRandomItem(themeWords)}`,
    () => `${getRandomItem(themeWords)} ${getRandomItem(bandNamesData.adjectives)}`,
    () => `${getRandomItem(bandNamesData.adjectives)} ${getRandomItem(themeWords)}`,
  ]
  
  const pattern = getRandomItem(patterns)
  return pattern()
}

export const generateBandName = (genre = "all", mode = "random") => {
  const delay = () => new Promise(resolve => setTimeout(resolve, 300))
  
  let name = ""
  let generationType = ""
  
  switch (mode) {
    case "genre": {
      if (genre === "all") {
        name = generateRandomName()
        generationType = "Random Mix"
      } else {
        name = generateGenreBasedName(genre)
        generationType = `${capitalizeWord(genre)} Style`
      }
      break
    }
    case "combination": {
      name = generateWordCombination()
      generationType = "Word Fusion"
      break
    }
    case "adjective": {
      name = generateAdjectiveNoun()
      generationType = "Classic Formula"
      break
    }
    case "themed": {
      name = generateThemedName()
      generationType = "Themed"
      break
    }
    default: {
      name = generateRandomName()
      generationType = "Pure Chaos"
      break
    }
  }
  
  return {
    id: Date.now().toString(),
    name: name.trim(),
    genre: genre === "all" ? "Mixed" : capitalizeWord(genre),
    generationType,
    timestamp: Date.now()
  }
}