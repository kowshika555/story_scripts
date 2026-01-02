import React from 'react';

const AnimalCharacter = ({ mood = 'neutral', isSpeaking = false }) => {
    // Lottie URLs for different panda states
    const animations = {
        neutral: "https://assets8.lottiefiles.com/packages/lf20_m6cu9vsc.json",
        happy: "https://assets3.lottiefiles.com/packages/lf20_y0p5fey8.json",
        sad: "https://assets9.lottiefiles.com/packages/lf20_T6S8vS.json"
    };

    const currentAnimation = animations[mood] || animations.neutral;

    const containerStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '200px',
        height: '200px',
        zIndex: 999999,
        pointerEvents: 'none',
        visibility: 'visible',
        display: 'block',
        overflow: 'visible',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: mood === 'happy' ? 'scale(1.1) translateY(-10px)' :
            mood === 'sad' ? 'scale(0.9) translateY(5px)' : 'scale(1)'
    };

    return (
        <div className={`panda-container mood-${mood}`} style={containerStyle}>
            <lottie-player
                key={mood} // Force re-render on mood change to ensure animation plays
                src={currentAnimation}
                background="transparent"
                speed="1"
                style={{ width: '100%', height: '100%', display: 'block' }}
                loop
                autoplay
            ></lottie-player>
        </div>
    );
};

export default AnimalCharacter;
