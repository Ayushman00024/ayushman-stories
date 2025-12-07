import React, { useEffect, useState } from 'react';
import './StoryDetail.css';

function StoryDetail({ story, onBack }) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'ArrowLeft') {
        onBack();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onBack]);

  return (
    <div className="story-detail">
      <div className="reading-progress" style={{ width: `${readingProgress}%` }} />
      <button className="back-button" onClick={onBack}>
        ← Back to Stories
      </button>
      <article className="story-content">
        <h1 className="story-detail-title">{story.title}</h1>
        <p className="story-detail-date">{story.date}</p>
        <div className="story-text">
          {story.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default StoryDetail;
