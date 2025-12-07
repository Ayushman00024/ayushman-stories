import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StoryList from './components/StoryList';
import StoryDetail from './components/StoryDetail';

function App() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="App">
      <Header />
      <main className="container">
        {selectedStory ? (
          <StoryDetail 
            story={selectedStory} 
            onBack={() => setSelectedStory(null)} 
          />
        ) : (
          <StoryList onSelectStory={setSelectedStory} />
        )}
      </main>
    </div>
  );
}

export default App;
