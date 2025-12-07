import React from 'react';
import './StoryDetail.css';

function StoryDetail({ story, onBack }) {
  return (
    <div className="story-detail">
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
