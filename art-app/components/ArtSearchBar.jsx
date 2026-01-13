"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./styles/ArtSearchBar.module.css";

export function ArtSearchBar() {
  const [prompt, setPrompt] = useState("");

  const handleExplore = () => {
    if (prompt.trim()) {
      console.log("Exploring art for:", prompt);
      // TODO: Navigate to 3D gallery room with prompt
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleExplore();
    }
  };

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchGlow} />

          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} />

            <input
              type="text"
              placeholder="Try 'Van Gogh', 'Renaissance', or 'Abstract Art'..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.searchInput}
            />

            <button
              onClick={handleExplore}
              disabled={!prompt.trim()}
              className={styles.exploreButton}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className={styles.suggestionsContainer}>
          <span className={styles.suggestionLabel}>Popular:</span>
          {["Monet", "Picasso", "Modern Art", "Sculptures"].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setPrompt(suggestion)}
              className={styles.suggestionButton}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}