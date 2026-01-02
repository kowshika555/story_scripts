import React, { useState } from 'react';

const QuizScreen = ({ questions, onComplete, onAnswerAttempt, onBack }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const currentQuestion = questions[currentIndex];

    const handleAnswer = (selectedOption, idx) => {
        if (selectedId !== null) return; // Prevent multiple clicks

        const correct = selectedOption === currentQuestion.correctAnswer;
        setSelectedId(idx);
        setIsCorrect(correct);
        onAnswerAttempt(correct); // Trigger animal reaction

        if (correct) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            setSelectedId(null);
            setIsCorrect(null);
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                onComplete(score + (correct ? 1 : 0));
            }
        }, 1500);
    };

    const styles = {
        container: {
            padding: '20px 40px 40px 40px',
            maxWidth: '800px',
            width: '100%',
            margin: '0 auto',
            backgroundColor: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'center',
            position: 'relative'
        },
        backBtn: {
            alignSelf: 'flex-start',
            padding: '8px 16px',
            backgroundColor: 'var(--color-text-light)',
            color: 'white',
            borderRadius: 'var(--radius-full)',
            fontSize: '1rem',
            marginBottom: '20px',
            cursor: 'pointer',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        progress: {
            fontSize: '1.2rem',
            color: 'var(--color-text-light)',
            marginBottom: '16px'
        },
        question: {
            fontSize: '2rem',
            color: 'var(--color-text-main)',
            marginBottom: '32px'
        },
        optionsGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
        },
        optionBtn: (idx) => ({
            padding: '24px',
            fontSize: '1.5rem',
            backgroundColor: selectedId === idx
                ? (isCorrect ? '#4CAF50' : '#F44336')
                : 'var(--color-bg-body)',
            border: '2px solid var(--color-primary)',
            borderRadius: 'var(--radius-md)',
            color: selectedId === idx ? '#fff' : 'var(--color-text-main)',
            transition: 'all 0.2s',
            cursor: selectedId === null ? 'pointer' : 'default',
            transform: selectedId === idx ? 'scale(0.98)' : 'none'
        })
    };

    return (
        <div style={styles.container}>
            <button style={styles.backBtn} onClick={onBack}>
                ⬅ Back to Story
            </button>
            <div style={styles.progress}>Question {currentIndex + 1} / {questions.length}</div>
            <h2 style={styles.question}>{currentQuestion.text}</h2>
            <div style={styles.optionsGrid}>
                {currentQuestion.options.map((opt, idx) => (
                    <button
                        key={idx}
                        style={styles.optionBtn(idx)}
                        onClick={() => handleAnswer(opt, idx)}
                        disabled={selectedId !== null}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizScreen;
