import React from 'react';
import { FLAT_STORIES } from '../data/stories';

const StoriesListScreen = ({ onSelect, onBack }) => {
    const getIcon = (id) => {
        switch (id) {
            case 'pigs': return '🐷';
            case 'lion_mouse': return '🦁';
            case 'shell': return '🐚';
            case 'cinderella': return '👸';
            case 'wolf_boy': return '🐺';
            case 'robosanta': return '🤖';
            case 'alice': return '🎩';
            case 'beauty_beast': return '🌹';
            default: return '📖';
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
            minHeight: '100vh',
            width: '100%',
            boxSizing: 'border-box',
            background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
        },
        title: {
            fontSize: '3.5rem',
            color: 'var(--color-primary)',
            marginBottom: '40px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '30px',
            width: '100%',
            maxWidth: '1200px',
            paddingBottom: '40px'
        },
        card: {
            backgroundColor: 'var(--color-bg-card)',
            padding: '30px',
            borderRadius: '30px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            border: '4px solid #fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
        },
        icon: {
            fontSize: '4rem',
            marginBottom: '10px'
        },
        storyTitle: {
            fontSize: '1.6rem',
            margin: '0',
            color: 'var(--color-text-main)',
            lineHeight: '1.2'
        },
        difficulty: (level) => ({
            fontSize: '1rem',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: level === 'Easy' ? 'var(--color-success)' :
                level === 'Medium' ? 'var(--color-secondary)' :
                    'var(--color-error)',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }),
        backBtn: {
            marginBottom: '20px',
            padding: '12px 24px',
            backgroundColor: 'var(--color-text-light)',
            color: 'white',
            borderRadius: 'var(--radius-full)',
            alignSelf: 'flex-start',
            fontSize: '1.1rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
    };

    return (
        <div style={styles.container}>
            <button style={styles.backBtn} onClick={onBack}>← Back Home</button>
            <h1 style={styles.title}>Magic Story Library</h1>
            <div style={styles.grid}>
                {FLAT_STORIES.map(story => (
                    <div
                        key={story.id}
                        style={styles.card}
                        onClick={() => onSelect(story)}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                            e.currentTarget.style.borderColor = 'var(--color-accent)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.borderColor = '#fff';
                        }}
                    >
                        <div style={styles.icon}>{getIcon(story.id)}</div>
                        <h3 style={styles.storyTitle}>{story.title}</h3>
                        <span style={styles.difficulty(story.difficulty)}>{story.difficulty}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoriesListScreen;
