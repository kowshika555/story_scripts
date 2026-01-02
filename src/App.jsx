import React, { useState, useEffect } from 'react';
import { STORIES, FLAT_STORIES } from './data/stories.js';
import DifficultyScreen from './components/DifficultyScreen.jsx';
import StoriesListScreen from './components/StoriesListScreen.jsx';
import StoryScreen from './components/StoryScreen.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import ResultScreen from './components/ResultScreen.jsx';
import AnimalCharacter from './components/AnimalCharacter.jsx';

// Safe Storage Utility to handle environments where localStorage is blocked
const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn("localStorage access denied:", e);
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("localStorage access denied:", e);
    }
  }
};

function App() {
  const [view, setView] = useState('difficulty'); // difficulty, stories_list, story, quiz, result
  const [currentStory, setCurrentStory] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(safeStorage.getItem('story_scripts_high_score') || '0');
  });
  const [animalMood, setAnimalMood] = useState('neutral');
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Function to get the next story for a difficulty level
  const getNextStory = (level) => {
    const key = `last_story_index_${level}`;
    const lastIndex = parseInt(safeStorage.getItem(key) || '-1');
    const storiesArray = STORIES[level];

    if (!storiesArray || storiesArray.length === 0) return null;

    const nextIndex = (lastIndex + 1) % storiesArray.length;
    safeStorage.setItem(key, nextIndex.toString());
    return storiesArray[nextIndex];
  };

  const handleDifficultySelect = (level) => {
    const nextStory = getNextStory(level);
    if (nextStory) {
      setCurrentStory(nextStory);
      setView('story');
      setAnimalMood('neutral');
    }
  };

  const handleStorySelect = (story) => {
    setCurrentStory(story);
    setView('story');
    setAnimalMood('neutral');
  };

  const handleShowLibrary = () => {
    setView('stories_list');
  };

  const handleStartQuiz = () => {
    setView('quiz');
    setScore(0);
    setAnimalMood('neutral');
    setIsSpeaking(false); // Stop speaking when quiz starts
  };

  const handleAnswerAttempt = (isCorrect) => {
    setAnimalMood(isCorrect ? 'happy' : 'sad');
    // Reset to neutral after a short delay
    setTimeout(() => {
      setAnimalMood('neutral');
    }, 2000);
  };

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    const newHighScore = highScore + finalScore;
    setHighScore(newHighScore);
    safeStorage.setItem('story_scripts_high_score', newHighScore.toString());

    setView('result');
    setAnimalMood(finalScore >= 7 ? 'happy' : 'neutral');
    setIsSpeaking(false);
  };

  const handleRestart = () => {
    setView('difficulty');
    setCurrentStory(null);
    setScore(0);
    setAnimalMood('neutral');
    setIsSpeaking(false);
  };

  const handleHome = () => {
    setView('difficulty');
    setCurrentStory(null);
    setScore(0);
    setAnimalMood('neutral');
    setIsSpeaking(false);
  };

  return (
    <div className="app-container">
      {view === 'difficulty' && (
        <DifficultyScreen
          onSelect={handleDifficultySelect}
          onShowLibrary={handleShowLibrary}
          totalScore={highScore}
        />
      )}

      {view === 'stories_list' && (
        <StoriesListScreen onSelect={handleStorySelect} onBack={() => setView('difficulty')} />
      )}

      {view === 'story' && currentStory && (
        <StoryScreen
          story={currentStory}
          onStartQuiz={handleStartQuiz}
          setIsSpeaking={setIsSpeaking}
          onBack={() => setView('difficulty')}
        />
      )}

      {view === 'quiz' && currentStory && (
        <QuizScreen
          questions={currentStory.questions}
          onComplete={handleQuizComplete}
          onAnswerAttempt={handleAnswerAttempt}
          onBack={() => setView('story')}
        />
      )}

      {view === 'result' && (
        <ResultScreen
          score={score}
          total={currentStory ? currentStory.questions.length : 10}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      )}

      <AnimalCharacter mood={animalMood} isSpeaking={isSpeaking} />
    </div>
  );
}

export default App;
