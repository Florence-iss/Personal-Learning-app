import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, CheckCircle, XCircle, ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";

export default function SpeakingPractice({ lesson, translations, onBack, onCompleteExercise }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [recognitionScore, setRecognitionScore] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const recognitionRef = useRef(null);
  const exercises = lesson.speaking || [];
  const currentExercise = exercises[currentIdx];

  useEffect(() => {
    // Reset states on index change
    setSpokenText("");
    setRecognitionScore(null);
    setIsChecked(false);
    setIsCorrect(false);
    setErrorMsg("");
    
    // Initialize Web Speech API Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";

      rec.onstart = () => {
        setIsRecording(true);
        setErrorMsg("");
      };

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenText(transcript);
        calculateScore(transcript);
      };

      rec.onerror = (event) => {
        console.error("Speech Recognition Error: ", event.error);
        if (event.error === "not-allowed") {
          setErrorMsg("Microphone permission denied. Please enable microphone access in browser settings.");
        } else {
          setErrorMsg(`Error reading speech: ${event.error}. Please try again.`);
        }
        setIsRecording(false);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = rec;
    } else {
      setErrorMsg("Speech Recognition is not supported by your current browser. Please try Google Chrome or Safari.");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [currentIdx]);

  if (exercises.length === 0) {
    return (
      <div className="glass-card" style={{ textAlign: "center" }}>
        <p>No speaking exercises available for this lesson.</p>
        <button className="btn-secondary" onClick={onBack} style={{ margin: "1rem auto 0" }}>
          <ArrowLeft size={16} /> {translations.backToDashboard}
        </button>
      </div>
    );
  }

  const handleSpeakTarget = () => {
    if (!currentExercise) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentExercise.text);
    utterance.lang = "en-US";
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      setSpokenText("");
      setRecognitionScore(null);
      setIsChecked(false);
      try {
        recognitionRef.current?.start();
      } catch (err) {
        console.error("Failed to start speech recognition: ", err);
      }
    }
  };

  // Simple string similarity assessment
  const calculateScore = (transcript) => {
    const cleanTarget = currentExercise.text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
    const cleanSpoken = transcript.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();

    const targetWords = cleanTarget.split(/\s+/);
    const spokenWords = cleanSpoken.split(/\s+/);

    let matchCount = 0;
    targetWords.forEach(word => {
      if (spokenWords.includes(word)) {
        matchCount++;
      }
    });

    const percentMatch = Math.round((matchCount / Math.max(targetWords.length, 1)) * 100);
    setRecognitionScore(percentMatch);
    setIsChecked(true);

    const correct = percentMatch >= 70; // 70% threshold is considered correct
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < exercises.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsDone(true);
      onCompleteExercise("speaking", score);
    }
  };

  return (
    <div className="practice-container">
      <div className="practice-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> {translations.backToDashboard}
        </button>
        <span className="practice-title">
          {translations.speaking} ({currentIdx + 1}/{exercises.length})
        </span>
      </div>

      {!isDone ? (
        <div className="glass-card">
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }} lang="my">
            {currentExercise.instructionMM || translations.startRecordingTip}
          </p>

          <div className="target-sentence-container">
            <div className="target-sentence">{currentExercise.text}</div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1.5rem 0" }}>
              <button className="btn-secondary" onClick={handleSpeakTarget}>
                <Volume2 size={18} className={isPlaying ? "animate-pulse text-indigo" : ""} />
                Listen Guide
              </button>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            {recognitionRef.current ? (
              <button 
                className={isRecording ? "btn-record" : "btn-primary"} 
                onClick={startListening}
                style={{ padding: "1.25rem 2.25rem", fontSize: "1.1rem", borderRadius: "50px", margin: "0 auto" }}
              >
                {isRecording ? (
                  <>
                    <MicOff size={22} />
                    {translations.stopBtn}
                  </>
                ) : (
                  <>
                    <Mic size={22} />
                    {translations.speakBtn}
                  </>
                )}
              </button>
            ) : (
              <p style={{ color: "var(--error)" }}>{errorMsg}</p>
            )}

            {errorMsg && (
              <p style={{ color: "var(--error)", fontSize: "0.9rem", marginTop: "1rem" }}>
                {errorMsg}
              </p>
            )}
          </div>

          {spokenText && (
            <div style={{ margin: "1.5rem 0", padding: "1rem", border: "1px solid var(--border-light)", borderRadius: "var(--radius-sm)", background: "hsla(223, 40%, 10%, 0.3)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase" }}>You said:</p>
              <p style={{ fontSize: "1.15rem", fontWeight: "600", color: "var(--text-primary)", fontStyle: "italic", margin: "0.25rem 0" }}>"{spokenText}"</p>
            </div>
          )}

          {isChecked && recognitionScore !== null && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="speech-score-meter">
                <div 
                  className="speech-score-circle" 
                  style={{ borderColor: isCorrect ? "var(--success)" : "var(--error)" }}
                >
                  <span className="speech-score-val" style={{ color: isCorrect ? "var(--success)" : "var(--error)" }}>
                    {recognitionScore}%
                  </span>
                  <span className="speech-score-lbl">Match</span>
                </div>
              </div>

              <div className={`feedback-box ${isCorrect ? "feedback-success" : "feedback-error"}`}>
                {isCorrect ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Excellent pronunciation! (+1 {translations.score})</span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} />
                    <span>Keep trying! Aim for at least 70% match. Try reading again clearly.</span>
                  </>
                )}
              </div>
            </div>
          )}

          {isChecked && (
            <div className="action-btn-group">
              <button className="btn-secondary" onClick={() => setCurrentIdx(currentIdx)}>
                <RefreshCw size={16} /> Try Again
              </button>
              <button className="btn-primary" onClick={handleNext}>
                {translations.nextBtn} <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="glass-card level-completed-card">
          <div className="badge-icon-glow">
            <CheckCircle size={48} />
          </div>
          <h2 className="badge-title">{translations.successBadge}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            You completed the speaking practice!
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
