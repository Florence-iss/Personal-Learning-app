import React, { useState, useEffect } from "react";
import { LESSONS, UI_TRANSLATIONS } from "./data/lessons";
import ListeningPractice from "./components/ListeningPractice";
import SpeakingPractice from "./components/SpeakingPractice";
import ReadingPractice from "./components/ReadingPractice";
import WritingPractice from "./components/WritingPractice";
import { 
  BookOpen, Mic, Volume2, Edit3, Award, Globe, 
  Flame, Star, Check, Lock, StarOff, 
  X, ChevronLeft, ChevronRight, Play, Eye,
  Sun, Moon
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en"); // "en" or "mm"
  const [activeLevel, setActiveLevel] = useState("beginner"); // "beginner", "intermediate", "advanced", "grammar"
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const [activeExercise, setActiveExercise] = useState(null); // "listening", "speaking", "reading", "writing"
  const [progress, setProgress] = useState({});

  // Streak & Gamification State
  const [streak, setStreak] = useState(0);
  const [lastPracticeDate, setLastPracticeDate] = useState("");
  const [starredWords, setStarredWords] = useState([]);
  
  // Flashcard Deck State
  const [activeFlashcardIdx, setActiveFlashcardIdx] = useState(null);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  // Theme State (default to "light")
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("english_learner_theme") || "light";
  });

  const translations = UI_TRANSLATIONS[lang];
  const lessons = LESSONS[activeLevel] || [];
  const currentLesson = lessons[activeLessonIdx] || null;

  // Load progress, streak, and starred words from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("english_burmese_learner_progress");
    const savedStreak = localStorage.getItem("english_learner_streak");
    const savedDate = localStorage.getItem("english_learner_last_practice_date");
    const savedWords = localStorage.getItem("english_learner_starred_words");

    if (savedProgress) {
      try { setProgress(JSON.parse(savedProgress)); } catch (e) {}
    }
    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10));
    }
    if (savedDate) {
      setLastPracticeDate(savedDate);
    }
    if (savedWords) {
      try { setStarredWords(JSON.parse(savedWords)); } catch (e) {}
    }
  }, []);

  // Reset selected lesson index when level changes
  useEffect(() => {
    setActiveLessonIdx(0);
  }, [activeLevel]);

  // Synchronize theme with document attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("english_learner_theme", theme);
  }, [theme]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === "en" ? "mm" : "en"));
  };

  const handleSpeakWord = (word) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  // Streak updates on exercise completion
  const handleCompleteExercise = (type, score) => {
    if (!currentLesson) return;
    const progressKey = `${currentLesson.id}_${type}`;
    const newProgress = {
      ...progress,
      [progressKey]: true,
    };
    setProgress(newProgress);
    localStorage.setItem("english_burmese_learner_progress", JSON.stringify(newProgress));

    // Update Streak
    const today = new Date().toDateString();
    let newStreak = streak;

    if (lastPracticeDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();

      if (lastPracticeDate === yesterdayStr) {
        newStreak = streak + 1;
      } else {
        newStreak = 1; // Reset or start new streak
      }

      setStreak(newStreak);
      setLastPracticeDate(today);
      localStorage.setItem("english_learner_streak", newStreak.toString());
      localStorage.setItem("english_learner_last_practice_date", today);
    }

    // Trigger canvas confetti if available in window scope
    try {
      window.confetti?.({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  // Starred dictionary utilities
  const handleToggleStarWord = (wordObj) => {
    let updated;
    const isAlreadyStarred = starredWords.some(w => w.word === wordObj.word);
    
    if (isAlreadyStarred) {
      updated = starredWords.filter(w => w.word !== wordObj.word);
    } else {
      updated = [...starredWords, wordObj];
    }
    setStarredWords(updated);
    localStorage.setItem("english_learner_starred_words", JSON.stringify(updated));
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

  // Dynamic badge checks
  const getBadges = () => {
    const beginnerCompleted = LESSONS.beginner.every(l => isLessonCompleted(l.id));
    const grammarCompleted = LESSONS.grammar && LESSONS.grammar.every(l => isLessonCompleted(l.id));
    const speakingCompleted = Object.keys(LESSONS).some(lvl => 
      LESSONS[lvl].some(l => isSkillCompleted(l.id, "speaking"))
    );

    return [
      { id: "streak", name: "Streak Starter", nameMM: "လေ့လာမှု စတင်သူ", desc: "Have a streak of 1 or more days", descMM: "လေ့လာမှု နေ့စဉ်ရက် ဆက်တိုက်ရှိခြင်း", active: streak >= 1 },
      { id: "collector", name: "Word Collector", nameMM: "ဝေါဟာရ စုဆောင်းသူ", desc: "Star 3 or more vocabulary words", descMM: "ဝေါဟာရ ၃ ခုနှင့်အထက် စုဆောင်းခြင်း", active: starredWords.length >= 3 },
      { id: "speaker", name: "Orator", nameMM: "စကားပြော ကောင်းသူ", desc: "Complete any Speaking practice", descMM: "ပြောဆိုခြင်း လေ့ကျင့်ခန်း ပြီးမြောက်ခြင်း", active: speakingCompleted },
      { id: "beginner", name: "Beginner Graduate", nameMM: "အခြေခံအဆင့် ပြီးမြောက်သူ", desc: "Complete all Beginner lessons", descMM: "အခြေခံအဆင့် သင်ခန်းစာအားလုံး ပြီးခြင်း", active: beginnerCompleted },
      { id: "grammar", name: "Grammar Master", nameMM: "သဒ္ဒါကျွမ်းကျင်သူ", desc: "Complete all Grammar & Tenses lessons", descMM: "သဒ္ဒါနှင့် ကာလများ သင်ခန်းစာအားလုံး ပြီးခြင်း", active: grammarCompleted }
    ];
  };

  const badges = getBadges();

  // Active practice renderer
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

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {/* Streak Indicator */}
          <div className="streak-badge" title={lang === "en" ? `${streak} Days Streak` : `${streak} ရက် ဆက်တိုက်လေ့လာမှု`}>
            <Flame size={18} fill={streak > 0 ? "var(--warning)" : "transparent"} />
            <span>{streak} {lang === "en" ? "Days" : "ရက်"}</span>
          </div>

          <button 
            className="lang-toggle-btn" 
            onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
            title={lang === "en" ? "Toggle theme" : "သီးမ်ပြောင်းလဲရန်"}
            style={{ padding: "0.6rem", borderRadius: "50%", minWidth: "38px", minHeight: "38px", display: "inline-flex", justifyContent: "center", alignItems: "center" }}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button className="lang-toggle-btn" onClick={handleToggleLang}>
            <Globe size={16} />
            {translations.toggleLang}
          </button>
        </div>
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
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
                {currentLesson.vocabulary.map((vocab, index) => {
                  const isStarred = starredWords.some(w => w.word === vocab.word);
                  return (
                    <div key={index} className="vocab-card">
                      <div className="vocab-header">
                        <span className="vocab-word">{vocab.word}</span>
                        <div style={{ display: "flex", gap: "0.3rem" }}>
                          {/* Star Toggle Button */}
                          <button 
                            className={`save-star-btn ${isStarred ? "starred" : ""}`}
                            onClick={() => handleToggleStarWord(vocab)}
                            title={isStarred ? "Remove Bookmark" : "Bookmark Word"}
                          >
                            <Star size={16} fill={isStarred ? "var(--warning)" : "transparent"} />
                          </button>
                          
                          <button 
                            className="lang-toggle-btn"
                            onClick={() => handleSpeakWord(vocab.word)}
                            style={{ padding: "0.3rem 0.5rem", borderRadius: "50%", minWidth: "30px", minHeight: "30px", justifyContent: "center" }}
                            title="Pronounce word"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
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
                  );
                })}
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

              <button 
                className={`level-btn ${activeLevel === "grammar" ? "active" : ""}`}
                onClick={() => setActiveLevel("grammar")}
              >
                <span>{translations.grammarTenses}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>Grammar</span>
              </button>
            </div>
          </div>

          {/* Starred Words panel (My Dictionary) */}
          <div className="glass-card">
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Star size={16} className="text-indigo" fill="var(--warning)" />
              {lang === "en" ? "Starred Words" : "မှတ်သားထားသော စာလုံးများ"} ({starredWords.length})
            </h3>
            
            {starredWords.length > 0 ? (
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", maxHeight: "140px", overflowY: "auto", marginBottom: "1rem", padding: "0.25rem 0" }}>
                  {starredWords.map((vocab, index) => (
                    <span 
                      key={index} 
                      className="writing-answer-word"
                      onClick={() => handleSpeakWord(vocab.word)}
                      style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", display: "inline-flex", gap: "0.2rem", alignItems: "center" }}
                    >
                      {vocab.word}
                      <Volume2 size={10} />
                    </span>
                  ))}
                </div>
                <button 
                  className="btn-primary"
                  onClick={() => {
                    setActiveFlashcardIdx(0);
                    setFlashcardFlipped(false);
                  }}
                  style={{ width: "100%", padding: "0.6rem", fontSize: "0.85rem", justifyContent: "center" }}
                >
                  <Play size={14} /> Review Flashcards
                </button>
              </div>
            ) : (
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                {lang === "en" ? "Star vocabulary words in lessons to add them here." : "သင်ခန်းစာများရှိ ဝေါဟာရများအား စတားနှိပ်၍ ဤနေရာတွင် သိမ်းဆည်းပါ။"}
              </p>
            )}
          </div>

          {/* Gamification Achievements Box */}
          <div className="glass-card">
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.25rem" }}>
              {lang === "en" ? "Achievements" : "အောင်မြင်မှုဆုတံဆိပ်များ"}
            </h3>
            <div className="badges-grid">
              {badges.map((badge, idx) => (
                <div 
                  key={idx} 
                  className={`badge-item ${badge.active ? "unlocked" : ""}`}
                  title={lang === "en" ? badge.desc : badge.descMM}
                >
                  <div className="badge-icon-wrapper">
                    <Award size={24} />
                  </div>
                  <span className="badge-title-text">
                    {lang === "en" ? badge.name : badge.nameMM}
                  </span>
                </div>
              ))}
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
                <span>{lang === "en" ? "Beginner Course Path:" : "အခြေခံအဆင့် လမ်းကြောင်း:"}</span>
                <span>
                  {LESSONS.beginner.filter(l => isLessonCompleted(l.id)).length} / {LESSONS.beginner.length} Steps
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{lang === "en" ? "Intermediate Course Path:" : "အလယ်အလတ်အဆင့် လမ်းကြောင်း:"}</span>
                <span>
                  {LESSONS.intermediate.filter(l => isLessonCompleted(l.id)).length} / {LESSONS.intermediate.length} Steps
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{lang === "en" ? "Advanced Course Path:" : "အဆင့်မြင့်အဆင့် လမ်းကြောင်း:"}</span>
                <span>
                  {LESSONS.advanced.filter(l => isLessonCompleted(l.id)).length} / {LESSONS.advanced.length} Steps
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{lang === "en" ? "Grammar & Tenses Path:" : "သဒ္ဒါနှင့် ကာလများ လမ်းကြောင်း:"}</span>
                <span>
                  {LESSONS.grammar.filter(l => isLessonCompleted(l.id)).length} / {LESSONS.grammar.length} Steps
                </span>
              </div>
            </div>
          </div>

        </aside>

      </div>

      {/* 3D Flashcard Review Overlay Modal */}
      {activeFlashcardIdx !== null && starredWords.length > 0 && (
        <div className="flashcard-modal-backdrop">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
            
            {/* Control Header */}
            <div style={{ width: "100%", maxWidth: "420px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text-primary)" }}>
              <span style={{ fontWeight: "700" }}>
                Card {activeFlashcardIdx + 1} of {starredWords.length}
              </span>
              <button 
                className="lang-toggle-btn"
                onClick={() => setActiveFlashcardIdx(null)}
                style={{ padding: "0.4rem", borderRadius: "50%", minWidth: "32px", minHeight: "32px", justifyContent: "center" }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Flashcard Frame */}
            <div 
              className={`flashcard-container ${flashcardFlipped ? "flipped" : ""}`}
              onClick={() => setFlashcardFlipped(!flashcardFlipped)}
            >
              <div className="flashcard-inner">
                {/* Front Side */}
                <div className="flashcard-front">
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                    English Word
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <h2 style={{ fontSize: "2.8rem", fontWeight: "800", letterSpacing: "-0.02em" }}>
                      {starredWords[activeFlashcardIdx].word}
                    </h2>
                    <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                      {starredWords[activeFlashcardIdx].ipa}
                    </span>
                  </div>
                  <button 
                    className="lang-toggle-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeakWord(starredWords[activeFlashcardIdx].word);
                    }}
                  >
                    <Volume2 size={16} /> Pronounce
                  </button>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    💡 Tap card to flip and view Burmese meaning
                  </span>
                </div>

                {/* Back Side */}
                <div className="flashcard-back">
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary-end)" }}>
                    Burmese Translation
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%" }}>
                    <h3 lang="my" style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--text-primary)" }}>
                      {starredWords[activeFlashcardIdx].mm}
                    </h3>
                  </div>
                  <div style={{ width: "100%", padding: "1rem", borderTop: "1px dashed hsla(217, 30%, 30%, 0.3)", textAlign: "left", fontSize: "0.85rem" }}>
                    <strong style={{ color: "var(--primary-end)" }}>Ex:</strong> {starredWords[activeFlashcardIdx].example}
                    <p lang="my" style={{ opacity: 0.85, marginTop: "0.25rem", color: "var(--text-secondary)" }}>
                      ({starredWords[activeFlashcardIdx].exampleMM})
                    </p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    💡 Tap card to flip back to English
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div style={{ display: "flex", gap: "1.5rem", width: "100%", maxWidth: "420px", justifyContent: "center" }}>
              <button 
                className="btn-secondary"
                disabled={activeFlashcardIdx === 0}
                onClick={() => {
                  setActiveFlashcardIdx(prev => prev - 1);
                  setFlashcardFlipped(false);
                }}
                style={{ opacity: activeFlashcardIdx === 0 ? 0.5 : 1 }}
              >
                <ChevronLeft size={18} /> Prev
              </button>

              <button 
                className="btn-secondary"
                disabled={activeFlashcardIdx === starredWords.length - 1}
                onClick={() => {
                  setActiveFlashcardIdx(prev => prev + 1);
                  setFlashcardFlipped(false);
                }}
                style={{ opacity: activeFlashcardIdx === starredWords.length - 1 ? 0.5 : 1 }}
              >
                Next <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
