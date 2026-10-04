// NYAYAPRAMAAN - Full Screen Video Controller & Navigation

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('mainVideo');
  const tapBtn = document.getElementById('tapToStartBtn');

  if (video) {
    const startPlayback = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (err) {
        console.warn('Autoplay waiting for interaction:', err);
      }
    };
    startPlayback();
  }

  // Smooth Redirect on Tap to Start
  if (tapBtn) {
    tapBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      document.body.style.opacity = '0';
      document.body.style.transform = 'scale(1.02)';
      setTimeout(() => {
        window.location.href = tapBtn.getAttribute('href') || 'home.html';
      }, 450);
    });
  }

  // Keyboard shortcut: Enter or Space triggers the transition
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      if (tapBtn) tapBtn.click();
    }
  });
});
