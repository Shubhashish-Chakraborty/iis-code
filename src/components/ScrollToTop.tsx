import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to toggle button visibility
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll securely to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

// Inline styles ensure it works regardless of whether you use Tailwind, Vanilla CSS, or SCSS. 
// You can move this to a CSS file if you prefer!
const styles = {
  button: {
    position: 'fixed' as const,
    bottom: '40px',
    right: '40px',
    height: '50px',
    width: '50px',
    fontSize: '24px',
    backgroundColor: '#6366f1', // Feel free to change this to match your app's theme
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease-in-out',
  },
};

export default ScrollToTop;
