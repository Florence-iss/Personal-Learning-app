import React, { useState, useEffect } from "react";
import { LESSONS, UI_TRANSLATIONS } from "./data/lessons";
import ListeningPractice from "./components/ListeningPractice";
import SpeakingPractice from "./components/SpeakingPractice";
import ReactConfetti from "canvas-confetti"; // Let's make it super premium with standard confetti if we can, or we can use native triggers
import ReadingPractice from "./components/ReadingPractice";
import WritingPractice from "./components/WritingPractice";
import { BookOpen, Mic, Volume2, Edit3, Award, Globe, HelpCircle, Flame, Star, Check, Lock, ChevronRight } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en"); // "en" or "mm"
  const [activeLevel, setActiveLevel] = useState("beginner"); // "beginner", "intermediate", "advanced"
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [activeExercise, setActiveExercise] = useState(null); // "listening", "speaking", "reading", "writing"
  const [progress, setProgress] = useState({});

  const translations = UI_TRANSLATIONS[lang];
  const lessons = LESSONS[activeLevel] || [];
  const currentLesson = lessons[activeLessonIdx] || null;

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

  // Reset selected lesson index when level changes
  useEffect(() => {
    setActiveLessonIdx(0);
  }, [activeLevel]);

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
    if (!currentLesson) return;
    const progressKey = `${currentLesson.id}_${type}`;
    const newProgress = {
      ...progress,
      [progressKey]: true,
    };
    setProgress(newProgress);
    localStorage.setItem("english_burmese_learner_progress", JSON.stringify(newProgress));

    // Throw confetti on complete for premium feel!
    try {
      if (typeof window !== "undefined") {
        const duration = 2 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 9999 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 40 * (timeLeft / duration);
          // Confetti left and right
          window.confetti?.({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          window.confetti?.({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }
    } catch (e) {
      console.warn("Confetti effect failed silently", e);
    }
  };

  // Helper functions for learning path locks & completion
  const isSkillCompleted = (lessonId, skill) => {
    return !!progress[`${lessonId}_${skill}`];
  };

  const getLessonCompletionCount = (lessonId) => {
    return ["listening", "speaking", "reading", "writing"].filter(s => isSkillCompleted(lessonId, s)).length;
  };

  const isLessonCompleted = (lessonId) => {
    return getLessonCompletionCount(lessonId) === 4;
  };

  const isLessonUnlocked = (idx) => {
    if (idx === 0) return true;
    const prevLesson = lessons[idx - 1];
    if (!prevLesson) return false;
    // Unlocked if previous lesson has at least 1 skill completed (encouraging milestone progression)
    return getLessonCompletionCount(prevLesson.id) > 0;
  };

  // Calculate overall progress percentage
  const calculateTotalProgress = () => {
    let totalSkillsCount = 0;
    let completedSkillsCount = 0;
    
    Object.keys(LESSONS).forEach(lvl => {
      LESSONS[lvl].forEach(les => {
        ["listening", "speaking", "reading", "writing"].forEach(skill => {
          totalSkillsCount++;
          if (progress[`${les.id}_${skill}`]) {
            completedSkillsCount++;
          }
        });
      });
    });

    return Math.round((completedSkillsCount / Math.max(totalSkillsCount, 1)) * 100);
  };

  const overallProgressVal = calculateTotalProgress();

  // Switch to active practice view
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

      {/* Main Grid: Roadmap + Lesson Content + Sidebar */}
      <div className="dashboard-grid">
        
        {/* Core Learning Roadmap & Skills */}
        <main style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* Section: Learning Path Roadmap */}
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: "700", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Award size={20} className="text-indigo" />
              {lang === "en" ? "Your Learning Roadmap" : "သင်ယူမှုလမ်းပြမြေပုံ"}
            </h2>

            <div className="roadmap-container">
              <div className="roadmap-line">
                <div 
                  className="roadmap-line-fill" 
                  style={{ 
                    width: `${((activeLessonIdx) / Math.max(lessons.length - 1, 1)) * 100}%` 
                  }}
                ></div>
              </div>
              
              {lessons.map((les, idx) => {
                const isUnlocked = isLessonUnlocked(idx);
                const isCompleted = isLessonCompleted(les.id);
                const isActive = activeLessonIdx === idx;
                
                let nodeClass = "roadmap-node";
                if (isActive) nodeClass += " active";
                else if (isCompleted) nodeClass += " completed";
                else if (isUnlocked) nodeClass += " unlocked";
                else nodeClass += " locked";

                return (
                  <div 
                    key={les.id} 
                    className={nodeClass}
                    onClick={() => isUnlocked && setActiveLessonIdx(idx)}
                    title={lang === "en" ? (isUnlocked ? `Step ${idx + 1}: ${les.title}` : "Locked") : (isUnlocked ? `အဆင့် ${idx + 1}: ${les.titleMM}` : "သော့ခတ်ထားပါသည်")}
                  >
                    <div className="roadmap-circle">
                      {isCompleted ? (
                        <Check size={18} />
                      ) : !isUnlocked ? (
                        <Lock size={16} />
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <span className="roadmap-label">
                      {lang === "en" ? `Step ${idx + 1}` : `အဆင့် ${idx + 1}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Lesson Card Details */}
          {currentLesson && (
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: "700" }}>
                  Selected Step {activeLessonIdx + 1}
                </span>
                <span style={{ fontSize: "0.8rem", background: "hsla(263, 70%, 50%, 0.15)", color: "var(--primary-end)", padding: "0.25rem 0.6rem", borderRadius: "12px", fontWeight: "600" }}>
                  {getLessonCompletionCount(currentLesson.id)} / 4 Skills Done
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "800", marginTop: "0.25rem" }}>
                {currentLesson.title}
              </h2>
              <p lang="my" style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
                {currentLesson.titleMM}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.3rem" }}>
                {lang === "en" ? currentLesson.description : currentLesson.descriptionMM}
              </p>
            </div>
          )}

          {/* 4 Skills Grid for Selected Lesson */}
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
                  {isSkillCompleted(currentLesson.id, "listening") ? (
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
                  {isSkillCompleted(currentLesson.id, "speaking") ? (
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
                  {isSkillCompleted(currentLesson.id, "reading") ? (
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
                  {isSkillCompleted(currentLesson.id, "writing") ? (
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
                <span>Beginner Course Path:</span>
                <span>
                  {LESSONS.beginner.filter(l => isLessonCompleted(l.id)).length} / 5 Steps
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Intermediate Course Path:</span>
                <span>
                  {LESSONS.intermediate.filter(l => isLessonCompleted(l.id)).length} / 1 Step
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Advanced Course Path:</span>
                <span>
                  {LESSONS.advanced.filter(l => isLessonCompleted(l.id)).length} / 1 Step
                </span>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
