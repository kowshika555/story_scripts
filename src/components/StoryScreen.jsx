import React, { useEffect } from 'react';

const StoryScreen = ({ story, onStartQuiz, setIsSpeaking, onBack }) => {
    useEffect(() => {
        setIsSpeaking(true);
        return () => setIsSpeaking(false);
    }, [setIsSpeaking]);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            padding: '20px 40px 40px 40px',
            boxSizing: 'border-box',
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
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
        // ... existing styles
        title: {
            fontSize: '2.5rem',
            color: 'var(--color-primary)',
            marginBottom: '24px',
            textAlign: 'center'
        },
        text: {
            fontSize: '1.5rem',
            lineHeight: '1.6',
            color: 'var(--color-text-main)',
            marginBottom: '40px',
            whiteSpace: 'pre-line' // Preserve paragraphs
        },
        button: {
            padding: '16px 32px',
            fontSize: '1.25rem',
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            borderRadius: 'var(--radius-full)',
            alignSelf: 'center',
            boxShadow: 'var(--shadow-button)'
        }
    };

    return (
        <div style={styles.container}>
            <button style={styles.backBtn} onClick={onBack}>
                ⬅ Back to Menu
            </button>
            <h2 style={styles.title}>{story.title}</h2>
            <div style={styles.text}>{story.content}</div>
            <button style={styles.button} onClick={onStartQuiz}>
                Start Quiz! ➜
            </button>
        </div>
    );
};

export default StoryScreen;
