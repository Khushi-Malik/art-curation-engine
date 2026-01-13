"use client";

import { ArtSearchBar } from "./ArtSearchBar.jsx";
import { Paintbrush } from "lucide-react";
import styles from "./styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>
        <Paintbrush className={styles.paintBrushIcon} />
        Welcome to the Art Curation Engine
      </h1>
      <div>
        <ArtSearchBar />
      </div>
    </div>
  );
}
