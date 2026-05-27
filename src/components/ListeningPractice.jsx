import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, CheckCircle, XCircle, ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function ListeningPractice({ lesson, translations, onBack, onCompleteExercise }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [speed, setSpeed] = useState(1); // 1 = normal, 0.7 = slow
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const exercises = lesson.listening || [];
  const currentExercise = exercises[currentIdx];

  // Reset states when moving to next question
  useEffect(() => {
    setSelectedOption("");
    setIsChecked(false);
    setIsCorrect(false);
  }, [currentIdx]);

  if (exercises.length === 0) {
    return (
      <div className="glass-card" style={{ textAlign: "center" }}>
        <p>No listening exercises available for this lesson.</p>
        <button className="btn-secondary" onClick={onBack} style={{ margin: "1rem auto 0" }}>
          <ArrowLeft size={16} /> {translations.backToDashboard}
        </button>
      </div>
    );
  }

  const handleSpeak = () => {
    if (!currentExercise) return;
    
    // Stop any active speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(currentExercise.audioText);
    utterance.lang = "en-US";
    utterance.rate = speed;
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    
    const correct = selectedOption === currentExercise.answer;
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
      onCompleteExercise("listening", score);
    }
  };

  return (
    <div className="practice-container">
      <div className="practice-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> {translations.backToDashboard}
        </button>
        <span className="practice-title">
          {translations.listening} ({currentIdx + 1}/{exercises.length})
        </span>
      </div>

      {!isDone ? (
        <div className="glass-card">
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
            {translations.listeningTip}
          </p>

          <div className="target-sentence-container">
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}>
              <button 
                className="btn-primary" 
                onClick={handleSpeak}
                style={{ padding: "1.25rem 2rem", fontSize: "1.1rem" }}
              >
                <Volume2 size={24} className={isPlaying ? "animate-pulse" : ""} />
                {translations.listenBtn}
              </button>
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
              <button 
                className={`btn-secondary ${speed === 1 ? "active" : ""}`} 
                onClick={() => setSpeed(1)}
                style={{ fontSize: "0.85rem", padding: "0.4rem 0.8rem", background: speed === 1 ? "var(--primary-start)" : "" }}
              >
                1.0x Normal
              </button>
              <button 
                className={`btn-secondary ${speed === 0.7 ? "active" : ""}`} 
                onClick={() => setSpeed(0.7)}
                style={{ fontSize: "0.85rem", padding: "0.4rem 0.8rem", background: speed === 0.7 ? "var(--primary-start)" : "" }}
              >
                0.7x Slow
              </button>
            </div>
          </div>

          <div className="options-grid">
            {currentExercise.options.map((option, idx) => (
              <div 
                key={idx}
                className={`option-wrapper ${selectedOption === option ? "selected" : ""} ${isChecked && option === currentExercise.answer ? "success-glow" : ""}`}
                onClick={() => !isChecked && setSelectedOption(option)}
                style={{ pointerEvents: isChecked ? "none" : "auto" }}
              >
                <div className="option-radio"></div>
                <div className="option-text" lang="my">{option}</div>
              </div>
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
                  <span>
                    {translations.incorrect} {translations.myanmarTrans}: <strong>{currentExercise.answer}</strong>
                  </span>
                </>
              )}
            </div>
          )}

          <div className="action-btn-group">
            {!isChecked ? (
              <button 
                className="btn-primary" 
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                style={{ opacity: !selectedOption ? 0.6 : 1 }}
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
            You completed the listening practice!
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
