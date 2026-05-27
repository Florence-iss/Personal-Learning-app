import React, { useState, useEffect } from "react";
import { LESSONS, UI_TRANSLATIONS } from "./data/lessons";
import ListeningPractice from "./components/ListeningPractice";
import SpeakingPractice from "./components/SpeakingPractice";
import ReadingPractice from "./components/ReadingPractice";
import WritingPractice from "./components/WritingPractice";
import { BookOpen, Mic, Volume2, Edit3, Award, Globe, HelpCircle, Flame, Star, Check } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en"); // "en" or "mm"
  const [activeLevel, setActiveLevel] = useState("beginner"); // "beginner", "intermediate", "advanced"
  const [activeExercise, setActiveExercise] = useState(null); // "listening", "speaking", "reading", "writing"
  const [progress, setProgress] = useState({
    listening: 0,
    speaking: 0,
    reading: 0,
    writing: 0,
  });

  const translations = UI_TRANSLATIONS[lang];
  const lessons = LESSONS[activeLevel] || [];
  // Use first lesson in array for demo; can scale to many lessons
  const currentLesson = lessons[0] || null;

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("english_burmese_learner_progress");
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (err) {
        console.error("Error loading progress: ", err);
      }
    }
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === "en" ? "mm" : "en"));
  };

  const handleSpeakWord = (word) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleCompleteExercise = (type, score) => {
    // Save progress in state and localStorage
    // For simplicity, progress represents completed status (1 = complete, 0 = incomplete)
    const newProgress = {
      ...progress,
      [`${activeLevel}_${type}`]: true,
    };
    setProgress(newProgress);
    localStorage.setItem("english_burmese_learner_progress", JSON.stringify(newProgress));
  };

  // Calculate overall progress percentage
  const calculateTotalProgress = () => {
    const totalPossible = 12; // 3 levels * 4 skills
    const keys = [
      "beginner_listening", "beginner_speaking", "beginner_reading", "beginner_writing",
      "intermediate_listening", "intermediate_speaking", "intermediate_reading", "intermediate_writing",
      "advanced_listening", "advanced_speaking", "advanced_reading", "advanced_writing",
    ];
    let completedCount = 0;
    keys.forEach((key) => {
      if (progress[key]) completedCount++;
    });
    return Math.round((completedCount / totalPossible) * 100);
  };

  const overallProgressVal = calculateTotalProgress();

  // Switch to correct practice component
  const renderActivePractice = () => {
    if (!currentLesson) return null;

    switch (activeExercise) {
      case "listening":
        return (
          <ListeningPractice
            lesson={currentLesson}
            translations={translations}
            onBack={() => setActiveExercise(null)}
            onCompleteExercise={(type, score) => handleCompleteExercise(type, score)}
          />
        );
      case "speaking":
        return (
          <SpeakingPractice
            lesson={currentLesson}
            translations={translations}
            onBack={() => setActiveExercise(null)}
            onCompleteExercise={(type, score) => handleCompleteExercise(type, score)}
          />
        );
      case "reading":
        return (
          <ReadingPractice
            lesson={currentLesson}
            translations={translations}
            onBack={() => setActiveExercise(null)}
            onCompleteExercise={(type, score) => handleCompleteExercise(type, score)}
          />
        );
      case "writing":
        return (
          <WritingPractice
            lesson={currentLesson}
            translations={translations}
            onBack={() => setActiveExercise(null)}
            onCompleteExercise={(type, score) => handleCompleteExercise(type, score)}
          />
        );
      default:
        return null;
    }
  };

  if (activeExercise) {
    return <div className="app-container">{renderActivePractice()}</div>;
  }

  return (
    <div className="app-container">
      {/* Header Panel */}
      <header>
        <div className="brand-section">
          <h1>
            <Flame className="text-indigo animate-pulse" size={32} />
            {translations.title}
          </h1>
          <p>{translations.subtitle}</p>
        </div>

        <button className="lang-toggle-btn" onClick={handleToggleLang}>
          <Globe size={16} />
          {translations.toggleLang}
        </button>
      </header>

      {/* Main Grid: Content + Sidebar */}
      <div className="dashboard-grid">
        
        {/* Core Skills & Lessons Selection */}
        <main style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          
          {/* Active Lesson Brief */}
          {currentLesson && (
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: "700" }}>
                Active Topic
              </span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "800" }}>
                {currentLesson.title}
              </h2>
              <p lang="my" style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
                {currentLesson.titleMM}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                {lang === "en" ? currentLesson.description : currentLesson.descriptionMM}
              </p>
            </div>
          )}

          {/* 4 Skills Grid */}
          <div className="skills-section">
            <h2>
              <Star size={20} className="text-indigo" />
              {translations.skills}
            </h2>
            
            <div className="skills-grid">
              
              {/* Listening Card */}
              <div 
                className="glass-card skill-card"
                onClick={() => setActiveExercise("listening")}
              >
                <div className="skill-card-icon">
                  <Volume2 size={24} />
                </div>
                <h3>{translations.listening}</h3>
                <p>{translations.listeningDesc}</p>
                <div className="skill-card-footer">
                  {progress[`${activeLevel}_listening`] ? (
                    <span style={{ color: "var(--success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Check size={14} /> {translations.completed}
                    </span>
                  ) : (
                    <span>Practice &rarr;</span>
                  )}
                </div>
              </div>

              {/* Speaking Card */}
              <div 
                className="glass-card skill-card"
                onClick={() => setActiveExercise("speaking")}
              >
                <div className="skill-card-icon">
                  <Mic size={24} />
                </div>
                <h3>{translations.speaking}</h3>
                <p>{translations.speakingDesc}</p>
                <div className="skill-card-footer">
                  {progress[`${activeLevel}_speaking`] ? (
                    <span style={{ color: "var(--success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Check size={14} /> {translations.completed}
                    </span>
                  ) : (
                    <span>Practice &rarr;</span>
                  )}
                </div>
              </div>

              {/* Reading Card */}
              <div 
                className="glass-card skill-card"
                onClick={() => setActiveExercise("reading")}
              >
                <div className="skill-card-icon">
                  <BookOpen size={24} />
                </div>
                <h3>{translations.reading}</h3>
                <p>{translations.readingDesc}</p>
                <div className="skill-card-footer">
                  {progress[`${activeLevel}_reading`] ? (
                    <span style={{ color: "var(--success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Check size={14} /> {translations.completed}
                    </span>
                  ) : (
                    <span>Practice &rarr;</span>
                  )}
                </div>
              </div>

              {/* Writing Card */}
              <div 
                className="glass-card skill-card"
                onClick={() => setActiveExercise("writing")}
              >
                <div className="skill-card-icon">
                  <Edit3 size={24} />
                </div>
                <h3>{translations.writing}</h3>
                <p>{translations.writingDesc}</p>
                <div className="skill-card-footer">
                  {progress[`${activeLevel}_writing`] ? (
                    <span style={{ color: "var(--success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Check size={14} /> {translations.completed}
                    </span>
                  ) : (
                    <span>Practice &rarr;</span>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Vocabulary Helper */}
          {currentLesson && currentLesson.vocabulary && (
            <div className="vocab-box">
              <h2 className="vocab-box-title">
                <Award size={20} className="text-indigo" />
                {translations.vocabulary} ({currentLesson.vocabulary.length})
              </h2>
              
              <div className="vocab-grid">
                {currentLesson.vocabulary.map((vocab, index) => (
                  <div key={index} className="vocab-card">
                    <div className="vocab-header">
                      <span className="vocab-word">{vocab.word}</span>
                      <button 
                        className="lang-toggle-btn"
                        onClick={() => handleSpeakWord(vocab.word)}
                        style={{ padding: "0.3rem 0.5rem", borderRadius: "50%", minWidth: "30px", minHeight: "30px", justifyContent: "center" }}
                        title="Pronounce word"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    
                    <div className="vocab-ipa">{vocab.ipa}</div>
                    
                    <div className="vocab-mean" lang="my">
                      {vocab.mm}
                    </div>
                    
                    <div className="vocab-example">
                      <strong>Ex:</strong> {vocab.example}
                      <p lang="my" style={{ opacity: 0.85, fontSize: "0.8rem", marginTop: "0.2rem" }}>
                        ({vocab.exampleMM})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        {/* Sidebar Controls */}
        <aside className="sidebar">
          
          {/* Level Selector */}
          <div className="glass-card">
            <h3 className="level-selector-title">{translations.selectLevel}</h3>
            
            <div className="level-buttons">
              <button 
                className={`level-btn ${activeLevel === "beginner" ? "active" : ""}`}
                onClick={() => setActiveLevel("beginner")}
              >
                <span>{translations.beginner}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>A1/A2</span>
              </button>
              
              <button 
                className={`level-btn ${activeLevel === "intermediate" ? "active" : ""}`}
                onClick={() => setActiveLevel("intermediate")}
              >
                <span>{translations.intermediate}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>B1/B2</span>
              </button>
              
              <button 
                className={`level-btn ${activeLevel === "advanced" ? "active" : ""}`}
                onClick={() => setActiveLevel("advanced")}
              >
                <span>{translations.advanced}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>C1/C2</span>
              </button>
            </div>
          </div>

          {/* Progress Tracker Card */}
          <div className="glass-card progress-box">
            <div className="progress-header">
              <span>{translations.progress}</span>
              <span style={{ color: "var(--primary-end)" }}>{overallProgressVal}%</span>
            </div>
            
            <div className="progress-bar-bg" style={{ marginBottom: "1.25rem" }}>
              <div 
                className="progress-bar-fill" 
                style={{ width: `${overallProgressVal}%` }}
              ></div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Beginner Level Progress:</span>
                <span>
                  {["listening", "speaking", "reading", "writing"].filter(s => progress[`beginner_${s}`]).length} / 4
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Intermediate Level Progress:</span>
                <span>
                  {["listening", "speaking", "reading", "writing"].filter(s => progress[`intermediate_${s}`]).length} / 4
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Advanced Level Progress:</span>
                <span>
                  {["listening", "speaking", "reading", "writing"].filter(s => progress[`advanced_${s}`]).length} / 4
                </span>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
