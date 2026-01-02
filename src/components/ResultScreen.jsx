import React from 'react';

const ResultScreen = ({ score, total, onRestart, onHome }) => {
    const isGreat = score >= 7;

    const styles = {
        container: {
            textAlign: 'center',
            padding: '40px',
            backgroundColor: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
            maxWidth: '600px',
            width: '100%'
        },
        title: {
            fontSize: '3rem',
            color: isGreat ? 'var(--color-success)' : 'var(--color-primary)',
            marginBottom: '16px'
        },
        score: {
            fontSize: '5rem',
            fontWeight: 'bold',
            color: 'var(--color-text-main)',
            marginBottom: '32px'
        },
        message: {
            fontSize: '1.5rem',
            marginBottom: '40px',
            color: 'var(--color-text-light)'
        },
        btnGroup: {
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
        },
        btn: {
            padding: '16px 32px',
            fontSize: '1.2rem',
            borderRadius: 'var(--radius-full)',
            color: '#fff',
            boxShadow: 'var(--shadow-button)'
        },
        homeBtn: { backgroundColor: 'var(--color-secondary)' },
        retryBtn: { backgroundColor: 'var(--color-accent)' }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{isGreat ? "Amazing Job!" : "Good Try!"}</h1>
            <div style={styles.score}>{score} / {total}</div>
            <p style={styles.message}>
                {isGreat ? "You are a Story Master!" : "Keep reading and learning!"}
            </p>
            <div style={styles.btnGroup}>
                <button style={{ ...styles.btn, ...styles.homeBtn }} onClick={onHome}>Home 🏠</button>
                <button style={{ ...styles.btn, ...styles.retryBtn }} onClick={onRestart}>Play Again ↺</button>
            </div>
        </div>
    );
};

export default ResultScreen;
