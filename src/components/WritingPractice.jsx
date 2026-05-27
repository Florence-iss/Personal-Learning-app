import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, X, RefreshCw } from "lucide-react";

export default function WritingPractice({ lesson, translations, onBack, onCompleteExercise }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scrambledWords, setScrambledWords] = useState([]);
  const [constructedSentence, setConstructedSentence] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const exercises = lesson.writing || [];
  const currentExercise = exercises[currentIdx];

  useEffect(() => {
    if (!currentExercise) return;
    
    // Reset states
    setConstructedSentence([]);
    setIsChecked(false);
    setIsCorrect(false);

    // Extract words from the question brackets or target sentence
    // Target syntax example in JSON: [name / is / my / Aung] -> "my name is Aung"
    // Let's parse the question bracket content
    const match = currentExercise.question.match(/\[(.*?)\]/);
    let words = [];
    if (match && match[1]) {
      words = match[1].split(/\s*\/\s*/).map(w => w.trim());
    } else {
      // Fallback: split the correct sentence and shuffle
      words = currentExercise.correct.split(/\s+/);
    }
    
    // Shuffle the words
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setScrambledWords(shuffled.map((word, index) => ({ id: index, word, used: false })));
  }, [currentIdx, currentExercise]);

  if (exercises.length === 0) {
    return (
      <div className="glass-card" style={{ textAlign: "center" }}>
        <p>No writing exercises available for this lesson.</p>
        <button className="btn-secondary" onClick={onBack} style={{ margin: "1rem auto 0" }}>
          <ArrowLeft size={16} /> {translations.backToDashboard}
        </button>
      </div>
    );
  }

  const handleWordClick = (wordObj) => {
    if (isChecked || wordObj.used) return;
    
    // Mark word as used
    setScrambledWords(prev => 
      prev.map(w => w.id === wordObj.id ? { ...w, used: true } : w)
    );
    
    // Add to answer
    setConstructedSentence(prev => [...prev, wordObj]);
  };

  const handleRemoveWord = (wordObj) => {
    if (isChecked) return;
    
    // Mark word as unused
    setScrambledWords(prev => 
      prev.map(w => w.id === wordObj.id ? { ...w, used: false } : w)
    );
    
    // Remove from answer
    setConstructedSentence(prev => prev.filter(w => w.id !== wordObj.id));
  };

  const handleReset = () => {
    if (isChecked) return;
    setConstructedSentence([]);
    setScrambledWords(prev => prev.map(w => ({ ...w, used: false })));
  };

  const handleCheckAnswer = () => {
    const finalSentence = constructedSentence.map(w => w.word).join(" ").toLowerCase().trim();
    const correctSentence = currentExercise.correct.toLowerCase().trim();

    const correct = finalSentence === correctSentence;
    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < exercises.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsDone(true);
      onCompleteExercise("writing", score);
    }
  };

  return (
    <div className="practice-container">
      <div className="practice-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> {translations.backToDashboard}
        </button>
        <span className="practice-title">
          {translations.writing} ({currentIdx + 1}/{exercises.length})
        </span>
      </div>

      {!isDone ? (
        <div className="glass-card">
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            {translations.writingTip}
          </p>

          {/* Burmese Translation Prompt */}
          <div className="target-sentence-container" style={{ borderStyle: "solid", borderWidth: "1px" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              {translations.myanmarTrans}
            </p>
            <div className="writing-prompt" lang="my">
              {currentExercise.prompt}
            </div>
          </div>

          {/* Output Display Area */}
          <div className="writing-answer-box">
            {constructedSentence.map((wordObj) => (
              <span 
                key={wordObj.id} 
                className="writing-answer-word"
                onClick={() => handleRemoveWord(wordObj)}
              >
                {wordObj.word}
                <X size={14} style={{ opacity: 0.8 }} />
              </span>
            ))}
            {constructedSentence.length === 0 && (
              <span style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.95rem" }}>
                Tap the words below to build the sentence...
              </span>
            )}
          </div>

          {/* Reset button */}
          {constructedSentence.length > 0 && !isChecked && (
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
              <button 
                className="btn-secondary" 
                onClick={handleReset}
                style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}
              >
                <RefreshCw size={12} /> Clear All
              </button>
            </div>
          )}

          {/* Scrambled input block pills */}
          <div className="scrambled-words-container">
            {scrambledWords.map((wordObj) => (
              <button
                key={wordObj.id}
                className={`scrambled-word-btn ${wordObj.used ? "used" : ""}`}
                onClick={() => handleWordClick(wordObj)}
                disabled={wordObj.used || isChecked}
              >
                {wordObj.word}
              </button>
            ))}
          </div>

          {isChecked && (
            <div className={`feedback-box ${isCorrect ? "feedback-success" : "feedback-error"}`}>
              {isCorrect ? (
                <>
                  <CheckCircle size={20} />
                  <span>{translations.correct} (+1 {translations.score})</span>
                </>
              ) : (
                <>
                  <XCircle size={20} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>{translations.incorrect}</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                      Correct: <strong>{currentExercise.correct}</strong>
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="action-btn-group">
            {!isChecked ? (
              <button 
                className="btn-primary" 
                onClick={handleCheckAnswer}
                disabled={constructedSentence.length === 0}
                style={{ opacity: constructedSentence.length === 0 ? 0.6 : 1 }}
              >
                {translations.checkBtn}
              </button>
            ) : (
              <button className="btn-primary" onClick={handleNext}>
                {translations.nextBtn} <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="glass-card level-completed-card">
          <div className="badge-icon-glow">
            <CheckCircle size={48} />
          </div>
          <h2 className="badge-title">{translations.successBadge}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            You completed the writing practice!
          </p>
          <div style={{ fontSize: "1.25rem", fontWeight: "700" }}>
            {translations.score}: <span style={{ color: "var(--primary-end)" }}>{score} / {exercises.length}</span>
          </div>
          <button className="btn-primary" onClick={onBack}>
            {translations.backToDashboard}
          </button>
        </div>
      )}
    </div>
  );
}
