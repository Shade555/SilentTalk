"use client";
import React, { useState } from 'react';
import styles from './Dictionary.module.css';

// Placeholder data
const words = [
  { word: 'CAN', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { word: 'CAT', video: 'https://www.w3schools.com/html/movie.mp4' },
  { word: 'DO', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { word: 'DOG', video: 'https://www.w3schools.com/html/movie.mp4' },
  { word: 'EAT', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

export default function Dictionary() {
  const [search, setSearch] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);

  const filteredWords = words.filter(w =>
    w.word.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search for a word</h2>
      <input
        className={styles.search}
        type="text"
        placeholder="Type a word..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className={styles.listSection}>
        <h3 className={styles.subtitle}>Most frequently searched words</h3>
        <div className={styles.wordGrid}>
          {filteredWords.map(w => (
            <div key={w.word} className={styles.wordCard}>
              <div className={styles.wordCardContent}>
                <span className={styles.wordText}>{w.word}</span>
                <button
                  className={styles.playBtn}
                  onClick={() => setSelectedWord(w)}
                  aria-label={`Play video for ${w.word}`}
                >
                  <span className={styles.playIcon}>▶</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedWord && (
        <div className={styles.videoModal}>
          <h4 className={styles.modalTitle}>{selectedWord.word}</h4>
          <video controls className={styles.video}>
            <source src={selectedWord.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className={styles.closeBtn} onClick={() => setSelectedWord(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
