import React from 'react';
import './StoryList.css';
import { stories } from '../data/stories';

function StoryList({ onSelectStory }) {
  return (
    <div className="story-list">
      <h2 className="section-title">My Stories</h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="story-card"
            onClick={() => onSelectStory(story)}
          >
            <h3 className="story-title">{story.title}</h3>
            <p className="story-excerpt">{story.excerpt}</p>
            <div className="story-meta">
              <span className="story-date">{story.date}</span>
              <span className="read-more">Read more →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryList;
