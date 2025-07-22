import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const SplashScreen = () => {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  };

  const imageContainerStyle = {
    flex: 1,
    position: 'relative',
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, transparent, transparent, rgba(0, 0, 0, 0))',
    zIndex: 10
  };

  const contentStyle = {
    padding: '32px 24px 48px 24px',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 20,
    background: 'linear-gradient(to bottom, transparent, transparent, rgba(0, 0, 0, 0.5))'
  };

  const buttonStyle = {
    width: '100%',
    height: '56px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 600,
    borderRadius: '12px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer'
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    border: '2px solid #D7EE34',
    color: 'rgb(55, 65, 81)'
  };

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
          src="/fulllogo-white.png"
          alt="Sports club"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.0 }}
          style={{
            position: 'absolute',
            top: '64px',
            left: '24px',
            zIndex: 20
          }}
        >
          {/* Logo placeholder */}
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={contentStyle}
      >
        <h1 style={{
          fontSize: '36px',
          fontWeight: 700,
          color: 'rgb(17, 24, 39)',
          marginBottom: '16px',
          lineHeight: '1.25'
        }}>
          Game On, Anytime!
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'rgb(75, 85, 99)',
          marginBottom: '32px',
          lineHeight: '1.75'
        }}>
          Dive into a vibrant world of quick matches, cool courts, and legendary play — made for dreamers and doers.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
            style={buttonStyle}
          >
            Get Started
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
            style={outlineButtonStyle}
          >
            Sign In
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '4px',
            backgroundColor: '#D7EE34'
          }}
          onAnimationComplete={() => navigate('/register')}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;