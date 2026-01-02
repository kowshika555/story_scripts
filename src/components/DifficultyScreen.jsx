import React from 'react';

const DifficultyScreen = ({ onSelect, onShowLibrary, totalScore = 0 }) => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '24px',
            padding: '20px'
        },
        scoreBadge: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            boxShadow: 'var(--shadow-card)',
            animation: 'bounce 2s infinite'
        },
        title: {
            fontSize: '3rem',
            color: 'var(--color-primary)',
            marginBottom: '10px',
            textAlign: 'center',
            textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
        },
        button: {
            padding: '20px 40px',
            fontSize: '1.5rem',
            borderRadius: 'var(--radius-full)',
            color: 'white',
            width: '320px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-button)',
            transition: 'all 0.2s'
        },
        easy: { backgroundColor: 'var(--color-success)' },
        medium: { backgroundColor: 'var(--color-secondary)' },
        hard: { backgroundColor: 'var(--color-error)' },
        library: {
            backgroundColor: '#6C5B7B',
            marginTop: '20px',
            fontSize: '1.2rem',
            padding: '16px 32px',
            width: 'auto'
        }
    };
    return (
        <div style={styles.container}>
            <style>
                {`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
                `}
            </style>
            <div style={styles.scoreBadge}>
                🏆 Total Points: {totalScore}
            </div>
            <h1 style={styles.title}>Choose Your Story!</h1>
            <button
                style={{ ...styles.button, ...styles.easy }}
                onClick={() => onSelect('easy')}
            >
                Easy (★)
            </button>
            <button
                style={{ ...styles.button, ...styles.medium }}
                onClick={() => onSelect('medium')}
            >
                Medium (★★)
            </button>
            <button
                style={{ ...styles.button, ...styles.hard }}
                onClick={() => onSelect('hard')}
            >
                Hard (★★★)
            </button>

            <button
                style={{ ...styles.button, ...styles.library }}
                onClick={onShowLibrary}
            >
                📚 Stories Library (All Stories)
            </button>
        </div>
    );
};

export default DifficultyScreen;
