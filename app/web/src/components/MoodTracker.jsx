import React, { useState, useEffect } from 'react';
import { Smile, Frown, Meh, Cloud, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  const moods = [
    { id: 'happy', label: 'Happy', icon: Smile, color: 'text-yellow-500' },
    { id: 'calm', label: 'Calm', icon: Heart, color: 'text-primary' },
    { id: 'anxious', label: 'Anxious', icon: Zap, color: 'text-secondary' },
    { id: 'sad', label: 'Sad', icon: Frown, color: 'text-blue-500' },
    { id: 'stressed', label: 'Stressed', icon: Cloud, color: 'text-red-500' },
    { id: 'neutral', label: 'Neutral', icon: Meh, color: 'text-muted-foreground' },
  ];

  useEffect(() => {
    const stored = localStorage.getItem('moodHistory');
    if (stored) {
      setMoodHistory(JSON.parse(stored));
    }
  }, []);

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
    const newEntry = {
      mood: moodId,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    const updatedHistory = [newEntry, ...moodHistory].slice(0, 30);
    setMoodHistory(updatedHistory);
    localStorage.setItem('moodHistory', JSON.stringify(updatedHistory));
  };

  const getMoodColor = (moodId) => {
    return moods.find(m => m.id === moodId)?.color || 'text-muted-foreground';
  };

  return (
    <div className="space-y-8 w-full glass-card p-8 md:p-10">
      {/* Mood Selection */}
      <div className="space-y-6">
        <h3 className="font-heading text-[28px] font-medium text-foreground">How are you feeling today?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <motion.button
                key={mood.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMoodSelect(mood.id)}
                className={`p-5 rounded-[24px] border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  selectedMood === mood.id ? 'ring-2 ring-primary bg-primary/10 border-primary/50' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-inner ${mood.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="body-text font-medium text-foreground">{mood.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Mood History */}
      {moodHistory.length > 0 && (
        <div className="space-y-6">
          <h3 className="font-heading text-[28px] font-medium text-foreground">Your Mood Timeline</h3>
          <div className="bg-background/50 border border-border/50 rounded-[24px] p-6 max-h-80 overflow-y-auto shadow-inner backdrop-blur-sm">
            <div className="space-y-4">
              {moodHistory.map((entry, index) => {
                const mood = moods.find(m => m.id === entry.mood);
                const Icon = mood?.icon || Meh;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-[20px] bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-inner ${getMoodColor(entry.mood)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="body-text font-semibold text-foreground capitalize">{entry.mood}</p>
                      <p className="text-sm text-muted-foreground">{entry.date} at {entry.time}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {moodHistory.length === 0 && (
        <div className="text-center py-16 bg-background/50 rounded-[24px] border border-dashed border-border/50">
          <p className="body-text">Select your mood to start tracking your emotional wellness journey</p>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;