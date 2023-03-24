import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressPercentage = Math.floor((scrollPosition / totalHeight) * 100);
      setProgress(progressPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className='bg-secondary fixed z-50' style={{ width: `${progress}%`, height: '2px',}}></div>
  );
};

export default ProgressBar;
