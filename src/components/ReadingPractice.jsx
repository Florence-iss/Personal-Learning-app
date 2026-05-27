import React, { useState } from "react";
import { BookOpen, CheckCircle, XCircle, ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";

export default function ReadingPractice({ lesson, translations, onBack, onCompleteExercise }) {
  const [selectedWord, setSelectedWord] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const reading = lesson.reading || null;

  if (!reading) {
    return (
      <div className="glass-card" style={{ textAlign: "center" }}>
        <p>No reading exercise available for this lesson.</p>
        <button className="btn-secondary" onClick={onBack} style={{ margin: "1rem auto 0" }}>
          <ArrowLeft size={16} /> {translations.backToDashboard}
        </button>
      </div>
    );
  }

  // Cross-reference vocabulary to render interactive word lookups
  const renderInteractiveText = (text) => {
    const vocabList = lesson.vocabulary || [];
    
    // Normalize words for matching
    const words = text.split(/(\s+)/);
    
    return words.map((chunk, index) => {
      // Find clean alphabetical word
      const cleanWord = chunk.toLowerCase().replace(/[^a-zA-Z]/g, "");
      
      const foundVocab = vocabList.find(
        (v) => v.word.toLowerCase() === cleanWord
      );
      
      if (foundVocab) {
        return (
          <span 
            key={index} 
            className="dictionary-word"
            onClick={() => setSelectedWord(foundVocab)}
            title="Click to view translation"
          >
            {chunk}
          </span>
        );
      }
      return <span key={index}>{chunk}</span>;
    });
  };

  const handleSelectAnswer = (questionIdx, option) => {
    if (isChecked) return;
    setAnswers(prev => ({
      ...prev,
      [questionIdx]: option
    }));
  };

  const handleCheckQuiz = () => {
    const questions = reading.questions || [];
    let correctCount = 0;
    
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setIsChecked(true);
  };

  const handleNext = () => {
    setIsDone(true);
    onCompleteExercise("reading", score);
  };

  const questions = reading.questions || [];
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="practice-container">
      <div className="practice-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> {translations.backToDashboard}
        </button>
        <span className="practice-title">
          {translations.reading}
        </span>
      </div>

      {!isDone ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* Main Reading Passages */}
          <div className="glass-card">
            <h2 className="reading-panel-title" style={{ fontSize: "1.4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <BookOpen size={22} className="text-indigo" />
              {reading.title} / <span lang="my" style={{ fontSize: "1.1rem", fontWeight: "normal" }}>{reading.titleMM}</span>
            </h2>
            
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
              💡 Hint: Underlined words are interactive! Click them to see their Burmese meanings and IPA.
            </p>

            <div className="reading-layout">
              {/* English Panel */}
              <div className="reading-panel">
                <p className="reading-panel-title" style={{ fontSize: "0.9rem", color: "var(--text-muted)", textTransform: "uppercase" }}>English Version</p>
                <div className="reading-text-body">
                  {renderInteractiveText(reading.content)}
                </div>
              </div>

              {/* Burmese Parallel Panel */}
              <div className="reading-panel" lang="my">
                <p className="reading-panel-title" style={{ fontSize: "0.9rem", color: "var(--text-muted)", textTransform: "uppercase" }}>မြန်မာဘာသာပြန်</p>
                <div className="reading-text-body" style={{ color: "var(--text-secondary)" }}>
                  {reading.contentMM}
                </div>
              </div>
            </div>

            {/* Dictionary Popup Overlay */}
            {selectedWord && (
              <div style={{ background: "linear-gradient(135deg, hsla(263, 70%, 50%, 0.15), hsla(290, 80%, 52%, 0.15))", border: "1px solid var(--border-glow)", borderRadius: "var(--radius-sm)", padding: "1.25rem", margin: "1.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{selectedWord.word}</h4>
                  <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.2rem 0 0.5rem" }}>
                    IPA: {selectedWord.ipa}
                  </p>
                  <p lang="my" style={{ fontSize: "1rem", color: "var(--text-primary)" }}>
                    မြန်မာအဓိပ္ပာယ်: <strong>{selectedWord.mm}</strong>
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                    Example: {selectedWord.example} <br />
                    <span lang="my" style={{ opacity: 0.85 }}>({selectedWord.exampleMM})</span>
                  </p>
                </div>
                <button 
                  className="lang-toggle-btn" 
                  onClick={() => setSelectedWord(null)}
                  style={{ padding: "0.3rem 0.6rem", fontSize: "0.75rem" }}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Comprehension Quiz */}
          <div className="glass-card">
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", fontFamily: "var(--font-heading)" }}>
              <HelpCircle size={20} className="text-indigo" />
              Comprehension Check
            </h3>

            {questions.map((q, qIdx) => (
              <div key={qIdx} style={{ marginBottom: "2rem", borderBottom: qIdx + 1 < questions.length ? "1px solid hsla(217, 30%, 30%, 0.15)" : "none", paddingBottom: "1.5rem" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem" }}>
                  {qIdx + 1}. {q.question}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {q.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`option-wrapper ${answers[qIdx] === opt ? "selected" : ""} ${isChecked && opt === q.answer ? "success-glow" : ""}`}
                      onClick={() => handleSelectAnswer(qIdx, opt)}
                      style={{ padding: "0.85rem 1.25rem", pointerEvents: isChecked ? "none" : "auto" }}
                    >
                      <div className="option-radio" style={{ width: "16px", height: "16px" }}></div>
                      <span className="option-text" style={{ fontSize: "0.95rem" }}>{opt}</span>
                    </div>
                  ))}
                </div>

                {isChecked && (
                  <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                    {answers[qIdx] === q.answer ? (
                      <span style={{ color: "var(--success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <CheckCircle size={16} /> Correct
                      </span>
                    ) : (
                      <span style={{ color: "var(--error)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <XCircle size={16} /> Incorrect. Answer: <strong>{q.answer}</strong>
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="action-btn-group">
              {!isChecked ? (
                <button 
                  className="btn-primary" 
                  onClick={handleCheckQuiz}
                  disabled={!allAnswered}
                  style={{ opacity: !allAnswered ? 0.6 : 1 }}
                >
                  Submit Quiz
                </button>
              ) : (
                <button className="btn-primary" onClick={handleNext}>
                  {translations.nextBtn} <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card level-completed-card">
          <div className="badge-icon-glow">
            <CheckCircle size={48} />
          </div>
          <h2 className="badge-title">{translations.successBadge}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            You completed the reading practice!
          </p>
          <div style={{ fontSize: "1.25rem", fontWeight: "700" }}>
            {translations.score}: <span style={{ color: "var(--primary-end)" }}>{score} / {questions.length}</span>
          </div>
          <button className="btn-primary" onClick={onBack}>
            {translations.backToDashboard}
          </button>
        </div>
      )}
    </div>
  );
}
