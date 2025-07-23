import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/namelogo-white.png'

const SplashScreen = () => {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '0px' // Removed root padding
  };

  const imageContainerStyle = {
    flex: 1,
    position: 'relative',
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    // background: 'linear-gradient(to top, transparent, transparent, rgba(0, 0, 0, 1))',
    zIndex: 10
  };

  const contentStyle = {
    padding: '32px 24px 50px', // Removed bottom padding
    backgroundColor: 'white',
    position: 'relative',
    marginBottom: '-80px',
    zIndex: 20,
    
  };

  const buttonStyle = {
    width: '100%',
    height: 'clamp(48px, 12vw, 56px)',
    backgroundColor: '#D7EE34',
    color: 'Black',
    fontWeight: 600,
    borderRadius: '12px',
    fontSize: 'clamp(16px, 4vw, 18px)',
    border: 'none',
    cursor: 'pointer',
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px'
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    border: '2px solid #D7EE34',
    color: 'rgba(210, 227, 60, 1)'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/register');
    }, 30000); // 30 second timeout

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={containerStyle}
    >
      {/* Image Section */}
      <div style={imageContainerStyle}>
        <div style={overlayStyle} />
        <img
          src={Logo}
          alt="Sports club"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={contentStyle}
      >
        <h1 style={{
          fontSize: 'clamp(28px, 6vw, 36px)',
          fontWeight: 700,
          color: 'rgb(17, 24, 39)',
          marginBottom: '16px',
          lineHeight: '1.25',
          textAlign: 'center'
        }}>
          Game On, Anytime!
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 4vw, 18px)',
          color: 'rgb(75, 85, 99)',
          marginBottom: '32px',
          lineHeight: '1.75',
          textAlign: 'center',
          padding: '0 8px'
        }}>
          Dive into a vibrant world of quick matches, cool courts, and legendary play — made for dreamers and doers.
        </p>

        {/* Buttons with no spacing */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '5px', // No spacing between buttons
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
            style={buttonStyle}
          >
            Get Started
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
            style={outlineButtonStyle}
          >
            Sign In
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 30, ease: "linear" }} // Matches 30s timeout
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '4px',
            backgroundColor: '#D7EE34'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;